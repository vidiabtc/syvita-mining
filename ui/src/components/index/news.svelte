<script>
	import { t } from '$lib/stores.js';
</script>

<div class="news-wrapper">
	<p>{$t.home.news}</p>
	<div class="table">
		<div class="article">
			<div class="news-image">
				<img
					src="https://images2.markets.businessinsider.com/618a7ef180dab90018dae893?format=jpeg"
				/>
			</div>
			<div class="news-story">
				<h3>
					NYC is getting its own city coin in line with the incoming mayor's crypto hub vision
				</h3>
				<p>
					New York City is about to get its own digital token in line with the vision of Mayor-Elect
					Eric Adams to transform the Big Apple into a cryptocurrency hub...
				</p>
				<a
					target="_blank"
					href="https://markets.businessinsider.com/news/currencies/nyc-city-coin-stacks-adams-bitcoin-miami-cryptocurrency-new-york-2021-11"
					>View More</a
				>
			</div>
		</div>
		<div class="article">
			<div class="news-image">
				<img
					src="https://www.miamiherald.com/latest-news/9vk8n6/picture256599156/alternates/LANDSCAPE_1140/suarez.jpg"
				/>
			</div>
			<div class="news-story">
				<h3>
					Miami’s $19 million in cryptocurrency is a windfall, but city should quickly manage the
					risks | Opinion
				</h3>
				<p>
					A friendly competition is emerging between Miami Mayor Francis Suarez and New York
					Mayor-Elect Eric Adams to position their cities as hubs for cryptocurrency...
				</p>
				<a target="_blank" href="https://www.miamiherald.com/opinion/op-ed/article256597301.html"
					>View More</a
				>
			</div>
		</div>
		<div class="article">
			<div class="news-image">
				<img
					src="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/12/720/405/Miami-Mayor-Francis-Suarez.jpg?ve=1&tl=1"
				/>
			</div>
			<div class="news-story">
				<h3>
					Miami leads the way in race to earn 'crypto capital' title, creating the first CityCoin
				</h3>
				<p>
					The cryptocurrency craze continues as American cities are now racing for the title of
					"crypto capital." Miami is leading the way to becoming the central hub with different
					initiatives involving residents while forging the way with the first CityCoin...
				</p>
				<a
					target="_blank"
					href="https://www.foxbusiness.com/money/miami-crypto-capital-race-creates-first-citycoin"
					>View More</a
				>
			</div>
		</div>
	</div>
</div>

<style>
	.news-wrapper {
		margin: auto;
		max-width: 1170px;
		padding-top: 50px;
		padding-bottom: 100px;
	}
	.news-wrapper p {
		text-align: left;

		font-size: 2.5rem;
		padding-bottom: 15px;
	}

	.table {
		width: 100%;

		border: 1px solid #444d66;
		border-radius: 10px;
	}

	.article {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 30px;
		padding: 30px 30px;
		border-bottom: 1px solid #444d66;
	}

	.article div:first-child img {
		max-width: 342px;
		min-width: 250px;
		width: 100%;
		max-height: 172px;
		min-height: 89px;
		border-radius: 10px;
	}

	.table div:last-child {
		border-bottom: none;
	}
	.news-story {
		max-width: 766px;
	}

	.news-story h3 {
		font-weight: 700px;
	}

	.news-story p {
		font-size: 1rem;
		padding-top: 10px;
	}

	.news-story a {
		color: #384cff;
	}

	a:hover {
		color: rgba(56, 76, 255, 0.5);	
	}

	@media (max-width: 775px) {
		.news-wrapper {
			display: none;
		}
	}
</style>
