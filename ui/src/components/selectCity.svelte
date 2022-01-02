<script>
	import { cities } from '$lib/constants.js';
	import { city } from '$lib/stores.js';

	let toggle = false;
</script>

<div class="selector-wrapper" on:click={() => (toggle = !toggle)}>
	<div class="city-selector">
		<p>
			<img class="coin" src={$city.img} alt={`${$city}`} />
			{$city.name}
		</p>
		<img class={toggle ? 'chevron' : 'chevron-up'} src="/icons/arrow-down.svg" alt="arrow down" />
	</div>
	{#if toggle}
		{#each Object.keys(cities) as selectedCity}
			{#if selectedCity != $city.coin}
				<div class="dropdown">
					<p
						on:click={() => {
							city.set(cities[selectedCity]);
							console.log('city set to ', cities[selectedCity]);
						}}
					>
						<img class="coin" src={cities[selectedCity].img} alt={`${selectedCity}`} />
						{cities[selectedCity].name}
					</p>
				</div>
			{/if}
		{/each}
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
</style>
