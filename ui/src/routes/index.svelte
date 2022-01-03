<script>
	import Header from '$components/index/header.svelte';
	import PoolStats from '$components/index/poolStats.svelte';
	import CityStats from '$components/index/cityStats.svelte';
</script>

<div class="homepage-wrapper">
	<Header />
	<img class="city-coins-logo" src="/city-coins-header.svg" alt="" />

	<PoolStats />
	<CityStats />

	<widgetbot
  server="827950736087449601"
  channel="905622527211106334"
  width="300"
  height="500"
></widgetbot>
<script src="https://cdn.jsdelivr.net/npm/@widgetbot/html-embed"></script>
</div>

<style>
	.homepage-wrapper {
	}

	.city-coins-logo {
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		margin-top: -10px;
	}

</style>
