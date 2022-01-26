<script>
	export let stxPrice;
	export let miaBalance;
	export let nycBalance;
	import { t } from '$lib/stores.js';
	import { CITIES } from '$lib/constants.js';
</script>

<div class="mayor-stats-wrapper">
	<h3>{$t.home.cities}</h3>
	<div class="table">
		<div>
			<div class="table-headers">
				<p>{$t.home.mayor}</p>
				<p>{$t.home.city}</p>
				<p>{$t.home.walletBalance}</p>
				<p>{$t.home.miningStatus}</p>
			</div>
			<div class="table-data">
				<p class="mayor-table">
					<img
						src="/mayors/francis-suarez.jpg"
					/>Francis Suarez
				</p>
				<p>MIAMI</p>
				<p>${Math.floor(miaBalance * stxPrice).toLocaleString()}</p>
				<p><span class="status-active">{$t.home.active}</span></p>
			</div>
			<div class="table-data">
				<p class="mayor-table">
					<img
						src="/mayors/eric-adams.jpg"
					/>Eric Adams
				</p>
				<p>NEW YORK CITY</p>
				<p>${Math.floor(nycBalance * stxPrice).toLocaleString()}</p>
				<p><span class="status-active">{$t.home.active}</span></p>
			</div>

			<div class="table-data">
				<p class="mayor-table">
					<img
					src="/mayors/steve-adler.jpg"
					/>Steve Adler
				</p>
				<p>AUSTIN</p>
				<p>$0</p>
				<p><span class="status-inactive">{$t.home.inactive}</span></p>
			</div>
		</div>
	</div>
</div>

<style>
	.mayor-stats-wrapper {
		max-width: 1170px;
		margin: auto;
	}

	h3 {
		font-size: 2.5rem;
		padding-bottom: 30px;
	}
	.table {
		border: solid 1px rgba(255, 255, 255, 0.2);
		border-radius: 10px;
	}

	.table div div:last-child {
		border-bottom: none;
	}

	.table-headers {
		display: flex;
		width: 100%;
		align-items: center;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}

	.table-headers p {
		border-right: 1px solid rgba(255, 255, 255, 0.2);
		height: 59px;
		width: 100%;
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
		width: 100%;
		display: flex;
		align-items: center;
		padding-left: 30px;
	}

	.table-data p:last-child {
		border-right: none;
	}

	.table-data p:last-child {
		justify-content: center;
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

	@media (max-width: 805px) {
		.mayor-stats-wrapper {
			display: none;
		}
	}
</style>
