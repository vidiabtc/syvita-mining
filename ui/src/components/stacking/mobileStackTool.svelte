
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

<div class="stack-history-wrapper">
	{#each Object.keys(cycles).reverse() as cycle}
			{#if cycle > Object.keys(cycles)[Object.keys(cycles).length - 1] - 5}
				{#await getStackingReward($city, userId, cycle) then reward}
					{#if reward.amountStacked > 0}
					<div class="cycle">
						<div><p class="title">{$t.stack.cycle} {cycle}</p></div>
						<div>
							<p>{$t.stack[`${$city.coin}Stacked`]}</p>
							<p>{reward.amountStacked.toLocaleString()}</p>
						</div>
						<div>
							<p>{$t.stack.stxToClaim}</p>
							<p>	{Math.floor(
								((reward.amountStacked / cycles[cycle][$city.coin]) * cycles[cycle].stx)
									.toFixed(7)
									.slice(0, -1)
							)}</p>
						</div>
						<div>
							<p>{$t.stack[`${$city.coin}ToReturn`]}</p>
							<p>{reward.toReturn.toLocaleString()}</p>
						</div>
						<div>
							<p>{$t.stack.claimRewards}</p>
							<p class="claim">{#if blockHeight >= parseInt($city.activationBlock) +
                (parseInt(cycle) + 1) * 2100}
								<!-- content here -->
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
							{/if}</p>
						</div>
					</div>
			
					{/if}
				{/await}
			{/if}
		{/each}
</div>

<style>
	.stack-history-wrapper {
		max-width: 870px;
		margin: auto;
		display: flex;
		flex-wrap: wrap;
		gap: 15px;
	}

	.cycle {
		max-width: 354px;
		min-width: 320px;
		border: 1px solid blue;
		border-radius: 10px;
		margin-right: auto;
		margin-left: auto;
		margin-top: 50px;
		margin-bottom: 50px;
		font-size: 1.25rem;
		padding: 20px 30px;
	}

	.cycle div {
		display: flex;
		justify-content: space-between;
		padding-bottom: 15px;
	}

	.cycle:last-child {
		padding-bottom: 0;
	}

	.title {
		font-size: 2rem;
		padding-bottom: 20px;
	}

	.claim {
		color: #384cff;
	}

	@media (min-width: 870px) {
		.stack-history-wrapper {
			display: none;
		}
	}
</style>
