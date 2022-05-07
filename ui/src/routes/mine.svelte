<script>
	import MineMany from '$components/mine/mineMany.svelte';
	import ClaimMiningReward from '$components/mine/claimMiningReward.svelte';
	// import MinedBlocks from '$components/minedBlocks.svelte';
	import { user, city, t } from '$lib/stores.js';
	// import CityStats from '$components/index/cityStats.svelte';
	import { getStxBalance, getBlockHeight, getCoinBalance } from '$lib/apiCalls.js';
	import { getStxAddress } from '$lib/auth.js';

	$: stxAddress = getStxAddress($user);
	$: cityWalletBalance = getStxBalance($city.cityWalletAddress);
	$: blockHeight = getBlockHeight($city);

	$: coinBalance = stxAddress ? getCoinBalance($city, stxAddress, true) : 0;
	$: stxBalance = stxAddress ? getStxBalance(stxAddress) : 0;
</script>

<svelte:head>
	<title>Mine CityCoins | Syvita Mining</title>
	<meta
		name="description"
		content="The best place to mine for CityCoins. Mine individually or pool your funds with others for a higher win probability."
	/>
</svelte:head>

<div class="mine-wrapper">
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
			<p>{$t.mine[`${$city.coin}WalletBalance`]}</p>
		</div>
		<div class="coin-balance">
			{#await coinBalance}
				<p>
					<img
						width="20px"
						height="20px"
						src={`/citycoins/${$city.coin.toUpperCase()}.svg`}
						alt={`${$city}`}
					/>0
				</p>
			{:then balance}
				<p>
					<img
						width="25px"
						height="20px"
						src={`/citycoins/${$city.coin.toUpperCase()}.svg`}
						alt={`${$city}`}
					/>{balance.toLocaleString()}
				</p>
			{/await}
			<p>{$t.mine[`my${$city.coin.toUpperCase()}Balance`]}</p>
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
			<p>{$t.mine.mySTXBalance}</p>
		</div>
		<div class="current-block">
			{#await blockHeight}
				<p>0</p>
			{:then block}
				<p>#{block}</p>
			{/await}
			<p>{$t.mine.currentBlock}</p>
		</div>
	</div>
	<div class="join">
		<a href={`/pool/${$city.coin}`}>
			<button>+ {$t.mine.joinMiningPool}</button>
		</a>
	</div>
	<MineMany />

	<ClaimMiningReward />

	<!-- <MinedBlocks /> -->
</div>

<style>
	.mine-wrapper {
		padding-right: 20px;
		padding-left: 20px;
		padding-top: 100px;
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

	.join button:hover {
		background-color: rgba(56, 76, 255, 0.9);
		cursor: pointer;
	}

	.join button:active {
		background-color: rgba(56, 76, 255, 0.8);
	}

	.stats {
		display: flex;
		gap: 30px;
		padding-top: 50px;
		padding-bottom: 30px;
		justify-content: center;
		flex-wrap: wrap;
		padding-bottom: 75px;
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
		margin: auto;
		width: 200px;

		padding-bottom: 60px;
	}
	.join button {
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
