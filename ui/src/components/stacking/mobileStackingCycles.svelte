<script>
	import { getStackingCycleStats, getBlockHeight, getUserId } from '$lib/apiCalls';
	import { user, city } from '$lib/stores.js';
	import { getStxAddress } from '$lib/auth';

	$: stxAddress = getStxAddress($user);
	// $: userId = stxAddress ? getUserId($city, stxAddress) : null;
	// $: userId = 50;

	$: stackingCycleStats = getStackingCycleStats($city);
	$: blockHeight = getBlockHeight($city);

	// $: stackingReward = userId ? getStackingReward($city, userId, cycle) : null;
</script>

<!-- <button on:click={getStackingCycleStats($city)}>EE</button> -->
<div class="stacking-blocks-wrapper">
	{#await stackingCycleStats}
		<h1>loading ...</h1>
	{:then cycles}
		<!-- promise was fulfilled -->
		{#each Object.keys(cycles).reverse() as cycle}
			<!-- content here -->
			<div class="stacking-block-winner">
				<div>
					<p>{cycle}</p>
					<p>Cycle</p>
				</div>
				<div>
					<p>{cycles[cycle][$city.coin].toLocaleString()}</p>
					<p>{$city.coin} Stacked</p>
				</div>
				<div>
					<p>5</p>
					<p>STX/MIA</p>
				</div>
				<div>
					<p>{parseInt($city.activationBlock) + 2100 * parseInt(cycle)}</p>
					<p>Start Block</p>
				</div>
				<div>
					<p>{Math.floor(cycles[cycle].stx).toLocaleString()}</p>
					<p>STX to Stackers</p>
				</div>
				<div>
					{#if cycle == Object.keys(cycles)[Object.keys(cycles).length - 1]}
						<p>0.00%</p>
					{:else if cycle == Object.keys(cycles)[Object.keys(cycles).length - 2]}
						{#await blockHeight}
							<p>loading...</p>
							>
						{:then currentBlock}
							<p>
								{Math.round(
									((2100 -
										(parseInt($city.activationBlock) +
											2100 * (parseInt(cycle) + 1) -
											currentBlock)) /
										21) *
										100
								) / 100}%
							</p>
						{/await}
					{:else}
						<p>100.00%</p>
					{/if}
					<p>Percent Complete</p>
				</div>
			</div>
		{/each}
	{/await}
</div>

<div class="stacking-wrapper">
	<div class="stacking-box">
		<div class="box-info-top">
			<div>
				<p>9</p>
				<p>Cycle</p>
			</div>
			<div>
				<p>26,100,100,100</p>
				<p>MIA STACKED</p>
			</div>
			<div>
				<p>0</p>
				<p>STX/MIA</p>
			</div>
		</div>

		<div class="box-info-bottom">
			<div>
				<p>43396</p>
				<p>Starting Block</p>
			</div>
			<div>
				<p>10,000,000</p>
				<p>STX to Stackers</p>
			</div>
			<div>
				<p>0.00</p>
				<p>Percent</p>
			</div>
		</div>
	</div>
</div>

<style>
	.stacking-wrapper {
		max-width: 800px;
		min-width: 320px;
		margin: auto;
		margin-top: 10px;
		font-size: 0.9rem;
		height: 492px;
		overflow: auto;
		overflow-x: hidden;
	}

	.stacking-box {
		height: 158px;
		border: 1px solid blue;
		border-radius: 10px;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-around;
	}

	.box-info-top {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.box-info-top div {
		max-width: 200px;
		min-width: 100px;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: center;
	}

	.box-info-bottom {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.box-info-bottom div {
		max-width: 200px;
		min-width: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}

	.stacking-blocks-wrapper {
		max-width: 1200px;
		min-width: 800px;
		height: 492px;
		margin: auto;
		overflow: auto;
		overflow-x: hidden;
		padding-right: 10px;
	}

	.stacking-blocks-wrapper div:first-of-type {
		margin-top: 0px;
	}

	.stacking-block-winner {
		border: 2px solid #4dba5f;
		background: linear-gradient(180deg, rgba(77, 186, 95, 0.1) 0%, rgba(77, 186, 95, 0) 104.88%);
		max-width: 1180px;
		height: 82.3px;
		border-radius: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 43px;
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
