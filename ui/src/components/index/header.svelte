<script>
	import { t } from '$lib/stores.js';
</script>

<header>
	<h1 class="flex-item">{$t.home.title}</h1>
	<p class="flex-item">
		{$t.home.subHeading}
	</p>
	<img class="city-coins-logo flex-item" src="/city-coins-header.svg" alt="" />
</header>

<style>
	header {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	h1 {
		font-size: clamp(4rem, 10vw, 5.75rem);
		max-width: 525px;
	}

	header p {
		font-size: 1.25rem;
		max-width: 550px;
		line-height: 32px;
	}

	.city-coins-logo {
		margin: auto;
		margin-top: -10px;
		min-width: 404px;
		width: 100%;
	}

	@media (max-width: 1129px) {
		header {
			text-align: center;
		}

		.flex-item:nth-child(1) {
			order: 1;
		}

		.flex-item:nth-child(2) {
			order: 3;
		}

		.flex-item:nth-child(3) {
			order: 2;
		}
	}
</style>
