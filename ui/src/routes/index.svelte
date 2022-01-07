<script>
	import Header from '$components/index/header.svelte';
	import PoolStats from '$components/index/poolStats.svelte';
	import CityStats from '$components/index/cityStats.svelte';
	import News from '$components/index/news.svelte';
</script>

<div>
	<Header />
	<img class="city-coins-logo" src="/city-coins-header.svg" alt="" />

	<PoolStats />
	<CityStats />
	<News />
</div>

<style>
	.city-coins-logo {
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		margin-top: -10px;
	}
</style>
