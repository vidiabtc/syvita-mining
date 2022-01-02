import { CITIES, BASE_URL, CYCLE_LENGTH } from './constants.js'

export const runCron = async () => {
  let lastBlockChecked = await POOL.get('current-block-height')
  // console.log('Last block checked: ', lastBlockChecked)
  let currentBlock = await getBlockHeight()
  // console.log('Current block: ', currentBlock)
  if (currentBlock != lastBlockChecked) {
    console.log('Running cron for new block...')
    await updateSyvitaMiningData(currentBlock)
    await POOL.put('current-block-height', currentBlock.toString())
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
      let currentCycle = Math.floor(
        (parseInt(currentBlock) - parseInt(city.activationBlock)) /
          CYCLE_LENGTH,
      )
      console.log(`Current cycle for ${city.name}: `, currentCycle)
    }),
  )
}
