<script>
	import { CITIES } from '$lib/constants.js';
	import { city as cityStore } from '$lib/stores.js';

  export let selectedCity;

	let toggle = false;
</script>

<div class="selector-wrapper" on:click={() => (toggle = !toggle)}>
	<div class="city-selector">
    <p>
			<img class="coin" src={`/citycoins/${selectedCity.toUpperCase()}.svg`} alt={`${selectedCity.toUpperCase()}`} />
			{CITIES[selectedCity].name}
		</p>
    <img class={toggle ? 'chevron' : 'chevron-up'} src="/icons/arrow-down.svg" alt="arrow down" />
	</div>
	{#if toggle}
		<div class="dropdown">
			{#each Object.keys(CITIES) as city}
				{#if city != selectedCity}
					<div>
            <a href={`/pool/${city}`}>
              <p on:click={() => {
					cityStore.set(CITIES[city]);
					console.log('city set to ', CITIES[selectedCity]);
				}}>
                <img class="coin" src={`/citycoins/${CITIES[city].coin.toUpperCase()}.svg`} alt={`${city}`} />
                {CITIES[city].name}
              </p>
            </a>
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</div>

<style>
	.selector-wrapper {
		position: relative;
		font-size: 1.5rem;
		z-index: 1;
	}
	.city-selector {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 10px;
		width: 212px;
		cursor: pointer;

		height: 50px;
		border-radius: 4px;
		border: 1px solid #444d66;
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
		padding-top: 10px;
		background-color: #050810;
	}

	.dropdown div:hover {
		cursor: pointer;
	}

	.dropdown p {
		width: 212px;

		height: 50px;
		border-radius: 4px;
		border: 1px solid #444d66;
		align-items: center;
		padding-left: 10px;
		display: flex;
	}

	@media (max-width: 400px) {
		.selector-wrapper {
			font-size: 1rem;
		}

		.city-selector {
			width: 150px;
		}

		.dropdown p {
			width: 150px;
		}
	}
</style>
