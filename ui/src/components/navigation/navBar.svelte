<script>
	import ConnectWallet from '$components/connectWallet.svelte';
	import SelectLanguage from '$components/selectLanguage.svelte';
	import NavLinks from './navLinks.svelte';
	import MobileNavBar from './mobileNavBar.svelte';
	let toggle = false;
</script>

<div class="nav-wrapper">
	<a href="/">
		<p class="logo">Syvita Mining</p>
	</a>
	<div class="navigation-items">
		<SelectLanguage />
		<NavLinks />
		<ConnectWallet />
	</div>
	<div class="mobile-menu">
		<img
			on:click={() => (toggle = !toggle)}
			src={toggle ? 'icons/close.svg' : 'icons/hamburger.svg'}
			alt=""
		/>
		{#if toggle}
			<MobileNavBar />
		{/if}
	</div>
</div>

<style>
	.nav-wrapper {
		max-width: 100%;
		display: flex;
		align-items: center;
		font-size: 1.25rem;
		color: white;
		padding-top: 60px;
		padding-bottom: 150px;
		padding-left: 8%;
		padding-right: 135px;
	}

	.logo {
		margin-right: 0;
		font-weight: 700;
		font-size: 1.5rem;
		text-transform: uppercase;
	}

	.navigation-items {
		display: flex;
		margin-left: auto;
		align-items: center;
		gap: 30px;
		padding-right: 20px;
	}

	.mobile-menu {
		display: none;
		margin-left: auto;
	}

	.mobile-menu img {
		width: 25px;
		filter: invert(100%) sepia(99%) saturate(1%) hue-rotate(199deg) brightness(108%) contrast(100%);
	}

	@media (max-width: 1284px) {
		.nav-wrapper {
			padding-right: 30px;
		}
	}

	@media (max-width: 1284px) {
		.nav-wrapper {
			padding-left: 40px;
			padding-right: 30px;
		}
	}
	@media (max-width: 1105px) {
		.mobile-menu {
			display: block;
		}
		.navigation-items {
			display: none;
		}
		.nav-wrapper {
			padding-top: 35px;
		}
	}
</style>
