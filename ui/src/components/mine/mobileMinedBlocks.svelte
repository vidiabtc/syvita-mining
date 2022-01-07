<script>
	let toggle = false;
</script>

<div class="mining-blocks-wrapper">
	<div on:click={() => (toggle = !toggle)} class="mining-block">
		<div class="mining-block-info-top">
			<div>
				<p>123</p>
				<p>Block</p>
			</div>
			<div>
				<p>150 STX</p>
				<p>Commited</p>
			</div>
			<div>
				<p>5</p>
				<p>Miners</p>
			</div>
		</div>
		<div class="mining-block-info-bottom">
			<div>
				<p>100 K</p>
				<p>Reward</p>
			</div>
			<div>
				<p class="block-status-winner">invidia.btc</p>
				<p class="winner-title">Winner</p>
			</div>
			<div>
				<img src="/icons/arrow-down.svg" alt="" />
			</div>
		</div>
	</div>
</div>

<style>
	.mining-blocks-wrapper {
		max-width: 800px;
		min-width: 354px;
	}

	.mining-block {
		display: flex;
		flex-direction: column;
		border: solid 1px white;
	}
	.mining-block-info-top div {
		display: flex;
	}

	.mining-block-info-bottom div {
		display: flex;
		flex-direction: column;
	}

	img {
		width: 15px;
	}

	@media (min-width: 800px) {
		.mining-blocks-wrapper {
			display: none;
		}
	}
</style>
