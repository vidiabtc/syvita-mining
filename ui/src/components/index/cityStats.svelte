<div class="city-stats-wrapper">
	<div class="table">
		<div>
			<div class="table-headers">
				<p>Mayor</p>
				<p>City</p>
				<p>Wallet Balance</p>
				<p>Mining Status</p>
			</div>

			<div class="table-data">
				<p class="mayor-table">
					<img
						src="https://images2.miaminewtimes.com/imager/u/magnum/11700127/feature33_francis_suarez_by_michael_campina_cover-web.jpg?cb=1631049577"
					/>Francis Suarez
				</p>
				<p>MIAMI</p>
				<p>$25,000,000</p>
				<p><span class="status-active">Active</span></p>
			</div>
			<div class="table-data">
				<p class="mayor-table">
					<img
						src="https://pbs.twimg.com/profile_images/1310062565750341633/bwInZ7l2_400x400.jpg"
					/>Eric Adams
				</p>
				<p>NEW YORK CITY</p>
				<p>$30,000,000</p>
				<p><span class="status-active">Active</span></p>
			</div>

			<div class="table-data">
				<p class="mayor-table">
					<img
						src="https://pbs.twimg.com/profile_images/955460391051526144/aXXYow0D_400x400.jpg"
					/>Steve Adler
				</p>
				<p>AUSTIN</p>
				<p>$0</p>
				<p><span class="status-inactive">Inactive</span></p>
			</div>
		</div>
	</div>

	<div class="city-stats">
		<div class="mayor-stats">
			<div>
				<p>2</p>
				<p>Total Mayors</p>
			</div>
			<div>
				<p>120,000,000,000,000</p>
				<p>Current City Coins</p>
			</div>
			<div>
				<p>12850</p>
				<p>Market Cap</p>
			</div>
		</div>
		<div class="city-marketcaps"><p>City Coins Marketcap</p></div>
	</div>
</div>

<style>
	.table {
		max-width: 1170px;

		margin: auto;
		border: solid 1px rgba(255, 255, 255, 0.2);
		border-radius: 10px;
	}

	.table div div:last-child {
		border-bottom: none;
	}

	.table-headers {
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}

	.table-headers p {
		border-right: 1px solid rgba(255, 255, 255, 0.2);
		height: 59px;
		width: 300px;
		display: flex;
		align-items: center;
		padding-left: 30px;
	}

	.table-headers p:last-child {
		border-right: none;
	}

	.table-data {
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		justify-content: center;
	}

	.table-data p {
		border-right: 1px solid rgba(255, 255, 255, 0.2);
		height: 65px;
		width: 300px;
		display: flex;
		align-items: center;
		padding-left: 30px;
	}

	.table-data p:last-child {
		border-right: none;
	}

	.table-data p:last-child {
		justify-content: center;
		padding-left: 0;
	}

	.mayor-table {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.status-active {
		font-size: 0.8rem;
		background-color: #384cff;
		border-radius: 2px;
		padding: 2.5px 5px;
		width: 50px;
		height: 23px;
		display: flex;
		align-items: center;
	}

	.status-inactive {
		font-size: 0.8rem;
		background-color: #e2a042;
		border-radius: 2px;
		padding: 2.5px 5px;
		width: 58px;
		height: 23px;
		display: flex;
		align-items: center;
	}

	img {
		object-fit: cover;
		border-radius: 50px;
		width: 35px;
		height: 35px;
	}

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
		display: flex;

		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.mayor-stats div {
		border: 1px solid #444d66;
		width: 370px;
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
		width: 370px;
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
