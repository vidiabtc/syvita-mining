import { CITIES, BASE_URL, CYCLE_LENGTH } from './constants.js'
import { getStackingStatsAtCycle } from './readOnly.js'

export const runCron = async () => {
  let lastBlockChecked = await CITYCOINS.get('current-block-height')
  // console.log('Last block checked: ', lastBlockChecked)
  let currentBlock = await getBlockHeight()
  // console.log('Current block: ', currentBlock)
  // if (currentBlock != lastBlockChecked) {

  if (currentBlock != lastBlockChecked) {
    console.log('Running cron for new block...')
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
      let currentCycle =
        Math.floor(
          (parseInt(currentBlock) - parseInt(city.activationBlock)) /
            CYCLE_LENGTH,
        ) + 1
      console.log(`Current cycle for ${city.name}: `, currentCycle)

      let allCycleData = await CITYCOINS.get(
        `cycle-stacking-stats-${city.coin}`,
      )

      if (allCycleData == null) {
        let cycleStackingStats = await getStackingStatsAtCycle(city, 1)
        allCycleData = {
          [1]: {
            [city.coin]: parseInt(cycleStackingStats.amountToken.value),
            stx: parseInt(cycleStackingStats.amountUstx.value) / 1000000,
          },
        }
      } else {
        allCycleData = JSON.parse(allCycleData)
        let previousCycles = Object.keys(allCycleData)
        let lastUpdatedCycle = parseInt(
          previousCycles[previousCycles.length - 1],
        )

        if (lastUpdatedCycle < currentCycle) {
          let cycleStackingStats = await getStackingStatsAtCycle(
            city,
            lastUpdatedCycle + 1,
          )
          allCycleData[lastUpdatedCycle + 1] = {
            [city.coin]: parseInt(cycleStackingStats.amountToken.value),
            stx: parseInt(cycleStackingStats.amountUstx.value) / 1000000,
          }
        } else if (lastUpdatedCycle == currentCycle) {
          let cycleStackingStats = await getStackingStatsAtCycle(
            city,
            currentCycle,
          )
          allCycleData[currentCycle] = {
            [city.coin]: parseInt(cycleStackingStats.amountToken.value),
            stx: parseInt(cycleStackingStats.amountUstx.value) / 1000000,
          }

          cycleStackingStats = await getStackingStatsAtCycle(
            city,
            currentCycle - 1,
          )
          allCycleData[currentCycle - 1] = {
            [city.coin]: parseInt(cycleStackingStats.amountToken.value),
            stx: parseInt(cycleStackingStats.amountUstx.value) / 1000000,
          }
        }
      }

      await CITYCOINS.put(
        `cycle-stacking-stats-${city.coin}`,
        JSON.stringify(allCycleData),
      )

      console.log('data', allCycleData)
    }),
  )
}
