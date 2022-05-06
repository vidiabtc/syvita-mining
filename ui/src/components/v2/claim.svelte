<script>
	let cycleNumber = 0;
    import SelectCity from '$components/v2/selectCity.svelte';
</script>

<div class="main-wrapper">
	<h2>Claim CityCoins V1</h2>
	<div class="contract-call-wrapper">
		<div class="input-label">
			<div class="input-field">
				<p>Cycle Number</p>
				<input bind:value={cycleNumber} type="number" />
			</div>
		</div>
		<div class="select-coin-and-submit">
			<div class="submit">
				<SelectCity />
				<button class="submit-button">Claim</button>
			</div>
		</div>
	</div>
</div>

<style>
	.main-wrapper {
		max-width: 600px;

		padding-top: 40px;
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

	.input-label {
		padding: 20px;
		position: relative;
		display: flex;
		justify-content: space-between;
	}

	.input-field {
		max-width: 569px;
		width: 100%;
		min-width: 150px;
	}

	input {
		color: white;
		width: 100%;
		height: 50px;
		padding-left: 10px;
	}

	p {
		font-size: 0.6rem;
		top: 15px;
		left: 30px;
		position: absolute;
		background: #050810;
		padding-left: 5px;
		padding-right: 5px;
	}

	.submit {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
	}

	.reset-button {
		width: 170px;
		height: 50px;
		border: 1px solid #ffffff;
		margin-left: 20px;
		margin-top: 20px;
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
	input[type='number'] {
		-moz-appearance: textfield;
	}

	@media (max-width: 400px) {
		.contract-call-wrapper {
			padding: 10px;
		}
		.submit {
			max-width: 295px;
		}
	}
</style>
