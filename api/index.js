import { Router } from 'itty-router'
import { runCron } from './cron.js'
import sanityClient from '@sanity/client'
import { getCats } from './docs.js'

const router = Router({ base: '/api' })

const headers = {
  'content-type': 'application/json;charset=UTF-8',
  'Access-Control-Allow-Origin': '*',
}

// initialize sanity client
export const client = sanityClient({
  projectId: 'indusCMS',
  dataset: 'production',
  apiVersion: '2022-02-28', // use current UTC date - see "specifying API version"!
  // or leave blank for unauthenticated usage
  token: '',
  useCdn: true, // `false` if you want to ensure fresh data
})


router.get('/', async () => new Response('zoopy poopy', headers))

// router.get('/docs', async () => {
//   let docs = await getCats();
//   return new Response(JSON.stringify(docs), { headers })
// })

// return stacking cycle stats for city
router.get('/:city/cycles', async ({ params }) => {
  const { city } = params

  let cycles = await CITYCOINS.get(`cycle-stacking-stats-${city}`)

  return new Response(cycles, { headers })
})

// return latest block height
router.get('/blockheight', async () => {
  let blockHeight = await CITYCOINS.get('current-block-height')
  return new Response('blockHeight', { headers })
})

// return stx price
router.get('/price', async () => {
  let price = await CITYCOINS.get('stx-price')
  return new Response(price, { headers })
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
