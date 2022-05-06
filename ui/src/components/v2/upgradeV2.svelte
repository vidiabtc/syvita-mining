<script>
	import SelectCity from '$components/v2/selectCity.svelte';
	import { convertToV2, burn } from '$lib/contractCalls';
	import { user, city } from '$lib/stores.js';
	import { getCoinBalance } from '$lib/apiCalls.js';
	import { getStxAddress } from '$lib/auth.js';

	$: stxAddress = getStxAddress($user);

	$: coinBalance = stxAddress ? getCoinBalance($city, stxAddress, false) : 0;
</script>

<div class="main-wrapper">
	<h2>Upgrade CityCoins to V2</h2>
	<p>
		Upgrade your CityCoins from V1 to V2. Begin by selecting the CityCoin you want to upgrade and
		then simply press upgrade, your CityCoins will be automatically transferred from your wallet and
		upgraded to v2.
	</p>
	<div class="contract-call-wrapper">
		<div class="submit">
			<SelectCity />
			{#await stxAddress then stxAddress}
				{#await coinBalance then coinBalance}
					<button class="submit-button" on:click={() => convertToV2($city, coinBalance)}
						>Upgrade</button
					>
				{/await}
				<!-- <button on:click={() => burn($city)}>Burn</button> -->
			{/await}
		</div>
	</div>
</div>

<style>
	.main-wrapper {
		max-width: 600px;
		padding-top: 50px;
	}

	p {
		padding-bottom: 15px;
	}

	h2 {
		font-size: 2rem;
		padding-bottom: 15px;
	}

	.contract-call-wrapper {
		height: max-content;
		border: 2px solid transparent;
		border-radius: 10px;
		border: 1px solid blue;
		padding: 20px;
	}

	.submit {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
	}

	.submit-button {
		max-width: 170px;
		min-width: 80px;
		height: 50px;
		background: #384cff;
		margin-right: 20px;
	}

	.submit-button:hover {
		background-color: rgba(56, 76, 255, 0.9);
		cursor: pointer;
	}

	.submit-button:active {
		background-color: rgba(56, 76, 255, 0.8);
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */

	@media (max-width: 400px) {
		.contract-call-wrapper {
			padding: 20px 0;
		}
		.submit {
			max-width: 100%;
			flex-direction: column;
			align-content: center;
			justify-content: center;
			align-items: center;
		}

		.submit-button {
			margin-right: 0px;
		}

		p {
			padding-bottom: 20px;
		}
	}
</style>
