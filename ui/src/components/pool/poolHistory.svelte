<script>
	export let poolId;
  	export let city;
	export let blockHeight;

	import { t } from '$lib/stores.js';
	import { getPool, getV2Pool } from '$lib/apiCalls';
	import { CITIES, STATS } from '$lib/constants';

	let isModalOpen = false;
	const toggleModal = () => {
		isModalOpen = !isModalOpen;
	};

	const poolIdList = [];

	for (let i = poolId; i > 0; i--) {
		poolIdList.push(i);
	}

	let v1PoolIdList = []

	for (let i = city.v1LatestPoolId; i > 0; i--) {
		v1PoolIdList.push(i);
	}

	console.log('v1 pool ids: ', v1PoolIdList)


</script>

<div class="pool-history-wrapper">
	<h3>{$t.pool.allPools}</h3>
	<div class="pools">
		{#each poolIdList as poolId}
			{#await getV2Pool(city, poolId)}
				<h1>loading...</h1>
			{:then pool}
				<div class="pool">
					<div class="pool-info">
						<p>{$t.pool.pool} {poolId + parseInt(city.startingPoolId)}</p>
						{#if pool.stats.contributionsEndBlock > blockHeight}
							<p class="current">Raising</p>
						<!-- {:else if poolId == poolIdList[1]}
							<p class="mining">Mining</p> -->
						{:else if (pool.stats.mineManyIds.length > 0) && (poolId == poolIdList[0] || poolId == poolIdList[1]) && (pool.mineManys[pool.stats.mineManyIds[pool.stats.mineManyIds.length - 1]].blockMiningStarted)  >= (blockHeight - 200)}
							<p class="mining">Mining</p>
						{:else}
							<p class="complete">Complete</p>
						{/if}		
					</div>
					<div class="block-dates">
						<div>
							<p>Raising Start</p>
							<p>{pool.stats.contributionsStartBlock}</p>
						</div>
						<div>
							<p>Raising End</p>
							<p>{pool.stats.contributionsEndBlock}</p>
						</div>
					</div>
		
					<div class="pool-contributions">
						<div>
							<p>{$t.pool.contributors}</p>
							<p>{Object.keys(pool.contributions).length}</p>
						</div>

					</div>
					<div class="pool-performance">
						<div>
							<p>{$t.pool.committedStx}</p>
							<p>{Math.floor(pool.stats.totalContributed / 1000000).toLocaleString()} STX</p>
						</div>
						<div>
							<p>{$t.pool[`${city.coin}Won`]}</p>
							<p>{pool.stats.totalCoinsWon.toLocaleString()}</p>
						</div>
					</div>

          <a href={`/pool/${city.coin}/${poolId + parseInt(city.startingPoolId)}`}>
            <div>
              <button>
                  {$t.pool.viewPoolDetails}
              </button>
            </div>
         </a>
				</div>
			{/await}
		{/each}
		{#each v1PoolIdList as poolId}
			{#await getPool(city, poolId)}
				<h1>loading...</h1>
			{:then pool}
				<div class="pool">
					<div class="pool-info">
						<p>{$t.pool.pool} {parseInt(poolId) + parseInt(city.v1StartingPoolId)}</p>
						{#if pool.stats.contributionsEndBlock > blockHeight}
							<p class="current">Raising</p>
						<!-- {:else if poolId == poolIdList[1]}
							<p class="mining">Mining</p> -->
						{:else if (pool.stats.mineManyIds.length > 0) && (poolId == poolIdList[0] || poolId == poolIdList[1]) && (pool.mineManys[pool.stats.mineManyIds[pool.stats.mineManyIds.length - 1]].blockMiningStarted)  >= (blockHeight - 200)}
							<p class="mining">Mining</p>
						{:else}
							<p class="complete">Complete</p>
						{/if}		
					</div>
					<div class="block-dates">
						<div>
							<p>Raising Start</p>
							<p>{pool.stats.contributionsStartBlock}</p>
						</div>
						<div>
							<p>Raising End</p>
							<p>{pool.stats.contributionsEndBlock}</p>
						</div>
					</div>
		
					<div class="pool-contributions">
						<div>
							<p>{$t.pool.contributors}</p>
							<p>{Object.keys(pool.contributions).length}</p>
						</div>

					</div>
					<div class="pool-performance">
						<div>
							<p>{$t.pool.committedStx}</p>
							<p>{Math.floor(pool.stats.totalContributed / 1000000).toLocaleString()} STX</p>
						</div>
						<div>
							<p>{$t.pool[`${city.coin}Won`]}</p>
							<p>{pool.stats.totalCoinsWon.toLocaleString()}</p>
						</div>
					</div>

          <a href={`/pool/v1/${city.coin}/${parseInt(poolId) + parseInt(city.v1StartingPoolId)}`}>
            <div>
              <button>
                  {$t.pool.viewPoolDetails}
              </button>
            </div>
         </a>
				</div>
			{/await}
		{/each}
	</div>
</div>

<style>
	.pool-history-wrapper {
		max-width: 1170px;
		min-width: 345px;
		width: 100%;
		margin: auto;
		font-size: 1rem;
		margin-bottom: 50px;
		padding-right: 20px;
		padding-left: 20px;
		padding-top: 50px;
	}

	h3 {
		font-size: 2rem;
		padding-bottom: 20px;
	}

	.pools {
		display: flex;
		gap: 30px;
		font-size: 1rem;
		flex-wrap: wrap;
	}

	.pool {
		height: 345px;
		max-width: 320px;
		border: 1px solid #273296;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 0 20px;
	}

	.pool div {
		display: flex;
		justify-content: space-between;
	}

	.pool-info {
		padding-top: 20px;
		align-items: center;
	}

	.pool-info p:first-child {
		font-size: 1.5rem;
	}

	.blocks-mined button{
		height: 45px;
		width: 130px;
		margin-left: 35px;
	}

	.current {
		font-size: 0.75rem;
		width: 64px;
		height: 24px;
		background: #2fb002;
		border-radius: 5px;
		text-align: center;
		line-height: 2;
	}
	
	.mining {
		font-size: 0.75rem;
		width: 64px;
		height: 24px;
		background: darkorange;
		border-radius: 5px;
		text-align: center;
		line-height: 2;
	}

	.complete {
		font-size: 0.75rem;
		width: 64px;
		height: 24px;
		background: blue;
		border-radius: 5px;
		text-align: center;
		line-height: 2;
	}
	

	.block-dates {
		justify-content: space-between;
	}

	.block-dates div {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.block-dates div:nth-child(2) p:first-child {
		text-align: right;
	}

	.pool-contributions div {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.pool-contributions div:nth-child(2) p:nth-child(2) {
		text-align: right;
	}

	.pool-performance div {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.pool-performance div:nth-child(2) p:nth-child(2) {
		text-align: right;
	}

	button {
		width: 330px;
		height: 50px;
		background: #384cff;
		border-radius: 4px;
	}
</style>
