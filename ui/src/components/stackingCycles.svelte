<script>
</script>

<div class="mining-blocks-wrapper">
	<div class="mining-block">
		<div>
			<p>9</p>
			<p>Cycle</p>
		</div>
		<div>
			<p>2,620,000,000</p>
			<p>MIA Stacked</p>
		</div>
		<div>
			<p>5</p>
			<p>STX/MIA</p>
		</div>
		<div>
			<p>43397</p>
			<p>Start Block</p>
		</div>
		<div>
			<p class="block-status-winner">4,918</p>
			<p class="winner-title">STX to Stackers</p>
		</div>
		<div>
			<p>0.00%</p>
			<p>Percent Complete</p>
		</div>
	</div>
</div>

<style>
	.mining-blocks-wrapper {
		width: 1200px;
		height: 492px;
		margin: auto;
		overflow: auto;
		overflow-x: hidden;
	}

	.mining-blocks-wrapper div:first-of-type {
		margin-top: 0px;
	}

	.mining-block {
		width: 1180px;
		height: 82.3px;
		border: 1px solid rgba(255, 255, 255, 0.5);
		border-radius: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 103px;
		padding-right: 27px;
		margin-top: 20px;
	}

	.mining-block-winner {
		background: linear-gradient(180deg, rgba(77, 186, 95, 0.1) 0%, rgba(77, 186, 95, 0) 104.88%);
		border: 2px solid #4dba5f;
		width: 1180px;
		height: 82.3px;
		border-radius: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 103px;
		padding-right: 27px;
		margin-top: 20px;
	}

	.mining-block div {
		text-align: center;
	}

	.mining-block div p:first-child {
		padding-bottom: 10px;
	}

	.block-status-pending {
		background: #f26c42;
		width: 115px;
		height: 30px;
		box-shadow: 0px 10px 20px rgba(242, 108, 66, 0.1);
		border-radius: 4px;
		line-height: 1.75;
	}

	.block-status-winner {
		background: #48c063;
		width: 115px;
		height: 30px;
		box-shadow: 0px 10px 20px rgba(242, 108, 66, 0.1);
		border-radius: 4px;
		line-height: 1.75;
	}

	.winner-title {
		padding-top: 5px;
	}

	img {
		width: 13px;
	}

	.block-dropdown-wrapper {
		border: 1px solid rgba(255, 255, 255, 0.5);
		width: 1180px;
	}

	.block-dropdown {
		display: flex;
		justify-content: space-around;
		padding-right: 130px;
		padding-top: 14px;
		padding-bottom: 14px;
	}

	.block-dropdown-divider {
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		margin: 0 30px;
	}

	::-webkit-scrollbar {
		border: 1px solid #444d66;
		border-radius: 10px;
		width: 10px;
	}

	::-webkit-scrollbar-thumb {
		width: 8px;
		height: 62px;
		background: #ffffff;
		border-radius: 10px;
	}
</style>
