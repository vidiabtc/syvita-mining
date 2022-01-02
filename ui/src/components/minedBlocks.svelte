<script>
	import { getPrevMinedBlocks } from '$lib/apiCalls.js';
	import { city } from '$lib/stores.js';

	let toggle = false;

	$: prevMinedBlocks = getPrevMinedBlocks($city);

	const totalStxCommitted = (miners) => {
		let totalStx = 0;
		for (let miner in miners) {
			totalStx += parseInt(miners[miner]);
		}
		console.log(totalStx);
		return totalStx / 1000000;
	};

	const reward = (blocks, block) => {
		let reward = blocks[block].reward;

		if (reward == undefined) {
			reward = blocks[Object.keys(blocks)[0]].reward;
		}
		return reward;
	};

	const winnerStatus = (block) => {
		let reward = block.reward;
		let winner = block.winner;

		if (reward == undefined) {
			return 'Pending';
		} else {
			if (winner == undefined) {
				return 'Unreleased';
			} else {
				return winner;
			}
		}
	};
</script>

<div class="mining-blocks-wrapper">
	{#await prevMinedBlocks}
		<p>Loading ...</p>
	{:then blocks}
		{#each Object.keys(blocks).reverse() as block}
			<!-- content here -->
			<div class="mining-block">
				<div>
					<p>{block}</p>
					<p>Block</p>
				</div>
				<div>
					<p>{totalStxCommitted(blocks[block].miners).toLocaleString()}</p>
					<p>Commited</p>
				</div>
				<div>
					<p>{Object.keys(blocks[block].miners).length}</p>
					<p>Miners</p>
				</div>
				<div>
					<p>
						{reward(blocks, block) / 1000}K
					</p>
					<p>Reward</p>
				</div>
				<div>
					<p class="block-status">{winnerStatus(blocks[block])}</p>
					<p class="winner-title">Winner</p>
				</div>
				<div>
					<img on:click={() => (toggle = !toggle)} src="/icons/arrow-down.svg" alt="" />
				</div>
			</div>
			{i}
			<div class="block-dropdown-wrapper">
				<div class="block-dropdown">
					<p>SP1FJ0MY8M18KZF43E85WJN48SDXYS1EC4BCQW02S</p>
					<p>115.00 STX</p>
					<p>22.00%</p>
				</div>
				<div class="block-dropdown-divider" />
				<div class="block-dropdown">
					<p>SP1FJ0MY8M18KZF43E85WJN48SDXYS1EC4BCQW02S</p>
					<p>115.00 STX</p>
					<p>22.00%</p>
				</div>
				<div class="block-dropdown-divider" />
				<div class="block-dropdown">
					<p>SP1FJ0MY8M18KZF43E85WJN48SDXYS1EC4BCQW02S</p>
					<p>115.00 STX</p>
					<p>22.00%</p>
				</div>
				<div class="block-dropdown-divider" />
				<div class="block-dropdown">
					<p>SP1FJ0MY8M18KZF43E85WJN48SDXYS1EC4BCQW02S</p>
					<p>115.00 STX</p>
					<p>22.00%</p>
				</div>
				<div class="block-dropdown-divider" />
			</div>
		{/each}
	{/await}
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

	.mining-block div {
		text-align: center;
	}

	.mining-block div p:first-child {
		padding-bottom: 10px;
	}

	.block-status {
		background: #f26c42;
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
