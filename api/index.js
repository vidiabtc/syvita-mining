import { Router } from 'itty-router'
import { runCron } from './cron.js'

const crons = {
  latestPoolId: '*/1 * * * *',
  pools: '*/3 * * * *',
  mineManys: '*/5 * * * *',
}

const router = Router({ base: '/api' })

const headers = {
  'content-type': 'application/json;charset=UTF-8',
  'Access-Control-Allow-Origin': '*',
}

router.get('/', async () => new Response('zoopy poopy', headers))

// return latest pool id
router.get('/:city/latestpoolid', async ({ params }) => {
  const { city } = params
  let latestPoolId = await POOL.get(`latest-pool-id-${city}`)

  return new Response(latestPoolId, { headers })
})

// return specific pool
router.get('/:city/pool/:id', async ({ params }) => {
  const { city } = params
  const { id } = params

  let pool = await POOL.get(`${city}-pool-${id}`)

  return new Response(pool, { headers })
})

// return latest block height
router.get('/blockheight', async () => {
  let blockHeight = await POOL.get('current-block-height')
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
