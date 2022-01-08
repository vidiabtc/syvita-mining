<script context="module">
	import { CITIES } from '$lib/constants';
	export async function load({ page, fetch }) {
		let city = CITIES[page.params.city];

		if (!city) {
			return {
				status: 303,
				redirect: '/pool'
			};
		} else {
			let poolId = page.params.poolId - city.startingPoolId;
			let url = `https://api.ocelo.workers.dev/api/${city.coin}/pool/${poolId}`;
			let res = await fetch(`https://api.ocelo.workers.dev/api/${city.coin}/pool/${poolId}`);
			let pool;

			try {
				pool = await res.json();
			} catch (error) {
				return {
					status: 303,
					redirect: '/pool'
				};
			}

			return {
				props: {
					city,
					poolId,
					pool
				}
			};
		}
	}
</script>

<script>
	export let city;
	export let poolId;
	export let pool;

	import PoolStats from '$components/pool/poolStats.svelte';
	import PoolActivity from '$components/pool/poolActivity.svelte';
	import PoolHistory from '$components/pool/poolHistory.svelte';
	import SelectCity from '$components/selectCity.svelte';
	import Contribute from '$components/pool/contribute.svelte';

	import { user, t } from '$lib/stores.js';
	import { getLatestPoolId, getPool, getBlockHeight, getContributionSum } from '$lib/apiCalls';
	import { getStxAddress } from '$lib/auth';

	// $: stxAddress = getStxAddress($user);
	$: stxAddress = 'SP3YXDXXHX1KQWG7N7G9WJQR69QGYN6DR1NK5H8XK';
	$: blockHeight = getBlockHeight(city);
</script>

<div class="pool-wrapper">
	{#await poolId}
		<h1>loading...</h1>
	{:then poolId}
		<PoolStats {city} {poolId} {blockHeight} {stxAddress} />
		<PoolHistory {city} {poolId} />
		<PoolActivity {city} />
	{/await}
</div>

<style>
	.pool-wrapper {
		margin-top: -30px;
	}
</style>
