<script>
	export let city;
	import { getPool, getContributionSum } from '$lib/apiCalls';
	import Contribute from '$components/pool/contribute.svelte';

	export let poolId;
	export let blockHeight;
	export let stxAddress;
</script>

<div>
	<div class="stats-wrapper">
		{#await poolId}
			<h1 />
		{:then poolId}
			{#await getPool(city, poolId)}
				<h1 />
			{:then pool}
				<div>
					<p>MIA Pool {poolId + parseInt(city.startingPoolId)}</p>
					<p>Current Pool</p>
				</div>
				<div>
					<p class="stx-logo">
						<img src="/icons/stx.svg" />{Math.floor(
							pool.stats.totalContributed / 1000000
						).toLocaleString()}
					</p>
					<p>Total Raised STX</p>
				</div>
				<div>
					{#await blockHeight}
						<p />
					{:then currentBlock}
						<p>{currentBlock}</p>
					{/await}
					<p>Current Block</p>
				</div>
				<div>
					{#await blockHeight}
						<p />
					{:then currentBlock}
						{#if currentBlock < pool.stats.contributionsStartBlock}
							<p>{pool.stats.contributionsStartBlock}</p>
							<p>Contributions Open At Block</p>
						{:else if currentBlock >= pool.stats.contributionsStartBlock && currentBlock < pool.stats.contributionsEndBlock}
							<p>{pool.stats.contributionsEndBlock}</p>
							<p>Contributions Open Until Block</p>
						{:else}
							<p>{pool.stats.contributionsEndBlock}</p>
							<p>Contributions Closed At Block</p>
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
					<p>Your contribution</p>
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
	.stats-wrapper {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 30px;
	}

	.stats-wrapper div {
		display: flex;
		flex-direction: column;
		width: 370px;
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
</style>
