<script>
	import ConnectWallet from '$components/connectWallet.svelte';
	import SelectLanguage from './selectLanguage.svelte';
	import { t } from '$lib/stores.js';
</script>

<div class="nav-wrapper">
	<a href="/">
		<p class="logo">Syvita Mining</p>
	</a>
	<nav>
		<SelectLanguage />
		<a href="/pool"><p>{$t.header.pool}</p></a>
		<a href="/mine"><p>{$t.header.mine}</p></a>
		<a href="/stack"><p>{$t.header.stack}</p></a>
		<a class="discord" href="">
			<img src="/discord.svg" alt="Discord Logo" />
			<p>{$t.header.discord}</p>
		</a>
		<ConnectWallet />
	</nav>
	<img class="mobile-menu" src="icons/hamburger.svg" alt="" />
</div>

<style>
	.nav-wrapper {
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

	nav {
		display: flex;
		margin-left: auto;
		align-items: center;
		gap: 30px;
		padding-right: 20px;
	}

	.discord {
		display: flex;
		margin-left: -20px;
	}

	.discord p {
		margin-left: -10px;
	}

	a:visited {
		text-decoration: none;
		color: white;
	}

	a {
		color: white;
	}

	.mobile-menu {
		display: none;
		width: 25px;
		margin-left: auto;
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
		nav {
			display: none;
		}
	}

	@media (max-width: 1105px) {
		.mobile-menu {
			display: block;
		}
	}
</style>
