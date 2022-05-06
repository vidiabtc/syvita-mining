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
	<div class="title">
		<!-- and also claim your old CityCoins from the v1 contracts.If you
			claim your CityCoins during Cycle 17 YOU WILL LOSE your stacking rewards for that cycle.Please
			wait until the cycle is over to claim. You can use <a href="https://fatstx.github.io/"
				>FATSTX</a
			> to determine which cycles CityCoins should be returned to you. -->
	</div>

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

	.title {
		margin-left: 50px;
		padding-top: 100px;
		max-width: 800px;
	}

	h1 {
		margin: auto;
		font-size: 3rem;
		padding-bottom: 10px;
	}

	.title p {
		font-size: 1.2rem;
	}

	.contract-calls {
		max-width: 600px;
		margin: auto;
	}

	a {
		color: #384cff;
		text-decoration: underline;
	}

	a:hover {
		color: white;
	}

	@media (max-width: 600px) {
		.title {
			margin-left: 0px;
		}
	}
</style>
