<script>
	import MineMany from '$components/mineMany.svelte';
	import SelectCity from '$components/selectCity.svelte';
	import MinedBlocks from '$components/minedBlocks.svelte'
	import { user, city } from '$lib/stores.js';
	import { getCityWalletBalance } from '$lib/apiCalls.js'

	$: cityWalletBalance = getCityWalletBalance($city)
</script>

<div class="mine-wrapper">
	<div class="title">
		<h1>Mine</h1>
		<SelectCity />
	</div>
	<MineMany />
	
	<div class='stats'>
		<div>
			{#await cityWalletBalance}
				<p>0</p>
			{:then balance}
				<p>{balance.toLocaleString()}</p>
			{/await}
			<p>City Wallet Balance</p>
		</div>
		<div>
			<p>250,000</p>
			<p>My MIA won</p>
		</div>
		<div>
			<p>123,000</p>
			<p>STX spent mining</p>
		</div>
		<div>
			<p>11,000</p>
			<p>My STX balance</p>
		</div>
	</div>

	
		<a href="/pool">
			<button class='join'>+ Join Mining Pool</button>
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

	.stats div{
		border: 2px solid transparent;
		border-radius: 10px;
		border-image: linear-gradient(45deg, #222f98, #3b2e51) 1;
		padding: 20px;
		width: 270px;
		height: 141px; 
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.join {
		width: 200px;
		height: 50px;
		background-color: #384CFF;
		border-radius: 50px;
	}
</style>
