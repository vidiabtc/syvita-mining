<script>
  import PoolSelectCity from "$components/stx/PoolSelectCity.svelte";
import Contribute from "$components/stx/contribute.svelte";
import {getWalletBalance} from "$lib/btcpay.js"; 
import {BTCPAY_STORE} from "$lib/constants.js";


</script>


<div class="pool-wrapper">
	<div class="select-city">
		<PoolSelectCity selectedCity={'stx'}/>
	</div>
  <div class="pool-stats-wrapper">
		<div class="stats-wrapper">
			<div>
				<p>Pool 1</p>
			</div>
			<div>
				<p class="stx-logo">
					<img src="/icons/bitcoin-icon.svg" /> 
					
					{#await getWalletBalance(BTCPAY_STORE)}
					0
					{:then balance}
					{Math.floor(balance * 1000) / 1000}
					{/await} </p>

				<p>Total Raised BTC</p>
				
			</div>
        <div>
          <p>February 1</p>
      <p>Contributions Close</p> 
    

			</div>

			<div>
				<p>0</p>
				<p class="coin-logo">
			 STX WON
				</p>
			</div>
		</div>
	</div>
	<Contribute/>
</div>


<style>
	.pool-wrapper {
		max-width: 1170px;
		margin: auto;
		padding-top: 75px;
	}

	.select-city {
		width: fit-content;
		max-width: 770px;
		margin-left: auto;
		margin-right: 20px;
		padding-bottom: 35px;
	}

	.pool-stats-wrapper {
		max-width: 1170px;
		margin: auto;
		padding-right: 20px;
		padding-left: 20px;
    
	}

	.stats-wrapper {
	display: flex;
  flex-wrap: wrap;
		gap: 30px;
	}

	.stats-wrapper div {
		display: flex;
		flex-direction: column;
		max-width: 350px;

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

	.stats-wrapper div p:first-child {
		padding-bottom: 15px;
		font-size: 2.5rem;
	}

	.stats-wrapper div p:nth-child(2) {
		font-size: 1.25rem;
	}

  .stx-logo {
		display: flex;
		gap: 4px;
	}

	.stx-logo img {
		width: 35px;
	}

	.coin-logo {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.coin-logo img {
		width: 30px;
	}

</style>