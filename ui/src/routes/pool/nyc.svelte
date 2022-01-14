   
<script>
	// import { t } from '$lib/stores.js';
	import { onMount } from 'svelte';
	import Modal from '$components/nycModal.svelte';
	let poolAddress = 'SP78Q12M26WVN1V9DPQ29HVDTWPKQH6KVR1X0VEW';
	let isModalOpen = false;
	let contributeAmount;
	let totalContributed = -1;
	const toggleModal = () => (isModalOpen = !isModalOpen);
	onMount(async () => {
		let url = `https://mainnet.syvita.org/extended/v1/address/${poolAddress}/balances?unanchored=true`;
		let res = await fetch(url);
		let balance = await res.json();
		url = `https://mainnet.syvita.org/extended/v1/address/${poolAddress}/balances`;
		res = await fetch(url);
		let test = await res.json();
		url = `https://mainnet.syvita.org/extended/v1/address/${poolAddress}/mempool`;
		res = await fetch(url);
		let data = await res.json();
		let mempool = data.results;
		let pendingBalance = 0;
		for (let i = 0; i < mempool.length; i++) {
			if (
				mempool[i].sender_address != poolAddress &&
				mempool[i].tx_status == 'pending' &&
				mempool[i].tx_type == 'token_transfer'
			) {
				pendingBalance += Math.floor(parseInt(mempool[i].token_transfer.amount) / 1000000);
			}
		}
		console.log(balance.stx.total_received - test.stx.total_received / 1000000);
		console.log(pendingBalance);
		// console.log(pendingBalance)
		totalContributed = Math.floor(balance.stx.total_received / 1000000) + pendingBalance;
	});
</script>
<div class="toggle-wrapper">
	<h1>NYC Pool 5</h1>
	{#if totalContributed > -1}
		<h2>Total Contributed: {totalContributed.toLocaleString()} STX</h2>
	{:else}
		<h2>Total Contributed: loading...</h2>
	{/if}
	<h4>Cap: 1,000,000 STX</h4>

	<div class="contribute-input">
		<input placeholder="40 STX Minimum" bind:value={contributeAmount} type="number" />
		{#if contributeAmount >= 50 && totalContributed < 1000000}
			<button on:click={toggleModal}>Add Funds</button>
		{:else}
			<button>Add Funds</button>
		{/if}
	</div>
</div>

{#if isModalOpen}
	<Modal on:close={toggleModal} coin="nyc" {contributeAmount} />
{/if}

<style>
	.toggle-wrapper {
		padding-top: 50px;
		color: white;
		text-align: center;
		font-size: 1.5rem;
	}
	.contribute-input {
		padding-top: 50px;
		display: flex;
		justify-content: center;
	}
	.contribute-input button {
		margin-left: 5px;
	}
	input {
		height: 40px;
		width: 200px;
		border: 1px solid lightgray;
		border-radius: 10px;
		transition: 0.4s;
		font-size: 1.25rem;
	}
	input:focus {
    color: black;
		outline: none;
		background-color: lightgrey;
	}
	button {
		height: 40px;
		width: 200px;
		border-radius: 10px;
		transition: 0.4s;
		border: none;
		cursor: pointer;
		font-size: 1.5rem;
	}
	button:hover {
    color: black;
		background-color: lightgray;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	@media (max-width: 768px) {
		.contribute-input {
			flex-direction: column;
			align-items: center;
			gap: 5px;
		}
		.contribute-input button {
			margin-left: 0;
		}
	}
</style>
