<script>
	import { getStackingCycleStats, getBlockHeight } from '$lib/apiCalls';
	import { city } from '$lib/stores.js';

  $: stackingCycleStats = getStackingCycleStats($city);
  $: blockHeight = getBlockHeight($city);


</script>

<!-- <button on:click={getStackingCycleStats($city)}>EE</button> -->
<div class="stacking-blocks-wrapper">
      {#await stackingCycleStats}
        <h1>loading ...</h1>
      {:then cycles}
        <!-- promise was fulfilled -->
        {#each Object.keys(cycles).reverse() as cycle}
           <!-- content here -->
           <div class="stacking-block-winner">
            <div>
              <p>{cycle}</p>
              <p>Cycle</p>
            </div>
            <div>
              <p>{cycles[cycle][$city.coin].toLocaleString()}</p>
              <p>{$city.coin} Stacked</p>
            </div>
            <div>
              <p>5</p>
              <p>STX/MIA</p>
            </div>
            <div>
              <p>{parseInt($city.activationBlock) + (2100 * parseInt(cycle))}</p>
              <p>Start Block</p>
            </div>
            <div>
              <p>{cycles[cycle].stx.toLocaleString()}</p>
              <p>STX to Stackers</p>
            </div>
            <div>
              {#if cycle == Object.keys(cycles)[Object.keys(cycles).length - 1]}
                 <p>0.00%</p>
              {:else if cycle == Object.keys(cycles)[Object.keys(cycles).length - 2]}
                {#await blockHeight}
                  <p>loading...</p>>
                {:then currentBlock}
                  <p>{Math.round((2100 - ((parseInt($city.activationBlock) + (2100 * (parseInt(cycle) + 1))) - currentBlock)) / 21 * 100) / 100}%</p>
                {/await}
              {:else}
                 <p>100.00%</p>
              {/if}
              <p>Percent Complete</p>
            </div>
          </div>
    
        {/each}
      {/await}
			
</div>

<style>
	.stacking-blocks-wrapper {
		width: 1200px;
		height: 492px;
		margin: auto;
		overflow: auto;
		overflow-x: hidden;
	}

	.stacking-blocks-wrapper div:first-of-type {
		margin-top: 0px;
	}

	.stacking-block {
		width: 1180px;
		height: 82.3px;
		border: 1px solid rgba(255, 255, 255, 0.5);
		border-radius: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 103px;
		padding-right: 27px;
		margin-top: 20px;
	}

	.stacking-block-winner {
    border: 2px solid #4dba5f;
		background: linear-gradient(180deg, rgba(77, 186, 95, 0.1) 0%, rgba(77, 186, 95, 0) 104.88%);
		width: 1180px;
		height: 82.3px;
		border-radius: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 103px;
		padding-right: 27px;
		margin-top: 20px;
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
