<script>
	import { signIn, signOut } from '$lib/auth.js';
	import { user } from '$lib/stores.js';
</script>

{#if $user == 'null'}
	<button on:click={() => signIn()} class="connect-wallet"
		><img src="/icons/stacks.svg" alt="stx icon" /> Connect</button
	>
{:else}
	<button on:click={() => signOut()} class="sign-out"
		><img src="/icons/signOut.svg" alt="Sign Out" /></button
	>
{/if}

<style>
	.connect-wallet {
		height: 40px;
		width: 185px;
		margin-left: 5px;
		border-radius: 10px;
		transition: 0.3s;
		cursor: pointer;
		color: white;
		background-color: rgba(0, 0, 0, 0);
		border: 1px solid white;
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 1.25rem;
		text-transform: uppercase;
		letter-spacing: 0.25rem;
	}
	.connect-wallet img {
		width: 22px;
		height: 22px;
		filter: invert(100%) sepia(0%) saturate(7467%) hue-rotate(183deg) brightness(98%) contrast(100%);
	}
	.connect-wallet:hover {
		background-color: rgba(0, 0, 0, 0.2);
	}
	.sign-out {
		background: transparent;
		box-shadow: 0px 0px 0px transparent;
		border: 0px solid transparent;
		text-shadow: 0px 0px 0px transparent;
		cursor: pointer;
		filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(336deg) brightness(102%)
			contrast(102%);
	}
	.sign-out:hover {
		filter: invert(0%) sepia(96%) saturate(3118%) hue-rotate(111deg) brightness(92%) contrast(99%)
			opacity(60%);
	}
	@media (max-width: 768px) {
		.connect-wallet {
			font-size: 2rem;
			width: 240px;
			height: 50px;
			margin-top: 20px;
		}
		.sign-out img {
			width: 40px;
			height: 40px;
			margin-top: 20px;
		}
	}
</style>
