<script>
	import UpgradeV2 from '$components/v2/upgradeV2.svelte';
	import Claim from '$components/v2/claim.svelte';
	import Activate from '$components/v2/activate.svelte';
</script>

<svelte:head>
	<title>CityCoins Upgrade | Syvita Mining</title>
	<meta name="CityCoins Upgrade | Syvita Mining" />
</svelte:head>

<div class="contract-calls-wrapper">


	<div class="contract-calls">
		<!-- <Activate /> -->
		<UpgradeV2 />
		<!-- <Claim /> -->
	</div>
</div>

<style>
	.contract-calls-wrapper {
		padding: 0 20px;
	}






	.contract-calls {
		max-width: 600px;
		margin: auto;
		padding-top: 100px;
	}



</style>
