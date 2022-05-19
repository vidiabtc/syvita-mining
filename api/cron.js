import { CITIES, BASE_URL, CYCLE_LENGTH } from './constants.js'
import {
  getLatestUserId,
  getStackingStatsAtCycle,
  getUser,
} from './readOnly.js'

export const runCron = async () => {
  let lastBlockChecked = await CITYCOINS.get('current-block-height')
  // console.log('Last block checked: ', lastBlockChecked)
  let currentBlock = await getBlockHeight()

  // console.log('Current block: ', currentBlock)
  // if (currentBlock != lastBlockChecked) {

  if (currentBlock != lastBlockChecked) {
    console.log('Running cron for new block...')
    console.log('Updating STX Price')
    let price = await getStxPrice()
    await CITYCOINS.put('stx-price', price.toString())
    await updateSyvitaMiningData(currentBlock)
    await CITYCOINS.put('current-block-height', currentBlock.toString())
  } else {
    console.log('Cron already ran for this block')
  }
  return new Response()
}

const getBlockHeight = async () => {
  let url = `${BASE_URL}/block`
  let res = await fetch(url)
  let data = await res.json()
  let block = data.total
  console.log('Block height: ', block)
  return block
}

const updateSyvitaMiningData = async currentBlock => {
  await Promise.all(
    Object.keys(CITIES).map(async city => {
      city = CITIES[city]
      console.log(`Updating data for ${city.name}`)

      await updateStackingCycleData(city, currentBlock)
      // await updateUserIds(city)
    }),
  )
}

// const updateUserIds = async city => {
//   let allUserIds = await CITYCOINS.get(`user-ids-${city.coin}`)
//   let latestUserId = await getLatestUserId(city)
//   console.log(`Latest user id for ${city.coin}: `, latestUserId)

//   if (allUserIds == null) {
//     let stxAddress = await getUser(city, 1)
//     console.log(`stx address for user id 1: `, stxAddress)
//     allUserIds = {
//       [stxAddress]: 1,
//     }
//   } else {
//     allUserIds = JSON.parse(allUserIds)
//     let previousUserIds = Object.keys(allUserIds)
//     // console.log('previous user ids: ', previousUserIds)
//     let lastUserIdAdded = previousUserIds.length
//     // console.log('Last user id added: ', lastUserIdAdded)

//     if (lastUserIdAdded < latestUserId) {
//       let stxAddress = await getUser(city, lastUserIdAdded + 1)
//       console.log(
//         `stx address for user id ${lastUserIdAdded + 1}: `,
//         stxAddress,
//       )
//       allUserIds[stxAddress] = lastUserIdAdded + 1
//     } else {
//       let stxAddress = await getUser(city, latestUserId)
//       console.log(`stx address for user id ${latestUserId}: `, stxAddress)
//       allUserIds[stxAddress] = latestUserId
//     }
//   }
//   await CITYCOINS.put(`user-ids-${city.coin}`, JSON.stringify(allUserIds))
//   console.log('user ids: ', allUserIds)
// }

const getStxPrice = async () => {
  let url = 'https://api.coingecko.com/api/v3/simple/price?ids=blockstack&vs_currencies=USD'
  let res = await fetch(url);
  let data = await res.json();
  let price = data.blockstack.usd;
  return price;
}

const updateStackingCycleData = async (city, currentBlock) => {
  let currentCycle =
    Math.floor(
      (parseInt(currentBlock) - parseInt(city.activationBlock)) / CYCLE_LENGTH,
    ) + 1
  console.log(`Current cycle for ${city.name}: `, currentCycle)

  let allCycleData = await CITYCOINS.get(`cycle-stacking-stats-${city.coin}`)

  console.log('all cycle data: ', allCycleData)

  if (allCycleData == null) {
    let cycleStackingStats = await getStackingStatsAtCycle(city, 1)
    allCycleData = {
      [1]: {
        [city.coin]: parseInt(cycleStackingStats.amountToken.value) / 1000000,
        stx: parseInt(cycleStackingStats.amountUstx.value) / 1000000,
      },
    }
  } else {
    allCycleData = JSON.parse(allCycleData)
    let previousCycles = Object.keys(allCycleData)
    let lastUpdatedCycle = parseInt(previousCycles[previousCycles.length - 1])

    if (lastUpdatedCycle < currentCycle) {
      let cycleStackingStats = await getStackingStatsAtCycle(
        city,
        lastUpdatedCycle + 1,
      )
      allCycleData[lastUpdatedCycle + 1] = {
        [city.coin]: parseInt(cycleStackingStats.amountToken.value) / 1000000,
        stx: parseInt(cycleStackingStats.amountUstx.value) / 1000000,
      }
    } else if (lastUpdatedCycle == currentCycle) {
      let cycleStackingStats = await getStackingStatsAtCycle(city, currentCycle)
      allCycleData[currentCycle] = {
        [city.coin]: parseInt(cycleStackingStats.amountToken.value) / 1000000,
        stx: parseInt(cycleStackingStats.amountUstx.value) / 1000000,
      }

      cycleStackingStats = await getStackingStatsAtCycle(city, currentCycle - 1)
      allCycleData[currentCycle - 1] = {
        [city.coin]: parseInt(cycleStackingStats.amountToken.value) / 1000000,
        stx: parseInt(cycleStackingStats.amountUstx.value) / 1000000,
      }
    }
  }

  await CITYCOINS.put(
    `cycle-stacking-stats-${city.coin}`,
    JSON.stringify(allCycleData),
  )

  console.log('data', allCycleData)
}
