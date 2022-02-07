<script>
	import { getStackingCycleStats, getBlockHeight, getUserId } from '$lib/apiCalls';
	import { user, city, t } from '$lib/stores.js';
	import { getStxAddress } from '$lib/auth';

	$: stxAddress = getStxAddress($user);

	export let cycles;
	export let blockHeight;
</script>

<div class="stacking-wrapper">
	{#each Object.keys(cycles).reverse() as cycle}
		<div class="stacking-box">
			<div class="box-info-top">
				<div>
					<p>{cycle}</p>
					<p>{$t.stack.cycle}</p>
				</div>
				<div>
					<p>{cycles[cycle][$city.coin].toLocaleString()}</p>
					<p class="coin-stacked">{$t.stack[`${$city.coin}Stacked`]}</p>
				</div>
			</div>
			<div class="box-info-bottom">
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
		</div>
	{/each}
</div>

<style>
	.stacking-wrapper {
		max-width: 400px;
		min-width: 320px;
		padding-right: 10px;
		margin: auto;
		margin-top: 10px;
		font-size: 0.9rem;
		height: 492px;
		overflow: auto;
		overflow-x: hidden;
	}

	.stacking-box {
		height: 158px;
		margin-bottom: 30px;
		border: 1px solid blue;
		border-radius: 10px;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-around;
	}

	.coin-stacked {
		font-size: 1.2rem;
	}

	.stacking-box:last-child {
		margin-bottom: 0;
	}

	.box-info-top {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.box-info-top div {
		max-width: 200px;
		min-width: 100px;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: center;
		margin-left: -80px;
	}

	.box-info-bottom {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.box-info-bottom div {
		max-width: 200px;
		min-width: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
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
