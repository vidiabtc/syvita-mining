<script>
	import ConnectWallet from '$components/connectWallet.svelte';
</script>

<div class="nav-wrapper">
	<a href="/">
		<p class="logo">Syvita Mining</p>
	</a>
	<nav>
		<a href="/pool"><p>Pool</p></a>
		<a href="/mine"><p>Mine</p></a>
		<a href="/stack"><p>Stack</p></a>
		<a class="discord" href="">
			<img src="/discord.svg" alt="Discord Logo" />
			<p>Discord</p>
		</a>
		<ConnectWallet />
	</nav>
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

	@media (max-width: 1200px) {
		nav {
			display: none;
		}
	}
</style>
