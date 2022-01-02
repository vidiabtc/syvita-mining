<script>
  import { cities } from '$lib/constants.js'
  import MineMany from '$components/mineMany.svelte'

  let city;
</script>

<h1>
  Mine {city}
</h1>

<div >
  <select class="city-selector" bind:value={city} name="selectCity">
    {#each cities as city}
      <option value={city}>
        {city.toUpperCase()}
      </option>
    {/each}
  </select>
</div>

<MineMany />

<style>
  .city-selector {
    position: relative;
    appearance: none;
    outline: none;
    width: 212px;
    height: 50px;
    border-radius: 4px;
    border: 1px solid #444D66;
    background: transparent;
    background-image: url('icons/arrow-down.svg');
    background-repeat: no-repeat;
    background-position: calc(100% - 20px) center;
  }

</style>

