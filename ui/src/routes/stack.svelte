<script>
	import StackingCycles from '$components/stackingCycles.svelte';
	import SelectCity from '$components/selectCity.svelte';
  import Stack from '$components/stack.svelte';
  import StackCycleTool from '$components/stacking/stackCycleTool.svelte'
</script>

<div>
  <SelectCity />
  <StackCycleTool/>
	<StackingCycles />
  <Stack />
</div>

