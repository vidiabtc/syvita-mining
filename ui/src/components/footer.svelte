<script>
	import { t } from '$lib/stores.js';
</script>

<footer>
	<p>{$t.footer.syvita}</p>
	<a target="_blank" rel="external noopener noreferrer" href="https://twitter.com/syvitamining">
		<p class="twitter">{$t.footer.follow}<img src="/twitter.svg" alt="Twitter Logo" /></p>
	</a>
</footer>

<style>
	footer {
		color: white;
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding-bottom: 15px;
		padding-top: 15px;
		border-top: 1px solid #444d66;
		margin-top: 50px;
	}

	.twitter {
		display: flex;
	}

	.twitter img {
		padding-left: 5px;
	}

	.twitter img:hover {
		filter: invert(50%) sepia(93%) saturate(2751%) hue-rotate(165deg) brightness(100%)
			contrast(105%);
	}

	@media (max-width: 530px) {
		footer {
			flex-direction: column;
			gap: 10px;
		}
	}
</style>
