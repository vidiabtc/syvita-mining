<script>
	import SelectCity from '$components/v2/selectCity.svelte';
	import { registerUser } from '$lib/contractCalls';
	import { city } from '$lib/stores.js';
</script>

<div class="main-wrapper">
	<h2>Activate V2 Contract</h2>
	<p>
		For mining to begin on the v2 contracts they need to be activated by twenty different miners.
		Begin Activating the upgraded contracts below.
	</p>
	<div class="contract-call-wrapper">
		<div class="submit">
			<SelectCity />
			<button class="submit-button" on:click={() => registerUser($city)}>Activate</button>
		</div>
	</div>
</div>

<style>
	.main-wrapper {
		max-width: 600px;
		padding-top: 20px;
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
			padding: 10px;
		}

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
