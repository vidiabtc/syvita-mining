<script>
	export let city;
</script>

<div class="activity-wrapper">
	<p>Activity <img src="/icons/notifications.svg" alt="" /></p>
	<div class="activity-box">
		<div>
			<p>Pool 3 wins another block - #4351222</p>
			<p class="winnings"><img src="/icons/trophy.svg" alt="" /> Winnings:</p>
			<p class="padding">159 Total blocks won | 39750000 Total NYCC won | at 0.0079 STX/NYCC</p>
			<p>100 STX contribution to the pool wins 8366.29 after fees</p>
		</div>
		<div>
			<p><img src="/icons/blocks.svg" />Block Counts:</p>

			<p>159 Won + 1172 Lost + 130 Pending = 1461 Total Mined</p>
		</div>
		<div>
			<p><img src="/icons/hammer.svg" />Bidding:</p>

			<p class="padding">
				Total : 313840.0 STX spent | 142276.0 STX remaining | 235.8 STX Average bid
			</p>
			<p>In this block : 200.00 STX bid in 1567.52 STX | Win Probability 12.76%</p>
		</div>
	</div>
</div>

<style>
	.activity-wrapper {
		width: 1170px;
		margin: auto;
		margin-top: 50px;
		font-size: 36px;
	}

	.activity-wrapper p:first-child {
		padding-bottom: 20px;
	}

	.activity-box {
		height: 368px;
		border-radius: 10px;
		border: 1px solid #273296;
		margin-bottom: 50px;
		display: flex;
		flex-direction: column;
		font-size: 1rem;
	}

	.activity-box div {
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid #273296;
		justify-content: center;
		padding-left: 20px;
	}

	.winnings {
		padding-bottom: 10px;
		display: flex;
		gap: 10px;
	}

	.activity-box div:not(first-child) p:first-child {
		padding-bottom: 10px;
		display: flex;
		gap: 10px;
	}

	.activity-box div:first-child {
		height: 152px;
	}

	.activity-box div:nth-child(2) {
		height: 96px;
	}

	.activity-box div:nth-child(3) {
		border-bottom: none;
		height: 120px;
	}

	.padding {
		padding-bottom: 10px;
	}
</style>
