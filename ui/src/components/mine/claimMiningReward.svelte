<script>
	import { user, t, city } from '$lib/stores.js';
	import SelectCity from '$components/selectCity.svelte';
	import { getStxAddress } from '$lib/auth.js';
	import { canClaimMiningReward } from '$lib/apiCalls.js';

	// $: stxAddress = getStxAddress($user);
	$: stxAddress = 'SP18XC4F27VQ8P2QGKZ5P6KR41GK77ZVFWV468P1';

	let blockHeight = 0;
	let blockToCheck = 0;
	$: isWinner = blockToCheck > 0 ? canClaimMiningReward($city, stxAddress, blockToCheck) : null;
	// let blockWon = false;
</script>

<div class="claim-block-wrapper">
	<div class="claim-block">
		<div class="block-to-claim">
			<p>Block To Check</p>
			<input bind:value={blockHeight} type="number" />
		</div>
		<div class="submit">
			<button on:click={() => (blockToCheck = blockHeight)} class="stack-button"
				>Check block {blockHeight}</button
			>
		</div>
		{#if isWinner !== null}
			{#await isWinner}
				<h1>checking block...</h1>
			{:then isWinner}
				{#if isWinner == true}
					<h1>block won</h1>
				{:else}
					<h1>block lost</h1>
					{isWinner}
				{/if}
			{/await}
		{/if}
	</div>
</div>

<style>
	h1 {
		font-size: 2.5rem;
	}

	.claim-block-wrapper {
		margin: auto;
		max-width: 770px;
		min-width: 354px;
		height: max-content;
		padding-top: 103px;
	}

	.claim-block-wrapper div:first-child {
		padding-bottom: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.claim-block {
		border: 2px solid transparent;
		border-radius: 10px;
		border: 1px solid blue;
		padding: 20px;
		width: 100%;
	}

	.block-to-claim {
		padding: 20px;
		position: relative;
		display: flex;
		justify-content: space-between;
	}

	input {
		color: white;
		max-width: 570px;
		min-width: 224px;
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
		gap: 36px;
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
</style>
