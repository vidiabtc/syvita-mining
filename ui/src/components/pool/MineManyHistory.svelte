<script>
	export let city;
	export let poolId;
	export let mineManys;
	export let pool;
	import { t } from '$lib/stores.js';
	import { claimAllRewardsForPool } from '$lib/contractCalls.js';

	const canClaim = () => {
		let can = false;
		Object.keys(mineManys)
			.reverse()
			.map((id) => {
				console.log('MMM', mineManys[id]);
				if (mineManys[id].claimable) {
					can = true;
				}
			});
		return can;
	};
</script>

<div class="mine-many-history-wrapper">

	<table>
		<tr>
			<th>MineMany</th>
			<th>STX per block</th>
			<th>Start Block</th>
			<th>End Block</th>
			<th>STX Spent</th>
			<th>{city.coin.toUpperCase()} Won</th>
			<th>{city.coin.toUpperCase()} to Claim</th>
			{#if canClaim()}
				<th><button on:click={() => claimAllRewardsForPool(city, poolId)}>Claim All</button></th>
			{:else}
				<th>All Claimed</th>
			{/if}
		</tr>

		{#each Object.keys(mineManys).reverse() as id}
		<tr>
			<td>{id}</td>
			<td>{Math.round(pool.mineManys[id].ustxAmounts[0] / 1000000 * 100) / 100}</td>
			<td>{pool.mineManys[id].blockMiningStarted}</td>
			<td>{pool.mineManys[id].blockMiningStarted + pool.mineManys[id].ustxAmounts.length}</td>
			<td>{Math.floor(pool.mineManys[id].ustxAmounts[0] / 1000000 * pool.mineManys[id].ustxAmounts.length)}</td>
			<td>{pool.mineManys[id].coinsWon.toLocaleString()}</td>
			<td>{mineManys[id].claimAmount.toLocaleString()}</td>
			{#if mineManys[id].claimable}
				<td>Can Claim</td>
			{:else}
				<td>Claimed</td>
			{/if}
		</tr>
	{/each}
	</table>

	
</div>

<style>
	.mine-many-history-wrapper {
		font-size: 1.25rem;
		max-width: 1000px;
		border: solid 1px rgba(255, 255, 255, 0.2);

		border-radius: 10px;
	}

	.headers {
		display: flex;
		align-items: center;
	}

	.headers p {
		max-width: 250px;
		width: 100%;
		min-width: 100px;
		text-align: center;
		border-right: 1px solid rgba(255, 255, 255, 0.2);

		border-bottom: none;
		padding: 5px 0;
	}

	.headers p:last-child {
		border-right: none;
	}

	.data {
		display: flex;
	}

	.data p {
		max-width: 250px;
		width: 100%;
		min-width: 100px;
		padding: 5px 0;
		text-align: center;
		border-right: 1px solid rgba(255, 255, 255, 0.2);
		border-top: 1px solid rgba(255, 255, 255, 0.2);
	}

	.data p:last-child {
		border-right: none;
	}

	table {
		width: 1000px;
		text-align: center;
	}

	td {
		padding: 5px;
	
	}

	button {
		width: 90px;
		height: 25px;
		background: #384cff;
		border-radius: 4px;
		text-align: center;
		margin: auto;
	}

	@media (max-width: 400px) {
		.mine-many-history-wrapper {
			font-size: 0.9rem;
		}
	}
</style>
