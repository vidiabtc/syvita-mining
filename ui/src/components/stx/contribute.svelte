<script>
	let stxAddress = "";
	let btcContribute = 0.002;
  let poolId = 1;

  import { getStore, createInvoice, getInvoices } from '$lib/btcpay.js';
	import {BTCPAY_STORE} from "$lib/constants.js";


</script>

<div class="main-wrapper">
	<h2>Contribute</h2>
	<h3>If we don’t reach a minimum of 5 BTC before Wednesday 2nd February, all pool contributions will be refunded. </h3>
	<div class="contract-call-wrapper">
		
		<div class="input-label">
			<div class="input-field">
				<p>STX address</p>
				<input bind:value={stxAddress} type="text"  placeholder="Insert stx address for receiving STX mining rewards"/>
			</div>
		</div>
		<div class="input-label">
			<div class="input-field">
				<p>BTC to contribute</p>
				<input bind:value={btcContribute} type="number"/>
			</div>
		</div>

		<div class="submit">
			<button
				on:click={() => {
					stxAddress = "";
					btcContribute = 0.002;
				}}
				class="reset-button">Reset</button
			>
			{#if stxAddress.length <= 0 || btcContribute <= 0}
			<button class="submit-button">Contribute</button>
			{:else}
			<button class="submit-button" on:click={() => createInvoice(BTCPAY_STORE, stxAddress, btcContribute, poolId)}>Contribute</button>

			
			{/if}
		</div>
	</div>
</div>

<style>
	.main-wrapper {
		max-width: 600px;
    margin: auto;
    padding-bottom: 30px;
    padding-top: 50px;
		padding-right: 10px;
    padding-left: 10px;

	}

	h2 {
		font-size: 2rem;
		padding-bottom: 20px;
	}

	h3 {
		padding-bottom: 20px;
		font-size: 1rem;

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
		margin-top: 20px;
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
