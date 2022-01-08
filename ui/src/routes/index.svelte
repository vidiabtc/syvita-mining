<script>
	import Header from '$components/index/header.svelte';
	import PoolStats from '$components/index/poolStats.svelte';
	import MayorStats from '$components/index/mayorStats.svelte';
	import MobileMayorStats from '$components/index/mobileMayorStats.svelte';
	import CityStats from '$components/index/cityStats.svelte';
	import News from '$components/index/news.svelte';
	import MobileNews from '$components/index/mobileNews.svelte';
	import Mobilenews from '$components/index/mobileNews.svelte';
</script>

<div>
	<Header />

	<PoolStats />
	<MayorStats />
	<MobileMayorStats />
	<CityStats />
	<News />
	<Mobilenews />
</div>

<style>
	div {
		margin: auto;
		padding: 0 20px;
	}
</style>
