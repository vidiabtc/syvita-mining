<script>
	import StackingCycles from '$components/stacking/stackingCycles.svelte';
	import Stack from '$components/stacking/stack.svelte';
	import StackingCycleTool from '$components/stacking/stackingCycleTool.svelte';
	import MobileStackTool from '$components/stacking/mobileStackTool.svelte';
	import MobileStackingCycles from '$components/stacking/mobileStackingCycles.svelte';

	import {
		getStackingCycleStats,
		getBlockHeight,
		getUserId,
		getStackingReward
	} from '$lib/apiCalls.js';
	import { claimStackingReward } from '$lib/contractCalls.js';
	import { user, city, t } from '$lib/stores.js';
	import { getStxAddress } from '$lib/auth.js';

	$: stxAddress = 'SPBA7BPCQTPVJATE06PPRJZ5ND1QK5V6ZAAQN9B7';
	$: userId = stxAddress ? getUserId($city, stxAddress) : null;
	// $: userId = 10;

	$: innerWidth = 0;
	$: stackingCycleStats = getStackingCycleStats($city);
	$: blockHeight = getBlockHeight($city);
</script>


<svelte:head>
	<title>Stack CityCoins | Syvita Mining</title>
	<meta
		name="description"
		content="Stack your CityCoins to receive STX"
	/>
</svelte:head>

<svelte:window bind:innerWidth />

<div class="stacking-wrapper">
	<Stack />
	{#await stackingCycleStats then cycles}
		{#await blockHeight}
		{:then blockHeight}
		{#if innerWidth > 800}
			<StackingCycles {cycles} {blockHeight}/>
		{:else}
			<MobileStackingCycles {cycles} {blockHeight}/>
		{/if}
		{/await}
		{#if stxAddress}
      {#await blockHeight}
      {:then blockHeight}
			{#await userId then userId}
			{#if innerWidth > 800}
				<StackingCycleTool {blockHeight} {userId} {cycles} />
			{:else}
				<MobileStackTool {blockHeight} {userId} {cycles}/>
			{/if}
			{/await}
      {/await}
		{/if}
	{/await}





	<!-- <MobileStackToolTest /> -->
</div>


<style>

.stacking-wrapper {
	padding: 0 20px; 

}

	</style>