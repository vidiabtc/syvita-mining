<script>
	import { t } from '$lib/stores.js';
</script>

<nav>
	<a href="/pool"><p>{$t.header.pool}</p></a>
	<a href="/mine"><p>{$t.header.mine}</p></a>
	<a href="/stack"><p>{$t.header.stack}</p></a>
	<a target="_blank" rel="noopener noreferrer" class="discord" href="https://discord.gg/syvita">
		<img src="/discord.svg" alt="Discord Logo" />
		<p>{$t.header.discord}</p>
	</a>
</nav>

<style>
	nav {
		display: flex;
		gap: 30px;
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

	@media (max-width: 1105px) {
		nav {
			flex-direction: column;
			padding-left: 30px;
			font-size: 1.75rem;
			padding-top: 40px;
		}

		.discord {
			gap: 10px;
			padding-bottom: 30px;
		}
	}
</style>
