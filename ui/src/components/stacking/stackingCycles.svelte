<script>
	import { getStackingCycleStats, getBlockHeight, getUserId } from '$lib/apiCalls';
	import { user, city, t } from '$lib/stores.js';
	import { getStxAddress } from '$lib/auth';

	$: stxAddress = getStxAddress($user);

	export let cycles;
	export let blockHeight;
</script>

<!-- <button on:click={getStackingCycleStats($city)}>EE</button> -->
<div class="stacking-blocks-wrapper">
	<!-- promise was fulfilled -->
	{#each Object.keys(cycles).reverse() as cycle}
		<!-- content here -->
		<div class="stacking-block-winner">
			<div>
				<p>{cycle}</p>
				<p>{$t.stack.cycle}</p>
			</div>
			<div>
				<p>{Math.floor(cycles[cycle][$city.coin]).toLocaleString()}</p>
				<p>{$t.stack[`${$city.coin}Stacked`]}</p>
			</div>
			<div>
				<p>{parseInt($city.activationBlock) + 2100 * parseInt(cycle)}</p>
				<p>{$t.pool.startBlock}</p>
			</div>
			<div>
				<p>{Math.floor(cycles[cycle].stx).toLocaleString()}</p>
				<p>{$t.stack.stxToStackers}</p>
			</div>
			<div>
				{#if cycle == Object.keys(cycles)[Object.keys(cycles).length - 1]}
					<p>0.00%</p>
				{:else if cycle == Object.keys(cycles)[Object.keys(cycles).length - 2]}
					<p>
						{Math.round(
							((2100 -
								(parseInt($city.activationBlock) + 2100 * (parseInt(cycle) + 1) - blockHeight)) /
								21) *
								100
						) / 100}%
					</p>
				{:else}
					<p>100.00%</p>
				{/if}
				<p>{$t.stack.percentComplete}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.stacking-blocks-wrapper {
		max-width: 1000px;
		min-width: 800px;
		height: 492px;
		margin: auto;
		overflow: auto;
		overflow-x: hidden;
		padding-right: 10px;
	}

	.stacking-blocks-wrapper div:first-of-type {
		margin-top: 0px;
	}

	.stacking-block-winner {
		border: 2px solid lightgray;
		background: linear-gradient(180deg, rgba(77, 186, 95, 0.1) 0%, rgba(77, 186, 95, 0) 104.88%);
		max-width: 1180px;
		height: 82.3px;
		border-radius: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 43px;
		padding-right: 27px;
		margin-top: 20px;
	}

	.stacking-block-winner:nth-of-type(2) {
		border: 2px solid #4dba5f;
	}

	.stacking-block-winner:first-child {
		border: 2px solid #ff0000;
	}

	.stacking-block-winner div {
		text-align: center;
	}

	.stacking-block div {
		text-align: center;
	}

	.stacking-block div p:first-child {
		padding-bottom: 10px;
	}

	::-webkit-scrollbar {
		border: 1px solid #444d66;
		border-radius: 10px;
		width: 10px;
	}

	::-webkit-scrollbar-thumb {
		width: 8px;
		height: 62px;
		background: #ffffff;
		border-radius: 10px;
	}
</style>
