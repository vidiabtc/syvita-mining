<script>
	import PoolStats from '$components/pool/poolStats.svelte';
	import PoolActivity from '$components/pool/poolActivity.svelte';
	import PoolHistory from '$components/pool/poolHistory.svelte';

	import { user, city, t } from '$lib/stores.js';
	import { getLatestPoolId, getPool, getBlockHeight, getContributionSum } from '$lib/apiCalls';
	import { getStxAddress } from '$lib/auth';

	// $: stxAddress = getStxAddress($user);
	$: stxAddress = 'SP3YXDXXHX1KQWG7N7G9WJQR69QGYN6DR1NK5H8XK';
	$: poolId = getLatestPoolId($city);
	$: blockHeight = getBlockHeight($city);
</script>

<div class="pool-wrapper">
	<div class="select-city" />
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
		max-width: 1170px;
		margin: auto;
	}

	.select-city {
		width: fit-content;
		margin-left: auto;

		padding-bottom: 35px;
	}
</style>
