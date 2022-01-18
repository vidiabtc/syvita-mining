<script>
	import {
		getStackingCycleStats,
		getBlockHeight,
		getUserId,
		getStackingReward
	} from '$lib/apiCalls.js';
	import { claimStackingReward } from '$lib/contractCalls.js';
	import { user, city, t } from '$lib/stores.js';
	import { getStxAddress } from '$lib/auth.js';

	export let userId;
	export let cycles;
  export let blockHeight;
</script>

<div class="claim-stacking-rewards">
	<h3>{$t.stack.claimStackingRewards}</h3>
	<p>
		{$t.stack.subHeading}
	</p>
</div>

<div class="table">
	<div>
		<div class="table-headers">
			<p>{$t.stack.cycle}</p>
			<p>{$t.stack[`${$city.coin}Stacked`]}</p>
			<p>{$t.stack.stxToClaim}</p>
			<p>{$t.stack[`${$city.coin}ToReturn`]}</p>
			<p>{$t.stack.claimRewards}</p>
		</div>
		{#each Object.keys(cycles).reverse() as cycle}
			{#if  cycle > Object.keys(cycles)[Object.keys(cycles).length - 1] - 5}
				{#await getStackingReward($city, userId, cycle) then reward}
					{#if reward.amountStacked > 0}
						<div class="table-data">
							<p>{$t.stack.cycle} {cycle}</p>
							<p>{reward.amountStacked.toLocaleString()}</p>
							<p>
								{Math.floor(
									((reward.amountStacked / cycles[cycle][$city.coin]) * cycles[cycle].stx)
										.toFixed(7)
										.slice(0, -1)
								)}
							</p>
							<p>{reward.toReturn.toLocaleString()}</p>
							<p>
								{#if blockHeight >= parseInt($city.activationBlock) +
                  (parseInt(cycle) + 1) * 2100}
									<button
										on:click={claimStackingReward(
											cycle,
											cycles[cycle],
											reward.amountStacked,
											reward.toReturn
										)}>{$t.stack.claimNow}</button
									>
								{:else}
									{$t.stack.claimAtBlock} #{parseInt($city.activationBlock) +
										(parseInt(cycle) + 1) * 2100}
								{/if}
							</p>
						</div>
					{/if}
				{/await}
			{/if}
		{/each}
	</div>
</div>

<style>
	.table {
		max-width: 1000px;
		min-width: 800px;
		margin: auto;
		border: solid 1px rgba(255, 255, 255, 0.2);
		border-radius: 10px;
	}

	.table div div:last-child {
		border-bottom: none;
	}

	.table-headers {
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}

	button {
		background-color: #384cff;
		min-width: 80px;
		height: 30px;
	}

	.table-headers p {
		border-right: 1px solid rgba(255, 255, 255, 0.2);
		height: 57px;
		width: 100%;
		display: flex;
		align-items: center;
		padding-left: 30px;
	}

	.table-headers p:last-child {
		border-right: none;
	}

	.table-data {
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		justify-content: center;
	}

	.table-data p {
		border-right: 1px solid rgba(255, 255, 255, 0.2);
		height: 57px;
		width: 100%;
		display: flex;
		align-items: center;
		padding-left: 30px;
		text-align: left;
	}

	.table-data p:last-child {
		border-right: none;
	}

	/* @media (max-width: 870px) {
		.table {
			display: none;
		}
	} */

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
