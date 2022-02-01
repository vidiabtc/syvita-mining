<script>
	import Info from '$components/info.svelte';
	import PoolModal from './poolModal.svelte';
	import { t } from '$lib/stores.js';
	export let city;
	let isModalOpen = false;
// import SelectCity from '$components/selectCity.svelte';
	export let poolId;
	const toggleModal = () => {
    isModalOpen = !isModalOpen
  }
	let amount = 0;
</script>

<div class="contribute-wrapper">
	<div class="title">
		<h3>{$t.pool.contribute}</h3>
		<!-- <SelectCity/> -->
	</div>
	<div class="contributions">
		<div class="add-contributions">
			<div class="input-field">
				<input bind:value={amount} placeholder="40 STX Minimum" type="number" />
			</div>
			<button on:click={toggleModal}>{$t.pool.contribute}</button>
		</div>
	</div>
	{#if isModalOpen}
  <PoolModal on:close={toggleModal} {city} {poolId} {amount}/>
  {/if}
</div>

<style>
	.contribute-wrapper {
		max-width: 770px;
		min-width: 300px;
		margin: auto;
    margin-top: 50px;
		padding: 0 20px;
	}
	.title {
		font-size: 1.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	
		padding-bottom: 15px;
	}
	.contributions {
		max-width: 770px;
		height: 110px;
		border: 2px solid transparent;
		border-radius: 10px;
		border: 1px solid blue;
		padding: 10px;
	}
	.add-contributions {
		padding: 20px;
		position: relative;
		display: flex;
		justify-content: space-between;
		gap: 30px;
	}
	.input-field {
		max-width: 500px;
		min-width: 45px;
		width: 100%;
	}
	input {
		color: white;
		width: 100%;
		height: 50px;
		padding-left: 10px;
	}
	::placeholder {
		color: white;
		font-size: 1rem;
	}
	button {
		width: 180px;
		height: 50px;
		background: #384cff;
		border-radius: 4px;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
	@media(max-width: 400px) {
	.add-contributions {	gap: 10px; }
	.title {
		font-size: 1.25rem;
	}
	}
</style>