<script>
	export let city;
	import { getPool, getContributionSum } from '$lib/apiCalls';
	import Contribute from '$components/pool/contribute.svelte';
	import { t } from '$lib/stores.js';
	import SelectCity from '$components/selectCity.svelte';

	export let poolId;
	export let blockHeight;
	export let stxAddress;
</script>

<div class="pool-stats-wrapper">
	<div class="select-city">
		<SelectCity />
	</div>
	<div class="stats-wrapper">
		{#await poolId}
			<h1 />
		{:then poolId}
			{#await getPool(city, poolId)}
				<h1 />
			{:then pool}
				<div>
					<p>{$t.pool.pool} {poolId + parseInt(city.startingPoolId)}</p>
				</div>
				<div>
					<p class="stx-logo">
						<img src="/icons/stx.svg" />{Math.floor(
							pool.stats.totalContributed / 1000000
						).toLocaleString()}
					</p>
					<p>{$t.pool.totalRaiseStx}</p>
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
						<img src={`/citycoins/${city.coin.toUpperCase()}.svg`} />{city.coin.toUpperCase()} Won
					</p>
				</div>

				{#await blockHeight}
					<p />
				{:then currentBlock}
					{#if currentBlock >= pool.stats.contributionsStartBlock && currentBlock < pool.stats.contributionsEndBlock}
						<Contribute {city} {poolId} />
					{:else}
						<p />
					{/if}
				{/await}
			{/await}
		{/await}
	</div>
</div>

<style>
	.pool-stats-wrapper {
		max-width: 1170px;
		margin: auto;
		padding: 0 20px;
	}

	.select-city {
		width: fit-content;
		margin-left: auto;

		padding-bottom: 35px;
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
