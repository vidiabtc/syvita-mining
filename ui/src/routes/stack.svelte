<script>
	import StackingCycles from '$components/stackingCycles.svelte';
	import SelectCity from '$components/selectCity.svelte';
  import Stack from '$components/stack.svelte';
  import { getUserId } from '$lib/apiCalls';
  import { getStxAddress } from '$lib/auth';

	import { user, city } from '$lib/stores.js';

  $: stxAddress = getStxAddress($user);

</script>

<button on:click={getUserId($city, stxAddress)}>
  Get user id
</button>

<div>
  <SelectCity />
	<StackingCycles />
  <Stack />
</div>

