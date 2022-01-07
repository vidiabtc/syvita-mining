<script>
	import { t } from '$lib/stores.js';
</script>

<header>
	<!-- <h1>{$t.mining.title}</h1> -->
	<h1>Mine City Coins</h1>
	<p>
		The most efficient way to mine CityCoins. With Syvita Mining your contributions are pooled with
		others to increase the pools chances of winning. Upon winning blocks you will receive the
		percentage of your total contribution for the pool in relation to everyone elses.
	</p>
</header>

<style>
	header {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	h1 {
		font-size: 5.75rem;
		max-width: 525px;
	}

	header p {
		font-size: 1.25rem;
		max-width: 550px;
		line-height: 32px;
	}
</style>
