<script>
	export let stxPrice;
	export let miaBalance;
	export let nycBalance;
	import { t } from '$lib/stores.js';
</script>

<div class="mayor-stats-wrapper">
	<h3>{$t.home.cities}</h3>
	<div class="mayor-box-wrapper">
		<div class="mayor-box">
			<div class="mayor-box-info">
				<p class="mayor">
					<img
						src="https://images2.miaminewtimes.com/imager/u/magnum/11700127/feature33_francis_suarez_by_michael_campina_cover-web.jpg?cb=1631049577"
					/>Francis Suarez
				</p>
				<p><span>{$t.home.active}</span></p>
			</div>
			<div class="mayor-box-info">
				<div>
					<p>{$t.home.city}</p>
					<p>MIAMI</p>
				</div>
				<div>
					<p>{$t.home.walletBalance}</p>
					<p>${Math.floor(miaBalance * stxPrice).toLocaleString()}</p>
				</div>
			</div>
		</div>

		<div class="mayor-box">
			<div class="mayor-box-info">
				<p>
					<img
						src="https://pbs.twimg.com/profile_images/1310062565750341633/bwInZ7l2_400x400.jpg"
					/>Eric Adams
				</p>
				<p><span class="status-active">{$t.home.active}</span></p>
			</div>
			<div class="mayor-box-info">
				<div>
					<p>{$t.home.city}</p>
					<p>NEW YORK</p>
				</div>
				<div>
					<p>{$t.home.walletBalance}</p>
					<p>${Math.floor(nycBalance * stxPrice).toLocaleString()}</p>
				</div>
			</div>
		</div>

		<div class="mayor-box">
			<div class="mayor-box-info">
				<p>
					<img
						src="https://pbs.twimg.com/profile_images/955460391051526144/aXXYow0D_400x400.jpg"
					/>Steve Adler
				</p>
				<p><span class="status-inactive">{$t.home.inactive}</span></p>
			</div>
			<div class="mayor-box-info">
				<div>
					<p>{$t.home.city}</p>
					<p>Austin</p>
				</div>
				<div>
					<p>{$t.home.walletBalance}</p>
					<p>$0</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.mayor-stats-wrapper {
		max-width: 320px;
		margin: auto;
	}

	h3 {
		font-size: 2.5rem;
		padding-bottom: 30px;
	}

	.mayor-box-wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 25px;
	}

	.mayor {
		padding-left: 10px;
	}

	.mayor-box {
		border: solid 1px rgba(255, 255, 255, 0.2);
		border-radius: 10px;
		height: 200px;
		max-width: 320px;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 15px;
	}

	.mayor-box {
		display: flex;
		gap: 25px;
		border: 1px solid blue;
	}

	.mayor-box-info {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		text-align: center;
	}
	.mayor-box-info p {
		display: flex;
		justify-content: space-around;
		width: 165px;
		align-items: center;
		text-align: center;
		gap: 0px;
	}

	.mayor-box div:first-child p {
		max-width: 200px;
	}

	.mayor-box div:nth-child(2) div {
		max-width: 200px;
	}

	img {
		object-fit: cover;
		border-radius: 50px;
		width: 35px;
		height: 35px;
	}

	.mayor-box div:nth-child(2) div {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.mayor-box div:nth-child(2) div p:nth-child(2) {
		font-size: 1.15rem;
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

	@media (min-width: 805px) {
		.mayor-stats-wrapper {
			display: none;
		}
	}
</style>
