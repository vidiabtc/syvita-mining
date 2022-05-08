

<script>
	import {onMount} from 'svelte'
	import { user } from '$lib/stores';
	import SelectCity from '$components/v2/selectCity.svelte';
	import { getStxAddress } from '$lib/auth.js';
	import { CYCLE_LENGTH, CITIES } from '$lib/constants.js'
import { claimV1Tokens } from '$lib/contractCalls';

	let cycleNumber;

	$: stxAddress = getStxAddress($user);
	// $: transactions = stxAddress ? fetchUserTransactions(stxAddress) : [];

	$: stackedTokens = stxAddress ? fetchUserTransactions(stxAddress) : []; // user id 918

	const getCycleNumberFromBlock = (blockHeight, activationBlock) => {
		console.log(blockHeight)
		let cycle = Math.floor((parseInt(blockHeight) - parseInt(activationBlock)) / CYCLE_LENGTH) + 1
		return parseInt(cycle)
	}
			

	const fetchUserTransactions = async stxAddress => {

		let userTransactions = []

		let url = `https://stacks-node-api.mainnet.stacks.co/extended/v1/address/${stxAddress}/transactions?limit=50&offset=0`

		let response = await fetch(url)
		let transactions = await response.json()
		userTransactions = userTransactions.concat(transactions.results)

		console.log('array', userTransactions)
		console.log(transactions.total)


		let offset = 50


		while (offset <= parseInt(transactions.total)) {

			let url = `https://stacks-node-api.mainnet.stacks.co/extended/v1/address/${stxAddress}/transactions?limit=50&offset=${offset}`

			let response = await fetch(url)
			let transactions = await response.json()
			userTransactions = userTransactions.concat(transactions.results)
			

			offset += 50
		}

		 
		const isStackTokens = (tx) => {
			if (tx.tx_status === 'success') {
				if (tx.tx_type === 'contract_call') {
				if (tx.contract_call.function_name === 'stack-tokens') {
					return true
				}
				} 
			}	
			return false
		}


		userTransactions = userTransactions.filter(tx => isStackTokens(tx))


		console.log('Final Array', userTransactions)

		let stackedV1Tokens = []
		

		userTransactions.map(tx => {
			let city = getCityFromTx(tx)
			// console.log('token ', city.coin)

			let amountStacked = parseInt(tx.contract_call.function_args[0].repr.substring(1))
			let cycle = getCycleNumberFromBlock(tx.block_height, city.activationBlock)
			let cyclesStacked = parseInt(tx.contract_call.function_args[1].repr.substring(1))
			// console.log('cycle stacked ', cycle)
			// console.log('Cycles stacked for: ', cyclesStacked)
			let lastCycleStacked = cycle + cyclesStacked - 1
			// console.log('Last cycle stacked: ', lastCycleStacked)

			


			if (city.coin === 'mia') {
				if (lastCycleStacked > 16) {

				stackedV1Tokens = stackedV1Tokens.filter(tx => {
					if (tx.lastCycleStacked == lastCycleStacked && tx.token == 'mia') {
						amountStacked += tx.amountStacked
						return false
					}
					return true
				})	
				console.log('same cycle ', stackedV1Tokens)

				stackedV1Tokens.push({
					token: city.coin,
					amountStacked,
					lastCycleStacked,
				})

				}
			} else {
				if (lastCycleStacked > 10) {

					stackedV1Tokens = stackedV1Tokens.filter(tx => {
						if (tx.lastCycleStacked == lastCycleStacked && tx.token == 'nyc') {
							 amountStacked += tx.amountStacked
							 return false
						}
						return true
					})	
					console.log('same cycle ', stackedV1Tokens)

					stackedV1Tokens.push({
						token: city.coin,
						amountStacked,
						lastCycleStacked,
					})
				}


			}
		})

		console.log(stackedV1Tokens)


		return stackedV1Tokens

	}


	const getCityFromTx = (tx) => {
		return tx.contract_call.contract_id === 'SP2H8PY27SEZ03MWRKS5XABZYQN17ETGQS3527SA5.newyorkcitycoin-core-v1' ? CITIES['nyc'] : CITIES['mia']
	}

	



</script>

<div class="main-wrapper">
	<h2>Claim your CityCoins V1 tokens</h2>
	<p>Keep track of which cycles you are claiming for so you are not trying to claim already claimed cycles. We are only showing your claimable cycles after activation of v2 (NOT before then)</p>

	{#await stackedTokens}
		<h1>Loading...</h1>
	{:then stackedTokens}
	<table>
		<tr>
			<th>Token</th>
			<th>Cycle</th>
			<th>Amount to Claim</th>
			<th>Claim</th>
		</tr>
	
		{#each stackedTokens as claim}
		<tr>
			<td>{claim.token.toUpperCase()}</td>
			<td>{claim.lastCycleStacked}</td>
			<td>{claim.amountStacked}</td>
			<button on:click={() => claimV1Tokens(CITIES[claim.token], claim.lastCycleStacked, claim.amountStacked)}>Claim</button>
		</tr>
		{/each}
	</table>
	
	{/await}
</div>

<style>
	.main-wrapper {
		max-width: 600px;

		padding-top: 40px;
	}

	.function-description {
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

	.cycle-number {
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

	a {
		color: #384cff;
		text-decoration: underline;
	}

	a:hover {
		color: white;
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

	table {
		max-width: 1000px;
    width: 100%;
		padding-top:20px;
		text-align: center;
	}

	td {
		padding: 5px;
	
	}

	button {
		width: 90px;
		height: 25px;
		background: #384cff;
		border-radius: 4px;
		text-align: center;
		margin: auto;
	}

	@media (max-width: 400px) {
		.contract-call-wrapper {
			padding: 10px;
		}
		.submit {
			max-width: 295px;
			flex-direction: column;
		}

		.submit-button {
			margin-right: 0px;
		}
	}
</style>
