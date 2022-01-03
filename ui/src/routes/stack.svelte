<script>
	import StackingCycles from '$components/stackingCycles.svelte';
	import SelectCity from '$components/selectCity.svelte';
	import { getCurrentCycle } from '$lib/apiCalls.js';
	import { user, city } from '$lib/stores.js';

	$: currentCycle = getCurrentCycle($city);
</script>

<div>
	{#await currentCycle}
		<h1>Current Cycle: 0</h1>
	{:then currentCycle}
		<h1>Current Cycle: {currentCycle}</h1>
		<StackingCycles {currentCycle} />
	{/await}
</div>

<SelectCity />
