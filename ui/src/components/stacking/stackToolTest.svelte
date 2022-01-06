<div class="table">
	<div>
		<div class="table-headers">
			<p>Stacking Cycle</p>
			<p>MIA Stacked</p>
			<p>STX to Claim</p>
			<p>MIA to Return</p>
			<p>Claim Rewards</p>
		</div>

		<div class="table-data">
			<p>Cycle 1</p>
			<p>50,000,000</p>
			<p>1</p>
			<p>0</p>
			<p><button>Claim Now</button></p>
		</div>
		<div class="table-data">
			<p>Cycle 1</p>
			<p>50,000,000</p>
			<p>1</p>
			<p>0</p>
			<p>Claimable at Block 79000323</p>
		</div>
		<div class="table-data">
			<p>Cycle 1</p>
			<p>50,000,000</p>
			<p>1</p>
			<p>0</p>
			<p>Claim</p>
		</div>
		<div class="table-data">
			<p>Cycle 1</p>
			<p>50,000,000</p>
			<p>1</p>
			<p>0</p>
			<p>Claim</p>
		</div>
		<div class="table-data">
			<p>Cycle 1</p>
			<p>50,000,000</p>
			<p>1</p>
			<p>0</p>
			<p>Claim</p>
		</div>
	</div>
</div>

<style>
	.table {
		max-width: 1000px;
		min-width: 800px;
		margin: auto;
		border: solid 1px rgba(255, 255, 255, 0.2);
		border-radius: 10px;
	}

	.table div div:last-child {
		border-bottom: none;
	}

	.table-headers {
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}

	button {
		background-color: #384cff;
		min-width: 80px;
		height: 30px;
	}

	.table-headers p {
		border-right: 1px solid rgba(255, 255, 255, 0.2);
		height: 57px;
		width: 100%;
		display: flex;
		align-items: center;
		padding-left: 30px;
	}

	.table-headers p:last-child {
		border-right: none;
	}

	.table-data {
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		justify-content: center;
	}

	.table-data p {
		border-right: 1px solid rgba(255, 255, 255, 0.2);
		height: 57px;
		width: 100%;
		display: flex;
		align-items: center;
		padding-left: 30px;
		text-align: left;
	}

	.table-data p:last-child {
		border-right: none;
	}

	@media (max-width: 870px) {
		.table {
			display: none;
		}
	}
</style>
