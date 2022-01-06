<script>
	import StackingCycles from '$components/stacking/stackingCycles.svelte';
	import Stack from '$components/stack.svelte';
	import StackCycleTool from '$components/stacking/stackCycleTool.svelte';
	import StackToolTest from '$components/stacking/stackToolTest.svelte';
	import MobileStackToolTest from '$components/stacking/mobileStackToolTest.svelte';
</script>

<div>
	<StackCycleTool />
	<StackingCycles />
	<Stack />
	<div class="claim-stacking-rewards">
		<h3>Claim Stacking Rewards</h3>
		<p>
			When a reward cycle is complete, Stackers can claim their portion of the STX committed by
			miners.
		</p>
		<p>
			When the last selected cycle is complete, Stackers can claim their MIA back in the same
			transaction.
		</p>
	</div>
	<StackToolTest />
	<MobileStackToolTest />
</div>

<style>
	.claim-stacking-rewards {
		max-width: 1000px;
		min-width: 350px;
		margin: auto;
		padding-top: 50px;
		padding-bottom: 50px;
		text-align: left;
	}
	.claim-stacking-rewards h3 {
		font-size: 2.75rem;
		padding-bottom: 30px;
	}

	.claim-stacking-rewards p {
		padding-bottom: 15px;
	}
</style>
