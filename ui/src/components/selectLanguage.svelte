<script>
	import { LANGUAGES } from '$lib/constants.js';
	import { t } from '$lib/stores.js';

	let toggle = false;
</script>

<div class="selector-wrapper" on:click={() => (toggle = !toggle)}>
	<div class="city-selector">
		<p>
			{$t.img}
			{$t.name}
		</p>
		<img class={toggle ? 'chevron' : 'chevron-up'} src="/icons/arrow-down.svg" alt="arrow down" />
	</div>
	{#if toggle}
		<div class="dropdown">
			{#each Object.keys(LANGUAGES) as selectedLanguage}
				{#if selectedLanguage != $t.name}
					<div>
						<p
							on:click={() => {
								t.set(LANGUAGES[selectedLanguage]);
								console.log('city set to ', LANGUAGES[selectedLanguage]);
							}}
						>
							{LANGUAGES[selectedLanguage].img}
							{LANGUAGES[selectedLanguage].name}
						</p>
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

	.language {
		width: 31px;
		height: 31px;
		margin-right: 8px;
	}

	.dropdown {
		display: flex;
		position: absolute;
		display: flex;
		flex-direction: column;

		left: 50px;
		padding-top: 10px;
		background-color: #050810;
	}

	.dropdown div {
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
</style>
