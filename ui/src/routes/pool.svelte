<script>
	import PoolStats from '$components/pool/poolStats.svelte';
	import PoolActivity from '$components/pool/poolActivity.svelte';
	import PoolHistory from '$components/pool/poolHistory.svelte';
	import SelectCity from '$components/selectCity.svelte';

	import { user, city } from '$lib/stores.js';
	import { getLatestPoolId, getPool, getBlockHeight, getContributionSum } from '$lib/apiCalls';
	import { getStxAddress } from '$lib/auth';

	// $: stxAddress = getStxAddress($user);
	$: stxAddress = 'SP3YXDXXHX1KQWG7N7G9WJQR69QGYN6DR1NK5H8XK';
	$: poolId = getLatestPoolId($city);
	$: blockHeight = getBlockHeight($city);
</script>

<div class="pool-wrapper">
	<div class="select-city">
		<SelectCity />
	</div>
	{#await poolId}
		<h1>loading...</h1>
	{:then poolId}
		<PoolStats city={$city} {poolId} {blockHeight} {stxAddress} />
		<PoolHistory city={$city} {poolId} />
		<PoolActivity city={$city} />
	{/await}
</div>

<style>
	.pool-wrapper {
		margin-top: -30px;
	}

	.select-city {
		width: fit-content;
		margin-left: auto;
		padding-right: 120px;
		padding-bottom: 35px;
	}
</style>
