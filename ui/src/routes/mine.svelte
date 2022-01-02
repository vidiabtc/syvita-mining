<script>
  import { cities } from '$lib/constants.js'
  import MineMany from '$components/mineMany.svelte'
  let toggle = false;
  let city = 'mia';
</script>

<div class="selector-wrapper" on:click={() => toggle = !toggle} >
  <div class="city-selector">
    <p>
      <img class='coin' src={`citycoins/${city}.svg`} alt={`${city}`}>
      {cities[city].city_name}
      
    </p>
    <img class={toggle ? "chevron" : "chevron-up"} src="/icons/arrow-down.svg" alt="arrow down">
  </div>
   {#if toggle}
      {#each Object.keys(cities) as selectedCity}
        {#if selectedCity != city}
          <div class="dropdown">
            <p on:click={() => city = selectedCity}>
              <img class='coin' src={`citycoins/${selectedCity}.svg`} alt={`${selectedCity}`}>
              {cities[selectedCity].city_name}
            </p>
          </div>
        {/if}
      {/each}
    {/if}




</div>

<!-- <MineMany /> -->

<style>

  .selector-wrapper {
    font-size: 1.5rem;
  }
  .city-selector {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    width: 212px;
    height: 50px;
    border-radius: 4px;
    border: 1px solid #444D66;
    margin-left: 50px;

  }

  .city-selector p {
    display: flex;
    align-items: center;

  }

  .chevron {
    width: 15px;
    height: 15px;
    transform: rotate(180deg);
  }

  .chevron-up {
    width: 15px;
    height: 15px;
  }

  .coin {
    width: 31px;
    height: 31px;
    margin-right: 8px;
  }

  .dropdown {
    position: absolute;
    display: flex;
    flex-direction: column;
   left: 50px;
  }

  .dropdown p {
    width: 212px;
    height: 50px;
    border-radius: 4px;
    border: 1px solid #444D66;
    align-items: center;
   padding-left: 10px;
    display: flex;

  }

</style>

