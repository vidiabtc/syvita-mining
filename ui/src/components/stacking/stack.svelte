<script>
	import { stack } from '$lib/contractCalls.js';
	import { city, t } from '$lib/stores.js';
	import SelectCity from './stackSelectCity.svelte';

	let amountToStack;
	let numOfCycles;
</script>

<div class="stack-wrapper">
	<div>
		<h1>{$t.header.stack}</h1>
		<SelectCity />
	</div>
	<div class="stacking">
		<div class="number-of-blocks">
			<p>{$t.stack[`${$city.coin}AmountToStack`]}</p>
			<input bind:value={amountToStack} type="number" placeholder="0" />
		</div>
		<div class="stx-per-block">
			<p>{$t.stack.numOfCycles}</p>
			<input
				on:change={() => {
					if (numOfCycles > 32) numOfCycles = 32;
				}}
				bind:value={numOfCycles}
				placeholder="0"
				type="number"
			/>
			<button on:click={() => (numOfCycles = 32)} class="max">{$t.mine.max}</button>
		</div>
		<div class="submit">
			<button
				on:click={() => {
					numOfCycles = 0;
					amountToStack = 0;
				}}
				class="reset-button">{$t.mine.reset}</button
			>
			<button on:click={() => stack(amountToStack, numOfCycles)} class="stack-button"
				>{$t.header.stack}</button
			>
		</div>
	</div>
</div>

<style>
	.stack-wrapper {
		margin: auto;
		max-width: 770px;
		min-width: 320px;
		height: max-content;
		padding-top: 103px;
		padding-bottom: 75px;
	}

	h1 {
		font-size: 2.5rem;
	}

	.stack-wrapper div:first-child {
		padding-bottom: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.stacking {
		border: 2px solid transparent;
		border-radius: 10px;
		border: 1px solid blue;
		padding: 20px;
		width: 100%;
	}

	.number-of-blocks {
		padding: 20px;
		position: relative;
		display: flex;
		justify-content: space-between;
	}

	.stx-per-block {
		padding: 20px;
		position: relative;
		display: flex;
		justify-content: space-between;
		gap: 10px;
	}

	input {
		color: white;
		max-width: 570px;
		min-width: 160px;
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

	.max {
		max-width: 111px;
		min-width: 60px;
		height: 50px;
		border: 1px solid #384cff;
	}

	.total-stx {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 7px;
		max-width: 105px;
		min-width: 139px;
		height: 50px;
		border: 1px solid #384cff;
		border-radius: 4px;
	}

	.submit {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 36px;
	}

	.reset-button {
		max-width: 170px;
		min-width: 110px;
		height: 50px;
		border: 1px solid #ffffff;
		margin-left: 20px;
		margin-top: 20px;
	}

	.stack-button {
		max-width: 170px;
		min-width: 110px;
		height: 50px;
		background: #384cff;
		margin-right: 20px;
		margin-top: 20px;
	}

	.stack-button:hover {
		background-color: rgba(56, 76, 255, 0.9);
		cursor: pointer;
	}

	.stack-button:active {
		background-color: rgba(56, 76, 255, 0.8);
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	::placeholder {
		color: gray;
		font-size: 0.8rem;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}

	@media (max-width: 400px) {
		.submit {
			gap: 18px;
		}
	}
</style>
