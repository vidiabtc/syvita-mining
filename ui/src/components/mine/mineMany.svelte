<script>
	import { mineMany } from '$lib/contractCalls.js';
	import { t } from '$lib/stores.js';
	import SelectCity from '$components/selectCity.svelte';

	let numOfBlocks = 0;
	let stxPerBlock = 0;
</script>

<div class="mine-many-parent-wrapper">
	<div class="select-city-wrapper">
		<h1>{$t.header.mine}</h1>
		<SelectCity />
	</div>
	<div class="mineMany-wrapper">
		<div class="number-of-blocks">
			<div class="input-field">
				<p>{$t.mine.blocksToMine}</p>
				<input
					on:change={() => {
						if (numOfBlocks > 200) numOfBlocks = 200;
					}}
					bind:value={numOfBlocks}
					type="number"
				/>
			</div>
			<button on:click={() => (numOfBlocks = 200)} class="max">{$t.mine.max}</button>
		</div>
		<div class="stx-per-block">
			<div class="input-field">
				<p>{$t.mine.stxPerBlock}</p>
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
				class="reset-button">{$t.mine.reset}</button
			>
			<button on:click={() => mineMany(numOfBlocks, stxPerBlock * 1000000)} class="mine-button"
				>{$t.header.mine}</button
			>
		</div>
	</div>
</div>

<style>
	.mine-many-parent-wrapper {
		max-width: 770px;
		min-width: 320px;
		margin: auto;
	}

	.select-city-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 25px;
	}

	.mineMany-wrapper {
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

	.max {
		max-width: 111px;
		width: 100%;
		min-width: 80px;
		height: 50px;
		border: 1px solid #384cff;
		margin-left: 10px;
	}

	.total-stx {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 7px;
		max-width: 111px;
		width: 100%;
		min-width: 80px;
		height: 50px;
		border: 1px solid #384cff;
		border-radius: 4px;
		margin-left: 10px;
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

	.mine-button {
		max-width: 170px;
		min-width: 80px;
		height: 50px;
		background: #384cff;
		margin-right: 20px;
		margin-top: 20px;
	}

	.mine-button:hover {
		background-color: rgba(56, 76, 255, 0.9);
		cursor: pointer;
	}

	.mine-button:active {
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
		.mineMany-wrapper {
			padding: 10px;
		}
		.submit {
			max-width: 295px;
		}
	}
</style>
