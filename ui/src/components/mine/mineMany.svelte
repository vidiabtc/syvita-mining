<script>
	import { mineMany } from '$lib/contractCalls.js';

	let numOfBlocks = 0;
	let stxPerBlock = 0;
</script>

<div class="mineMany-wrapper">
	<div class="number-of-blocks">
		<div>
			<p>Number of blocks to Mine</p>
			<input
				on:change={() => {
					if (numOfBlocks > 200) numOfBlocks = 200;
				}}
				bind:value={numOfBlocks}
				type="number"
			/>
		</div>
		<button on:click={() => (numOfBlocks = 200)} class="max">Max</button>
	</div>
	<div class="stx-per-block">
		<div>
			<p>Stx per block</p>
			<input bind:value={stxPerBlock} type="number" />
		</div>
		<div class="total-stx">
			<div>{numOfBlocks * stxPerBlock}</div>
			<img width="20px" height="20px" src="/icons/stx.svg" alt="Total STX" />
		</div>
	</div>
	<div class="submit">
		<button
			on:click={() => {
				numOfBlocks = 0;
				stxPerBlock = 0;
			}}
			class="reset-button">Reset</button
		>
		<button on:click={() => mineMany(numOfBlocks, stxPerBlock * 1000000)} class="mine-button"
			>Mine for {numOfBlocks} blocks</button
		>
	</div>
</div>

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

	.mineMany-wrapper {
		max-width: 770px;
		min-width: 354px;
		margin: auto;
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
		max-width: 569px;
		min-width: 227px;
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

	.mine-button {
		width: 170px;
		height: 50px;
		background: #384cff;
		margin-right: 20px;
		margin-top: 20px;
	}
</style>
