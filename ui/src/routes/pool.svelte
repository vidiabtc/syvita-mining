<script>
	import PoolStats from "$components/pool/poolStats.svelte";
	import PoolActivity from "$components/pool/poolActivity.svelte";
	import PoolHistory from "$components/pool/poolHistory.svelte";
	import SelectCity from "$components/selectCity.svelte";
	import Contribute from "$components/pool/contribute.svelte";

</script>

<div class="pool-wrapper">
	<div class="select-city">
	<SelectCity/>
	</div>
	<PoolStats/>
	<Contribute/>
	<PoolActivity/>
	<PoolHistory/>
</div>

<style>

	.pool-wrapper {
		margin-top: -30px;
	}

.select-city {
	width: fit-content;
	margin-left: auto;
	padding-right: 120px;
	padding-bottom: 35px;
}

</style>