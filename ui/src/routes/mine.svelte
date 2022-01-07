<script>
	import MineMany from '$components/mine/mineMany.svelte';
	import SelectCity from '$components/selectCity.svelte';
	// import MinedBlocks from '$components/minedBlocks.svelte';
	import { user, city } from '$lib/stores.js';
	// import CityStats from '$components/index/cityStats.svelte';
	import { getStxBalance, getBlockHeight, getCoinBalance } from '$lib/apiCalls.js';
	import { getStxAddress } from '$lib/auth.js';

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
				<p><img width="20px" height="20px" src="/icons/stx.svg" alt="Total STX" /> 0</p>
			{:then balance}
				<p>
					<img width="20px" height="20px" src="/icons/stx.svg" alt="Total STX" />
					{balance.toLocaleString()}
				</p>
			{/await}
			<p>{$city.name} Wallet Balance</p>
		</div>
		<div class="coin-balance">
			{#await coinBalance}
				<p><img width="20px" height="20px" src={$city.img} alt={`${$city}`} />0</p>
			{:then balance}
				<p>
					<img
						width="25px"
						height="20px"
						src={$city.img}
						alt={`${$city}`}
					/>{balance.toLocaleString()}
				</p>
			{/await}
			<p>My {$city.coin.toUpperCase()} balance</p>
		</div>
		<div class="stx-balance">
			{#await stxBalance}
				<p><img width="20px" height="20px" src="/icons/stx.svg" alt="Total STX" />0</p>
			{:then balance}
				<p>
					<img
						width="20px"
						height="20px"
						src="/icons/stx.svg"
						alt="Total STX"
					/>{balance.toLocaleString()}
				</p>
			{/await}
			<p>My STX balance</p>
		</div>
		<div class="current-block">
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

	<!-- <MinedBlocks /> -->

	<StackToolTest />
	<MobileStackToolTest />
</div>

<style>
	.mine-wrapper {
		padding: 0 30px;
		text-align: center;
	}
	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 770px;
		min-width: 354px;
		padding-bottom: 25px;
		margin: auto;
	}

	.stats {
		display: flex;
		gap: 30px;
		padding-top: 50px;
		padding-bottom: 30px;
		justify-content: center;
		flex-wrap: wrap;
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
		gap: 30px;
		justify-content: center;
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

	.city-wallet p:first-child {
		display: flex;
		gap: 5px;
		font-size: 1.75rem;
		align-items: center;
	}

	.city-Wallet p:nth-child(2) {
		font-size: 1.25rem;
	}

	.coin-balance p:first-child {
		display: flex;
		gap: 5px;
		font-size: 1.75rem;
		align-items: center;
	}

	.coin-balance p:nth-child(2) {
		font-size: 1.25rem;
	}

	.stx-balance p:first-child {
		display: flex;
		gap: 5px;
		font-size: 1.75rem;
		align-items: center;
	}

	.stx-balance p:nth-child(2) {
		font-size: 1.25rem;
	}

	.current-block p:first-child {
		font-size: 1.75rem;
	}

	.current-block p:nth-child(2) {
		font-size: 1.25rem;
	}
</style>
