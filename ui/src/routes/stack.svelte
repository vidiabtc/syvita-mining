<script>
	import StackingCycles from '$components/stacking/stackingCycles.svelte';
	import Stack from '$components/stacking/stack.svelte';
	import StackingCycleTool from '$components/stacking/stackingCycleTool.svelte';
	import MobileStackToolTest from '$components/stacking/mobileStackToolTest.svelte';

	import {
		getStackingCycleStats,
		getBlockHeight,
		getUserId,
		getStackingReward
	} from '$lib/apiCalls.js';
	import { claimStackingReward } from '$lib/contractCalls.js';
	import { user, city, t } from '$lib/stores.js';
	import { getStxAddress } from '$lib/auth.js';

	$: stxAddress = getStxAddress($user);
	$: userId = stxAddress ? getUserId($city, stxAddress) : null;
	// $: userId = 50;

	$: stackingCycleStats = getStackingCycleStats($city);
	$: blockHeight = getBlockHeight($city);
</script>

<div>
	{#if stxAddress}
		{#await userId then userId}
			{#await stackingCycleStats then cycles}
				<StackingCycleTool {userId} {cycles} />
			{/await}
		{/await}
	{/if}

	<StackingCycles />
	<Stack />
	<!-- <MobileStackToolTest /> -->
</div>
