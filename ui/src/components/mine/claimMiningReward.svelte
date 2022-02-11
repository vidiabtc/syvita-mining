<script>
	import { user, t, city } from '$lib/stores.js';
	import { getStxAddress } from '$lib/auth.js';
	import { canClaimMiningReward } from '$lib/apiCalls.js';

	$: stxAddress = getStxAddress($user);
	// $: stxAddress = 'SP18XC4F27VQ8P2QGKZ5P6KR41GK77ZVFWV468P1';

	let blockHeight;
	let blockToCheck;
	let claimBlockHeight = 0;
	$: isWinner = blockToCheck > 0 ? canClaimMiningReward($city, stxAddress, blockToCheck) : null;

	// $: claim = isWinner == true ? console.log('WINNER') : console.log('LOSER');

	// let blockWon = false;
</script>

<div class="claim-block-wrapper">
	<div>
		<h2>{$t.stack.claimRewards}</h2>
	</div>
	<div class="claim-block">
		<div class="block-to-claim">
			<p>{$t.mine.block}</p>
			<input bind:value={blockHeight} type="number" placeholder="0" />
		</div>
		<div class="submit">
			<button on:click={() => (blockToCheck = blockHeight)} class="check-button"
				>{$t.stack.claimNow}</button
			>
		</div>
		{#if isWinner !== null}
			{#await isWinner}
				<p class="checking-winner">Checking if won...</p>
			{:then isWinner}
				{#if !isWinner == true}
					<p class="checking-winner">Block lost</p>
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
		min-width: 315px;
		height: max-content;
		padding-top: 50px;
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

	.check-button {
		width: 170px;
		height: 50px;
		background: #384cff;
		margin-right: 20px;
		margin-top: 20px;
	}

	.check-button:hover {
		background-color: rgba(56, 76, 255, 0.9);
	}

	.check-button:active {
		background-color: rgba(56, 76, 255, 0.8);
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

	.checking-winner {
		position: relative;
		padding-top: 10px;
		padding-bottom: 10px;
		font-size: 1.25rem;
		max-width: fit-content;
	}

	.submit {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 36px;
		padding-left: 20px;
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
