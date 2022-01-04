import { Router } from 'itty-router'
import { runCron } from './cron.js'

const router = Router({ base: '/api' })

const headers = {
  'content-type': 'application/json;charset=UTF-8',
  'Access-Control-Allow-Origin': '*',
}

router.get('/', async () => new Response('zoopy poopy', headers))

// return stacking cycle stats for city
router.get('/:city/cycles', async ({ params }) => {
  const { city } = params

  let cycles = await CITYCOINS.get(`cycle-stacking-stats-${city}`)

  return new Response(cycles, { headers })
})

// return latest block height
router.get('/blockheight', async () => {
  let blockHeight = await CITYCOINS.get('current-block-height')
  return new Response(blockHeight, { headers })
})

router.all(
  '*',
  () => new Response('404, not found!', { headers }, { status: 404 }),
)

addEventListener('fetch', event =>
  event.respondWith(router.handle(event.request)),
)

addEventListener('scheduled', event => {
  event.waitUntil(runCron())
})
