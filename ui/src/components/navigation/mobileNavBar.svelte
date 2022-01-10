<script>
	import NavLinks from './navLinks.svelte';
	import ConnectWallet from '$components/connectWallet.svelte';
</script>

<div>
	<NavLinks />
	<span><ConnectWallet /></span>
</div>

<style>
	div {
		position: absolute;
		width: 100%;
		left: 0;
		right: 0;
		top: 120px;
		padding-bottom: 50px;
		background-color: #212738;
		z-index: 2;
	}

	span {
		padding-top: 5px;
	}
</style>
