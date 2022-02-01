<script>
	import SelectCity from '$components/admin/selectCity.svelte';
	import MineMany from '$components/admin/mineMany.svelte';
	import EnableClaiming from '$components/admin/enableClaiming.svelte';
	import SetPool from '$components/admin/setPool.svelte';
	import SetEndBlock from '$components/admin/setEndBlock.svelte';
	import AddAdmin from '$components/admin/addAdmin.svelte';
	import RemoveAdmin from '$components/admin/removeAdmin.svelte';
	import UpdateFeeAddress from '$components/admin/updateFeeAddress.svelte';
	import ClaimSingle from '$components/admin/claimSingle.svelte';
	import ClaimMany from '$components/admin/claimMany.svelte';
import { onMount } from 'svelte';

	let latestBlockHeight = 0;

	onMount(async () => {
		let res = await fetch('https://api.ocelo.workers.dev/api/blockheight');
		latestBlockHeight = await res.json();
	});
</script>

<svelte:head>
	<title>Admin Page</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<div class="contract-calls-wrapper">
	<div class="title">
		<h1>Welcome Admin</h1>
		<p>
			Below you will find contract calls for the different mining contracts. Please select the
			contract below you would like to interact with. The current block height is #{latestBlockHeight}.
		</p>
	</div>
	<div class="select-city-wrapper">
		<SelectCity />
	</div>
	<div class="contract-calls">
		<MineMany />
		<EnableClaiming />
		<SetPool />
		<SetEndBlock />
		<AddAdmin />
		<RemoveAdmin />
		<UpdateFeeAddress />
		<ClaimSingle />
		<ClaimMany />
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
		font-size: 3rem;
		padding-bottom: 10px;
	}

	.title p {
		font-size: 1.2rem;
	}
	.select-city-wrapper {
		padding-top: 25px;
		padding-bottom: 50px;
		width: 212px;
	}

	.contract-calls {
		max-width: 600px;
		margin: auto;
	}
	@media (max-width: 600px) {
		.title {
			margin-left: 0px;
		}
	}
</style>
