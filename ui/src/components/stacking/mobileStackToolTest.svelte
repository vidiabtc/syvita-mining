<div class="stack-history-wrapper">
	<div class="cycle">
		<div><p class="title">Cycle #1</p></div>
		<div>
			<p>MIA stacked</p>
			<p>100,000,000</p>
		</div>
		<div>
			<p>STX to claim</p>
			<p>50,000</p>
		</div>
		<div>
			<p>MIA to return</p>
			<p>0</p>
		</div>

		<div>
			<p>Claim Rewards</p>
			<p class="claim">Claim Now</p>
		</div>
	</div>
</div>

<style>
	.stack-history-wrapper {
		max-width: 870px;
		margin: auto;
		display: flex;
		flex-wrap: wrap;
		gap: 15px;
	}

	.cycle {
		width: 354px;
		border: 1px solid blue;
		border-radius: 10px;
		margin-right: auto;
		margin-left: auto;
		margin-top: 50px;
		margin-bottom: 50px;
		font-size: 1.25rem;
		padding: 20px 30px;
	}

	.cycle div {
		display: flex;
		justify-content: space-between;
		padding-bottom: 15px;
	}

	.cycle:last-child {
		padding-bottom: 0;
	}

	.title {
		font-size: 2rem;
		padding-bottom: 20px;
	}

	.claim {
		color: #384cff;
	}

	@media (min-width: 870px) {
		.stack-history-wrapper {
			display: none;
		}
	}
</style>
