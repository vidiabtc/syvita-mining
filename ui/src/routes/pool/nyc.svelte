<script>
	import { t } from '$lib/stores.js';
  import { addFunds} from '$lib/contractCalls.js';
  let coin = 'nyc'
  import { onMount } from 'svelte';
  let value;
  let totalContributed;
  onMount(async () => {
		let url = `https://mainnet.syvita.org/extended/v1/address/SP78Q12M26WVN1V9DPQ29HVDTWPKQH6KVR1X0VEW/balances`;
		let res = await fetch(url);
		let balance = await res.json();
    totalContributed = Math.floor(balance.stx.total_received / 1000000)
  });

</script>


	<div class="pool-stats-wrapper">

		<div class="stats-wrapper">
			<div>
				<p>{$t.pool.pool} 9</p>
        
			</div>
	<div>	<p><img src="/icons/stx.svg"> {totalContributed}</p>
  <p>Contributed</p></div>

</div>
<div class="contribute-wrapper">
	<div class="title">
		<h3>{$t.pool.contribute}</h3>
		<!-- <SelectCity/> -->
	</div>
	<div class="contributions">
		<div class="add-contributions">
			<div class="input-field">
				<input bind:value placeholder="50 STX Minimum" type="number" />
			</div>
			<button on:click={() => addFunds(coin, Math.floor(value))} >Contribute</button>
		</div>
	</div>
</div>

	</div>



<style>







	.pool-stats-wrapper {
		max-width: 1170px;
		margin: auto;
		padding: 0 20px;
    font-size: 2rem;

	}

	.stats-wrapper {
padding-top: 106px;
gap: 10px;
    display: flex;
    flex-wrap: wrap;
	}

	.stats-wrapper div {
		display: flex;
		flex-direction: column;
		max-width: 370px;
    gap: 10px;
		width: 100%;
		min-width: 310px;
		height: 141px;
		justify-content: center;
		align-items: center;
		border: 1px solid blue;
		border-radius: 10px;
		margin: auto;
	}

	.stats-wrapper div:first-child {
		background: linear-gradient(149.52deg, #384cff 8.64%, #ff38d3 86.61%);
		background-blend-mode: lighten;
		border-radius: 10px;
	}

  .stats-wrapper div:nth-child(2) p:first-child {
    display: flex;
    gap: 5px;
  }





	@media (max-width: 1220px) {
		.pool-stats-wrapper {
			max-width: 750px;


		}


		@media (max-width: 800px) {
			.pool-stats-wrapper {
				max-width: 370px;
			}
	
		}
	}


  .contribute-wrapper {
		max-width: 770px;
		min-width: 300px;
		margin: auto;
		padding-left: 20px;
    padding-right: 20px;
    padding-top: 150px;
	}

	.title {
		font-size: 1.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	
		padding-bottom: 15px;
	}

	.contributions {
		max-width: 770px;
		height: 110px;
		border: 2px solid transparent;
		border-radius: 10px;
		border: 1px solid blue;
		padding: 10px;

	}

	.add-contributions {
		padding: 20px;
		position: relative;
		display: flex;
		justify-content: space-between;
		gap: 30px;
	}

	.input-field {
		max-width: 500px;
		min-width: 45px;
		width: 100%;
	}

	input {
		color: white;
		width: 100%;
		height: 50px;
		padding-left: 10px;
	}
	::placeholder {
		color: white;
		font-size: 1rem;
	}

	button {
		width: 180px;
		height: 50px;

		background: #384cff;
		border-radius: 4px;
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

	@media(max-width: 400px) {
	.add-contributions {	gap: 10px; }

	.title {
		font-size: 1.25rem;
	}

  .contribute-wrapper {
      padding-top: 50px

  }
	}
</style>
