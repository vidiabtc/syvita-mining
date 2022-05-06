<script context="module">
	import { CITIES } from '$lib/constants';

	export async function load({ params, fetch }) {
		let city = CITIES[params.city];
		if (!city) {
			return {
				status: 303,
				redirect: '/pool'
			};
		} else {
			let poolId = params.poolId - city.startingPoolId;
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
					poolId,
					pool,
          city
				}
			};
		}
	}
</script>

<script>
	export let poolId;
	export let pool;
  export let city

	import PoolStats from '$components/pool/poolStats.svelte';
	import PoolActivity from '$components/pool/poolActivity.svelte';
	import PoolHistory from '$components/pool/poolHistory.svelte';
	import SelectCity from '$components/selectCity.svelte';
	import Contribute from '$components/pool/contribute.svelte';

	import { user, t } from '$lib/stores.js';
	import { getPool, getBlockHeight, getLatestPoolId } from '$lib/apiCalls';
	import { getStxAddress } from '$lib/auth';

	$: stxAddress = getStxAddress($user);
	// $: stxAddress = 'SPBA7BPCQTPVJATE06PPRJZ5ND1QK5V6ZAAQN9B7';
	$: blockHeight = getBlockHeight(city);
	$: latestPoolId = getLatestPoolId(city);
</script>

<div class="pool-wrapper">
	<div class="select-city">
		<!-- <SelectCity/> -->
	</div>
	{#await poolId}
		<h1>loading...</h1>
	{:then poolId}
		{#await latestPoolId}
			<h1>loading...</h1>
		{:then latestPoolId}
			{#await blockHeight}
			{:then blockHeight}
				<PoolStats city={city} {poolId} {blockHeight} {stxAddress} />
				<PoolHistory city={city} poolId={latestPoolId} {blockHeight}/>
			{/await}	
		{/await}
		<!-- <PoolActivity city={city} /> -->
	{/await}
</div>

<style>
	.pool-wrapper {
		max-width: 1170px;
		margin: auto;
		padding-top: 75px;
	}

	.select-city {
		width: fit-content;
		max-width: 770px;
		margin-left: auto;
		margin-right: 20px;
		padding-bottom: 35px;
	}
</style>
