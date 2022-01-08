<script>
	// import PoolHistory from '$components/pool/poolHistory.svelte';
	import { user, city, t } from '$lib/stores.js';
	import { getLatestPoolId, getPool, getBlockHeight, getContributionSum } from '$lib/apiCalls';
	import { getStxAddress } from '$lib/auth';

	// $: stxAddress = getStxAddress($user);
	$: stxAddress = 'SP3YXDXXHX1KQWG7N7G9WJQR69QGYN6DR1NK5H8XK';
	$: poolId = getLatestPoolId($city);
	$: blockHeight = getBlockHeight($city);
</script>

{#await poolId}
	<h1>loading...</h1>
{:then poolId}
	<PoolStats city={$city} {poolId} {blockHeight} {stxAddress} />
{/await}

<style>
	div {
		padding: 0px 20px;
	}
</style>
