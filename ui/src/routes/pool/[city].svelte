<script context="module">
	import { CITIES } from '$lib/constants';

	export async function load({ params, fetch }) {
		let city = params.city;

			city = CITIES[city];
		
		if (!city) {
			return {
				status: 303,
				redirect: '/pool/mia'
			};
		} else {
			return {
				props: {
					city
				}
			};
		}
	}
</script>

<script>
	import PoolStats from '$components/pool/poolStats.svelte';
	import PoolHistory from '$components/pool/poolHistory.svelte';
	import PoolSelectCity from '$components/pool/PoolSelectCity.svelte';
	import SelectCity from '$components/selectCity.svelte';
	import EmailSubscribe from '$components/pool/emailSubscribe.svelte';
	import { user, t } from '$lib/stores.js';
	import { getLatestPoolId, getPool, getBlockHeight } from '$lib/apiCalls';
	import StxPoolStats from '$components/stx/poolStats.svelte';
	import Contribute from '$components/stx/contribute.svelte';
	import { getStore, createInvoice, getInvoices } from '$lib/btcpay.js';
	import { getStxAddress } from '$lib/auth';

	export let city;

	$: stxAddress = getStxAddress($user);
	// $: stxAddress = 'SP3YXDXXHX1KQWG7N7G9WJQR69QGYN6DR1NK5H8XK';
	$: poolId = getLatestPoolId(city);
	$: blockHeight = getBlockHeight(city);
</script>

<svelte:head>
	<title>CityCoins Mining Pool | Syvita Mining</title>
	<meta
		name="description"
		content="Join the Syvita Mining Pool for CityCoins mining. By pooling your funds with others you can more affordably mine for CityCoins."
	/>
</svelte:head>


<div class="pool-wrapper">
  <div class="select-city">
    <PoolSelectCity selectedCity={city.coin} />
  </div>
  {#await poolId}
    <h1>loading...</h1>
  {:then poolId}
	{#await blockHeight}
	{:then blockHeight}
		<PoolStats {city} {poolId} {blockHeight} {stxAddress} />
		<PoolHistory {city} {poolId} {blockHeight} />
		<EmailSubscribe />
	{/await}
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

	@media (max-width: 768px) {
		.contribute-input {
			flex-direction: column;
			align-items: center;
			gap: 5px;
		}
		.contribute-input button {
			margin-left: 0;
		}
	}
</style>
