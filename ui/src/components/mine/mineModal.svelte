<script>
	import { mineMany } from '$lib/contractCalls.js';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	import {  city } from '$lib/stores.js';

	export let numOfBlocks;
	export let stxPerBlock;
</script>

<div class="modal-bg">
	<div class="modal">
		<slot name="modal">
			<div>
				<img on:click={() => dispatch('close')} src="/icons/close.svg" alt="" />
				<div class="warning">
					<p>
						Are you sure you want to mine individually? Pooled mining reduces the likelihood of
						winning zero blocks. Once STX are spent to bid on blocks, they are gone forever.
					</p>
				</div>
				<div class="buttons">
					<a href={`/pool/${$city.coin}`}> <button> Join Pool</button></a>
					<button
						class="confirm-terms"
						on:click={() => mineMany(numOfBlocks, stxPerBlock * 1000000)}>Mine</button
					>
				</div>
			</div>
		</slot>
	</div>
</div>

<style>
	.modal-bg {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.8);
		z-index: 2;
	}

	.modal {
		color: white;
		background-color: #050810;
		border: 1px solid white;
		padding: 20px;
		border-radius: 15px;
		position: relative;
		margin: auto;
		margin-top: 50px;
		top: 100px;
		left: 0;
		right: 0;
		bottom: 0;
		width: 350px;
		height: 350px;
		font-size: 1.25rem;
	}

	.warning {
		padding-top: 40px;
		text-align: left;
	}

	.buttons {
		padding-top: 60px;
		display: flex;
		gap: 10px;
		justify-content: center;
	}

	button {
		background-color: #384cff;
		height: 50px;
		width: 150px;
	}

	button:hover {
		background-color: rgba(56, 76, 255, 0.9);
		cursor: pointer;
	}

	button:active {
		background-color: rgba(56, 76, 255, 0.8);
	}

	img {
		position: absolute;
		top: 3px;
		right: 5px;
		cursor: pointer;
		filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(192deg) brightness(103%) contrast(103%);
	}

	@media (max-width: 768px) {
		.modal {
			max-width: 82%;
			height: 375px;
		}
	}

	@media (max-width: 445px) {
		button {
			width: 130px;
		}
	}

	@media (max-width: 400px) {
		button {
			width: 115px;
		}
	}
</style>
