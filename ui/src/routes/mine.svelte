<script>
	import MineMany from '$components/mineMany.svelte';
	import SelectCity from '$components/selectCity.svelte';
	import MinedBlocks from '$components/minedBlocks.svelte';
	import { user, city } from '$lib/stores.js';
	import { getStxBalance, getBlockHeight, getCoinBalance } from '$lib/apiCalls.js';
	import { getStxAddress } from '$lib/auth';

	// server side
	$: stxAddress = getStxAddress($user);
	$: cityWalletBalance = getStxBalance($city.cityWalletAddress);
	$: blockHeight = getBlockHeight($city);

	// client side
	$: coinBalance = stxAddress ? getCoinBalance($city, stxAddress) : 0;
	$: stxBalance = stxAddress ? getStxBalance(stxAddress) : 0;
</script>

<div class="mine-wrapper">
	<div class="title">
		<h1>Mine</h1>
		<SelectCity />
	</div>
	<MineMany />

	<div class="stats">
		<div class="city-wallet">
			{#await cityWalletBalance}
				<p>0</p>
			{:then balance}
				<img width="20px" height="20px" src="/icons/stx.svg" alt="Total STX" />
				<p>{balance.toLocaleString()}</p>
			{/await}
			<p>{$city.name} Wallet Balance</p>
		</div>
		<div>
			{#await coinBalance}
				<p>0</p>
			{:then balance}
				<img width="20px" height="20px" src={$city.img} alt={`${$city}`} />
				<p>{balance.toLocaleString()}</p>
			{/await}
			<p>My {$city.coin.toUpperCase()} balance</p>
		</div>
		<div>
			{#await stxBalance}
				<p>0</p>
			{:then balance}
				<img width="20px" height="20px" src="/icons/stx.svg" alt="Total STX" />
				<p>{balance.toLocaleString()}</p>
			{/await}
			<p>My STX balance</p>
		</div>
		<div>
			{#await blockHeight}
				<p>0</p>
			{:then block}
				<p>#{block}</p>
			{/await}
			<p>Current Block</p>
		</div>
	</div>

	<a href="/pool">
		<button class="join">+ Join Mining Pool</button>
	</a>

	<MinedBlocks />
</div>

<style>
	.mine-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 770px;
	}

	.stats {
		display: flex;
		gap: 30px;
	}

	.stats div {
		border: 2px solid transparent;
		border-radius: 10px;
		/* border-image: linear-gradient(45deg, #222f98, #3b2e51) 1; */
		border: solid 1px blue;
		padding: 20px;
		width: 270px;
		height: 141px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.join {
		width: 200px;
		height: 50px;
		background-color: #384cff;
		border-radius: 50px;
	}

	.city-wallet {
		display: flex;
	}
</style>
