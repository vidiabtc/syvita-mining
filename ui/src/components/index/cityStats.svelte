<script>
	import { t } from '$lib/stores.js';
</script>

<div class="city-stats">
	<div class="mayor-stats">
		<div>
			<p>2</p>
			<p>{$t.home.totalMayors}</p>
		</div>
		<div>
			<p>120,000,000</p>
			<p>{$t.home.currentCityCoins}</p>
		</div>
		<div>
			<p>12850</p>
			<p>{$t.home.marketCap}</p>
		</div>
	</div>
	<div class="city-marketcaps"><p>CityCoins {$t.home.marketCap}</p></div>
</div>

<style>
	.city-stats {
		display: flex;
		justify-content: center;
		gap: 30px;
		padding-top: 50px;
		flex-wrap: wrap;
	}

	.mayor-stats {
		height: 485px;
		max-width: 380px;
		width: 100%;
		display: flex;

		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.mayor-stats div {
		border: 1px solid #444d66;
		max-width: 360px;
		width: 100%;
		height: 141px;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.mayor-stats div:nth-child(2) {
		background: linear-gradient(149.52deg, #384cff 8.64%, #ff38d3 86.61%);
		background-blend-mode: lighten;
	}

	.mayor-stats div p:first-child {
		font-size: 2rem;
	}
	.mayor-stats div p:nth-child(2) {
		padding-top: 15px;
		font-size: 1.25rem;
	}

	.city-marketcaps {
		max-width: 380px;
		width: 100%;
		min-width: 320px;
		height: 483px;
		border: 1px solid #444d66;
		border-radius: 10px;
		display: flex;
		justify-content: center;
	}

	.city-marketcaps p:first-child {
		padding-top: 20px;
	}
</style>
