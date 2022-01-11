<script>
  export let poolId;
  export let mineManys;
	import { t, city } from '$lib/stores.js';
	import { claimAllRewardsForPool } from '$lib/contractCalls.js'

  const canClaim = () => {
    for (let id in Object.keys(mineManys).reverse()) {
      if (mineManys[id].claimable) {
        return true
      }
    }
    return false
  }
</script>

<div class="mine-many-history-wrapper">
  <div class="headers">
    <p>MineMany Id</p>
    <p>MIA to Claim</p>
    {#if canClaim()}
      <p><button on:click={() => claimAllRewardsForPool($city, poolId)}>Claim All</button></p>
    {:else}
      <p>All Claimed</p>
    {/if}
  </div>

  {#each Object.keys(mineManys).reverse() as id}
    <div class="data">
      <p>{id}</p>
      <p>{mineManys[id].claimAmount}</p>
      {#if mineManys[id].claimable}
        <p>Can Claim</p>
        {:else}
        <p>Claimed</p>
      {/if}
    </div>
	{/each}
</div>

<style>
  .mine-many-history-wrapper {
    font-size: 1.25rem;
    max-width: 750px;
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



  button {
		width: 90px;
		height: 25px;
		background: #384cff;
		border-radius: 4px;
    text-align: center;
    margin: auto;
	}

  @media(max-width: 400px) {
    .mine-many-history-wrapper {
      font-size: .9rem;
    }
  }
</style>