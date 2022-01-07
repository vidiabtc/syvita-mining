<div class="pool-stats">
	<div>
		<p class="stx-contributed"><img src="/icons/stx.svg" />8,990</p>
		<p>Total Raised STX for Pool <img class="info-img" src="/info.svg" alt="" /></p>
	</div>
	<div>
		<p class="city-coins-won">
			<img class="city-coin-img" src="/city-coins.svg" />65,580,520,212.33
		</p>
		<p>Total City Coins Won <img class="info-img" src="/info.svg" alt="" /></p>
	</div>
</div>
<div class="divider" />

<style>
	.pool-stats {
		display: flex;
		margin: auto;
		flex-wrap: wrap;
		gap: 30px;
		padding-top: 300px;
		justify-content: center;
	}

	.pool-stats div {
		width: 100%;
		max-width: 600px;
		min-width: 324px;
		height: 195px;
		border: 1px solid blue;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.pool-stats div p:nth-child(2) {
		font-size: 2.5rem;
		padding-top: 10px;
		display: flex;
	}

	.stx-contributed {
		display: flex;
		align-items: center;
		font-size: 2.75rem;
		gap: 5px;
	}

	img {
		width: 30px;
	}

	.pool-stats div:nth-child(2) {
		background: linear-gradient(149.52deg, #384cff 8.64%, #ff38d3 86.61%);
	}

	.city-coins-won {
		display: flex;
		align-items: center;
		font-size: 2.75rem;
		gap: 5px;
	}

	.info-img {
		padding-left: 10px;
	}

	.divider {
		opacity: 0.5;
		border: 1px solid #444d66;
		margin: 50px 0;
	}

	@media (max-width: 500px) {
		.pool-stats div p:nth-child(2) {
			font-size: 2rem;
			padding-top: 10px;
			display: flex;
		}

		.stx-contributed {
			display: flex;
			align-items: center;
			font-size: 2.5rem;
			gap: 5px;
		}

		.city-coins-won {
			display: flex;
			align-items: center;
			font-size: 2rem;
			gap: 5px;
		}
	}
</style>
