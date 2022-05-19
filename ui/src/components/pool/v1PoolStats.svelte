<script>
	import {
		getPool,
		getContributionSum,
		getUserContributions,
		getMineManyClaimsV1
	} from '$lib/apiCalls';
	import Contribute from '$components/pool/contribute.svelte';
	import { t } from '$lib/stores.js';

	import { claimAllRewardsForPool } from '$lib/contractCalls.js';
	import V1MineManyHistory from './v1MineManyHistory.svelte';

	export let poolId;
	export let blockHeight;
	export let stxAddress;
	export let city;
</script>

{#await getPool(city, poolId) then pool}
	<div class="pool-stats-wrapper">
		<div class="stats-wrapper">
			<div>
				<p>{$t.pool.pool} {poolId + parseInt(city.v1StartingPoolId)}</p>
			</div>
			<div>
				<p class="stx-logo">
					<img src="/icons/stx.svg" />{Math.floor(
						pool.stats.totalContributed / 1000000
					).toLocaleString()}
				</p>
				<p>{$t.pool.totalRaisedStx}</p>
			</div>
			<div>
				{#await blockHeight}
					<p />
				{:then currentBlock}
					<p>{currentBlock}</p>
				{/await}
				<p>{$t.pool.currentBlock}</p>
			</div>
			<div>
				{#await blockHeight}
					<p />
				{:then currentBlock}
					{#if currentBlock < pool.stats.contributionsStartBlock}
						<p>{pool.stats.contributionsStartBlock}</p>
						<p>{$t.pool.contributionsOpen}</p>
					{:else if currentBlock >= pool.stats.contributionsStartBlock && currentBlock < pool.stats.contributionsEndBlock}
						<p>{pool.stats.contributionsEndBlock}</p>
						<p>{$t.pool.contributionsUntil}</p>
					{:else}
						<p>{pool.stats.contributionsEndBlock}</p>
						<p>{$t.pool.contributionsClosed}</p>
					{/if}
				{/await}
			</div>
			<div>
				{#if pool.contributions[stxAddress]}
					<p>
						{Math.floor(getContributionSum(pool.contributions[stxAddress])).toLocaleString()} STX
					</p>
				{:else}
					<p>0 STX</p>
				{/if}
				<p>{$t.pool.yourContribution}</p>
			</div>
			<div>
				<p>{pool.stats.totalCoinsWon.toLocaleString()}</p>
				<p class="coin-logo">
					<img src={`/citycoins/${city.coin.toUpperCase()}.svg`} />{$t.pool[`${city.coin}Won`]}
				</p>
			</div>
		</div>

		<div class="contribute">
			{#await blockHeight then currentBlock}
				{#if currentBlock >= pool.stats.contributionsStartBlock && currentBlock < pool.stats.contributionsEndBlock}
					<Contribute {city} {poolId} {pool} />
				{/if}
			{/await}
		</div>

		<div class="contribution-activity">
			{#if getUserContributions(stxAddress, pool).length > 0}
				<h3>{$t.pool.activity}</h3>
				<div class="individual-contributions">
					{#each getUserContributions(stxAddress, pool) as contribution}
						<div>
							<p>{contribution.amount.toLocaleString()} STX</p>
							<a
								class="contributeLink"
								href={`https://explorer.syvita.org/txid/${contribution.txId}?chain=mainnet`}
								target="_blank"
								rel="noopener noreferrer"
							>
								View in Explorer
							</a>
						</div>
					{/each}
				</div>
			{/if}
		</div>

		{#if stxAddress}
			<div class="mine-many-history">
				<h3>{$t.stack.claimRewards}</h3>
				{#await getMineManyClaimsV1(city, poolId, stxAddress, pool)}
					<!-- promise is pending -->
					<p>Checking for claimable MineManys...</p>
				{:then mineManys}
					<V1MineManyHistory {city} {poolId} {mineManys} {pool} />
				{/await}
			</div>
		{/if}
		
		
	</div>
{/await}

<style>
	.contributions {
		margin: auto;
		max-width: 700px;
		max-height: 150px;
		background-color: white;
		border-radius: 10px;
		overflow-x: hidden;
		overflow-y: auto;
	}

	.contribution-activity {
		padding: 80px 0;
	}

	.contribution-activity h3 {
		font-size: 2rem;
	}

	.individual-contributions {
		display: flex;
		gap: 30px;
		flex-wrap: wrap;
		padding-top: 20px;
	}

	.mine-many-history h3 {
		padding-bottom: 20px;
		font-size: 2rem;
	}

	.individual-contributions div {
		height: 141px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
		color: white;
		font-size: 1.5rem;
		max-width: 370px;
		width: 100%;
		min-width: 310px;
		border-radius: 10px;
		border: solid 1px blue;
	}

	.individual-contributions div a {
		color: blue;
		text-decoration: underline;
	}

	.individual-contributions div a:hover {
		color: white;
		text-decoration: underline;
	}

	.pool-stats-wrapper {
		max-width: 1170px;
		margin: auto;
		padding-right: 20px;
		padding-left: 20px;
		padding-bottom: 160px;
	}

	.stats-wrapper {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 30px;
	}

	.stats-wrapper div {
		display: flex;
		flex-direction: column;
		max-width: 370px;

		width: 100%;
		min-width: 310px;
		height: 141px;
		justify-content: center;
		align-items: center;
		border: 1px solid blue;
		border-radius: 10px;
		margin: auto;
	}

	.stats-wrapper div:first-child {
		background: linear-gradient(149.52deg, #384cff 8.64%, #ff38d3 86.61%);
		background-blend-mode: lighten;
		border-radius: 10px;
	}

	.stats-wrapper div p:first-child {
		padding-bottom: 15px;
		font-size: 2.5rem;
	}

	.stats-wrapper div p:nth-child(2) {
		font-size: 1.25rem;
	}

	.stx-logo {
		display: flex;
		gap: 4px;
	}

	.stx-logo img {
		width: 25px;
	}

	.coin-logo {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.coin-logo img {
		width: 30px;
	}

	table {
        text-align: center;
    }

	@media (max-width: 1220px) {
		.pool-stats-wrapper {
			max-width: 750px;
		}
		.stats-wrapper {
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		@media (max-width: 800px) {
			.pool-stats-wrapper {
				max-width: 370px;
			}
			.stats-wrapper {
				display: grid;
				grid-template-columns: repeat(1, minmax(0, 1fr));
			}
		}
	}
</style>
