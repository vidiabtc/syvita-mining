<script>
	import PoolStats from '$components/pool/poolStats.svelte';
	import PoolActivity from '$components/pool/poolActivity.svelte';
	import PoolHistory from '$components/pool/poolHistory.svelte';
	import SelectCity from '$components/selectCity.svelte';
	import MineManyHistory from '$components/pool/MineManyHistory.svelte';

	import { user, city, t } from '$lib/stores.js';
	import { getLatestPoolId, getPool, getBlockHeight } from '$lib/apiCalls';
	import { getStxAddress } from '$lib/auth';

	$: stxAddress = getStxAddress($user);
	// $: stxAddress = 'SP3YXDXXHX1KQWG7N7G9WJQR69QGYN6DR1NK5H8XK';
	$: poolId = getLatestPoolId($city);
	$: blockHeight = getBlockHeight($city);
</script>

<svelte:head>
	<title>CityCoins Mining Pool | Syvita Mining</title>
	<meta
		name="description"
		content="Join the Syvita Mining Pool for CityCoins mining. By pooling your funds with others you can affordably and profitably mine for CityCoins."
	/>
</svelte:head>

<div class="pool-wrapper">
	<div class="select-city">
		<SelectCity/>
	</div>
	{#await poolId}
		<h1>loading...</h1>
	{:then poolId}
		<PoolStats city={$city} {poolId} {blockHeight} {stxAddress} />
		<PoolHistory city={$city} {poolId} />
		<!-- <PoolActivity city={$city} /> -->

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
