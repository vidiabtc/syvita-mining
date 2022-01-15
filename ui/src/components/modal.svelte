<script>
	import { addFunds } from '$lib/contractCalls.js';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let coin;
	export let contributeAmount;
</script>

<div class="modal-bg">
	<div class="modal">
		<slot name="modal">
			<div>
				<img on:click={() => dispatch('close')} src="/icons/close.svg" alt="" />
				<p class="modal-heading">I confirm that by contributing to the pool, I understand:</p>
				<div class="terms">
					<ul>
						<li>
							Participation does not guarantee that you will receive
							{coin.toUpperCase()}.
						</li>
						<li>
							Once STX are used to mine {coin.toUpperCase()} they are gone forever.
						</li>
						<li>
							By participating in this pool you acknowledge the there is a risk of complete loss of
							all funds sent to the pool.
						</li>
						<li>
							This pool engages in highly speculative behavior and there is substantial risk of
							loss.
						</li>
						<li>
							There is currently no liquid market for {coin.toUpperCase()} coin, so mining {coin.toUpperCase()}
							may mean you're stuck holding an illiquid asset until such time as it is listed on a liquid
							exchange.
						</li>

						<li>Past performance is not necessarily indicative of future performance.</li>
						<li>
							The pool will keep 4% of {coin.toUpperCase()} won to support further development of this
							site and for transaction fees.
						</li>
						<li>
							Because there is no liquid market for {coin.toUpperCase()} coin, we cannot know what its
							true value is or if it has any value at all.
						</li>
						<li>
							This service may not be suitable for all investors. If you have any doubts as to the
							merits of participating, you should seek advice from an independent financial advisor.
						</li>
					</ul>
				</div>

				<p class="confirm-terms">
					<input on:click={() => addFunds(coin, Math.floor(contributeAmount))} type="checkbox" />
					I attest that I have read through the CityCoins docs and understand how {coin.toUpperCase()}
					coin works.
				</p>
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

	.modal-heading {
		padding-top: 5px;
		padding-bottom: 15px;
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
		height: 425px;
		font-size: 1.25rem;
	}

	img {
		position: absolute;
		top: 3px;
		right: 5px;
		cursor: pointer;
		filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(192deg) brightness(103%) contrast(103%);
	}

	ul {
		margin-top: 0px;
		padding-left: 10px;
		margin-left: 12px;
	}

	li {
		padding-top: 10px;
	}

	.terms {
		overflow-y: scroll;
		height: 200px;
		font-size: 1.1rem;
		background: #050f07;
		border-radius: 15px;
		padding-right: 10px;
	}

	.confirm-terms {
		padding-top: 25px;
		font-size: 1.25rem;
		text-align: left;
    display: flex;
    align-items: center;
    margin-left: -40px;
	}

	@media (max-width: 768px) {
		.modal {
			max-width: 82%;
			height: 400px;
		}

		.terms {
			min-width: 95%;
		}
		.confirm-terms {
			font-size: 1rem;
		}
	}

	@media (max-width: 400px) {
		.modal {
			height: 450px;
		}
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
