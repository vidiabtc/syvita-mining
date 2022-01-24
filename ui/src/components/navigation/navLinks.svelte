<script>
	import { t } from '$lib/stores.js';
	import SelectLanguage from '$components/selectLanguage.svelte';
</script>

<div class="language-selector">
	<SelectLanguage />
</div>
<nav>
	<a href="/pool/mia"><p>{$t.header.pool}</p></a>
	<a href="/stack"><p>{$t.header.stack}</p></a>
	<a href="/mine"><p>{$t.header.mine}</p></a>

	<a
		target="_blank"
		rel="external noopener noreferrer"
		class="discord"
		href="https://discord.gg/syvita"
	>
		<img src="/discord.svg" alt="Discord Logo" />
		<p>{$t.header.discord}</p>
	</a>
</nav>

<style>
	.language-selector {
		margin-right: 15px;
	}

	p {
		width: 70px;
	}

	nav {
		display: flex;
		gap: 20px;
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

	a p:hover {
		color: #384cff;
	}

	@media (max-width: 1140px) {
		p {
			width: 150px;
		}
		nav {
			flex-direction: column;
			padding-left: 30px;
			font-size: 1.75rem;
			padding-top: 40px;
		}

		.discord {
			gap: 0px;
			padding-bottom: 30px;
			margin-left: 0;
		}

		.discord p {
			order: 1;
			margin-left: 0;
		}

		.discord img {
			width: 30px;
			margin-left: -40px;
			order: 2;
		}

		.language-selector {
			margin-left: -29px;
			padding-top: 20px;
		}
	}
</style>
