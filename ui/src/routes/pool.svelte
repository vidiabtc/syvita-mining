<script>
	import PoolStats from '$components/pool/poolStats.svelte';
	import PoolActivity from '$components/pool/poolActivity.svelte';
	import PoolHistory from '$components/pool/poolHistory.svelte';
	import SelectCity from '$components/selectCity.svelte';
	import MineManyHistory from '$components/pool/MineManyHistory.svelte';

	import { user, city, t } from '$lib/stores.js';
	import { getLatestPoolId, getPool, getBlockHeight } from '$lib/apiCalls';
	import { getStxAddress } from '$lib/auth';

	$: stxAddress = getStxAddress($user);
	// $: stxAddress = 'SP3YXDXXHX1KQWG7N7G9WJQR69QGYN6DR1NK5H8XK';
	$: poolId = getLatestPoolId($city);
	$: blockHeight = getBlockHeight($city);


  // TEMPORARY FOR MANUAL POOL

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

  /////////////////
</script>

<svelte:head>
	<title>CityCoins Mining Pool | Syvita Mining</title>
	<meta
		name="description"
		content="Join the Syvita Mining Pool for CityCoins mining. By pooling your funds with others you can affordably and profitably mine for CityCoins."
	/>
</svelte:head>

<div class="pool-wrapper">
	<div class="select-city">
		<SelectCity/>
	</div>
  {#if $city.coin == 'mia'}

    {#await poolId}
      <h1>loading...</h1>
    {:then poolId}
      <PoolStats city={$city} {poolId} {blockHeight} {stxAddress} />
      <PoolHistory city={$city} {poolId} />
      <!-- <PoolActivity city={$city} /> -->
    {/await}

    {:else}

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


  {/if}

</div>



<style>
	.pool-wrapper {
		max-width: 1170px;
		margin: auto;
		padding-top: 75px;
	}

	.select-city {
		width: fit-content;
		max-width: 770px;
		margin-left: auto;
		margin-right: 20px;
		padding-bottom: 35px;
	}

  /* TEMPORARY STYLES FOR MANUAL POOL */
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
