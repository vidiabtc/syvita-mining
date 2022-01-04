<script>
	import { stack } from '$lib/contractCalls.js';
  import { city } from '$lib/stores.js';
	import StackCycleTool from "$components/stacking/stackCycleTool.svelte";
	let amountToStack = 0;
	let numOfCycles = 0;
</script>

<div class="stack-wrapper">
	<div class="number-of-blocks">
		<div>
			<p>Amount of {$city.coin.toUpperCase()} to stack</p>
			<input
				bind:value={amountToStack}
				type="number"
			/>
		</div>
	</div>
	<div class="stx-per-block">
		<div>
			<p>Number of cycles</p>
			<input 	on:change={() => {
        if (numOfCycles > 32) numOfCycles = 32;
      }} bind:value={numOfCycles} type="number" />
      <button on:click={() => (numOfCycles = 32)} class="max">Max</button>
		</div>
		<!-- <div class="total-stx">
			<div>{numOfBlocks * stxPerBlock}</div>
			<img width="20px" height="20px" src="/icons/stx.svg" alt="Total STX" />
		</div> -->
	</div>
	<div class="submit">
		<button
			on:click={() => {
				numOfCycles = 0;
				amountToStack = 0;
			}}
			class="reset-button">Reset</button
		>
		<button on:click={() => stack(amountToStack, numOfCycles)} class="stack-button"
			>Stack for {numOfCycles} cycles</button
		>
	</div>

</div>
<StackCycleTool/>
<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}

	.stack-wrapper {
		width: 770px;
		height: max-content;
		border: 2px solid transparent;
		border-radius: 10px;
		border: 1px solid blue;
		padding: 20px;
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
	}

	input {
		color: white;
		width: 569px;
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
		width: 111px;
		height: 50px;
		border: 1px solid #384cff;
	}

	.total-stx {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 7px;
		width: 111px;
		height: 50px;
		border: 1px solid #384cff;
		border-radius: 4px;
	}

	.submit {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.reset-button {
		width: 170px;
		height: 50px;
		border: 1px solid #ffffff;
		margin-left: 20px;
		margin-top: 20px;
	}

	.stack-button {
		width: 170px;
		height: 50px;
		background: #384cff;
		margin-right: 20px;
		margin-top: 20px;
	}
</style>
