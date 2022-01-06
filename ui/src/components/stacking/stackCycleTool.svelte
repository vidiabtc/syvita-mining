<script>
	import {
		getStackingCycleStats,
		getBlockHeight,
		getUserId,
		getStackingReward
	} from '$lib/apiCalls.js';
	import { claimStackingReward } from '$lib/contractCalls.js';
	import { user, city } from '$lib/stores.js';
	import { getStxAddress } from '$lib/auth.js';

	$: stxAddress = getStxAddress($user);
	$: userId = stxAddress ? getUserId($city, stxAddress) : null;
	// $: userId = 50;

	$: stackingCycleStats = getStackingCycleStats($city);
	$: blockHeight = getBlockHeight($city);

	// $: stackingReward = userId ? getStackingReward($city, userId, cycle) : null;
</script>

<div class="stack-cycle-tool">
	<div class="table-wrapper">
		<table>
			<tr>
				<th>Stacking Cycle</th>
				<th>{$city.coin.toUpperCase()} Stacked</th>
				<th>STX to claim</th>
				<th>{$city.coin.toUpperCase()} to Return</th>
				<th>Claim Rewards</th>
			</tr>
			{#await userId}
				<tr>
					<td />
					<td />
					<td />
					<td />
					<td />
				</tr>
			{:then userId}
				{#await stackingCycleStats}
					<h1>loading ...</h1>
				{:then cycles}
					{#each Object.keys(cycles).reverse() as cycle}
						{#if cycle <= Object.keys(cycles)[Object.keys(cycles).length - 1] && cycle > Object.keys(cycles)[Object.keys(cycles).length - 1] - 5}
							{#await getStackingReward($city, userId, cycle)}
								<tr>
									<td />
									<td />
									<td />
									<td />
								</tr>
							{:then reward}
								{#if reward.amountStacked > 0}
									<tr>
										<td>Cycle {cycle}</td>
										<td>{reward.amountStacked.toLocaleString()}</td>
										<td
											>{Math.floor(
												((reward.amountStacked / cycles[cycle][$city.coin]) * cycles[cycle].stx)
													.toFixed(7)
													.slice(0, -1)
											)}</td
										>
										<td>{reward.toReturn.toLocaleString()}</td>
										<td>
											{#if cycle < Object.keys(cycles)[Object.keys(cycles).length - 2]}
												<!-- content here -->
												<button
													on:click={claimStackingReward(
														cycle,
														cycles[cycle],
														reward.amountStacked,
														reward.toReturn
													)}>Claim Now</button
												>
											{:else}
												Claimable at block #{parseInt($city.activationBlock) +
													(parseInt(cycle) + 1) * 2100}
											{/if}
										</td>
									</tr>
								{/if}
							{/await}
						{/if}
					{/each}
				{/await}
			{/await}
		</table>
	</div>
</div>

<style>
	.stack-cycle-tool {
		margin-top: 20px;
	}

	.table-wrapper {
		margin-top: 100px;
		width: 1170px;
		height: 400px;
		margin: auto;
		overflow: hidden;
		margin-bottom: 30px;
	}
	table,
	th,
	td {
		border: 1px solid #444d66;
		border-collapse: collapse;
	}

	table {
		width: 1170px;
		height: 259px;
		margin: auto;
	}

	table tr {
		width: 302px;
		height: 58px;
		text-align: center;
	}

	table tr td {
		text-align: center;
		width: 302px;
	}
</style>
