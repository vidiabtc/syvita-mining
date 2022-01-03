<script>
	import { getStackingStatsAtCycle } from '$lib/apiCalls';
	import { city } from '$lib/stores.js';

	export let currentCycle;

	const getCycleInfo = async () => {
		const cycles = [];
		for (let i = 1; i <= currentCycle; i++) {
			await getStackingStatsAtCycle($city, i);
			cycles.push(i);
		}
		return cycles;
	};

	let promise = getCycleInfo();
</script>

<div class="stacking-blocks-wrapper">
	{#await promise}
		<h1>loading ...</h1>
	{:then cycles}
		<!-- promise was fulfilled -->
		{#each cycles as cycle}
			<div class="stacking-block-winner">
				<div>
					<p>{cycle}</p>
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
					<p>4,918</p>
					<p>STX to Stackers</p>
				</div>
				<div>
					<p>0.00%</p>
					<p>Percent Complete</p>
				</div>
			</div>
		{/each}
	{/await}
</div>

<style>
	.stacking-blocks-wrapper {
		width: 1200px;
		height: 492px;
		margin: auto;
		overflow: auto;
		overflow-x: hidden;
	}

	.stacking-blocks-wrapper div:first-of-type {
		margin-top: 0px;
	}

	.stacking-block {
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

	.stacking-block-winner {
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

	.stacking-block-winner div {
		text-align: center;
	}

	.stacking-block div {
		text-align: center;
	}

	.stacking-block div p:first-child {
		padding-bottom: 10px;
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
