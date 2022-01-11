<script>
	import { signIn, signOut } from '$lib/auth.js';
	import { user, t } from '$lib/stores.js';
</script>

{#if $user == 'null'}
	<button on:click={() => signIn()} class="connect-wallet"
		><img src="/icons/stx.svg" alt="Connect" />{$t.header.connect}</button
	>
{:else}
	<button on:click={() => signOut()} class="logout">{$t.header.logOut}</button>
{/if}

<style>
	button {
		border: none;
		font-size: 1.25rem;
		border-radius: 50px;
	}

	button:hover {
		cursor: pointer;
	}

	.connect-wallet {
		min-width: 154px;
		min-height: 50px;
		background-color: #384cff;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}

	.connect-wallet:hover {
	background-color: rgba(56, 76, 255, 0.9);	
	}

	.connect-wallet:active {
	background-color: rgba(56, 76, 255, 0.8);	
	}

	.logout {
		min-width: 103px;
		min-height: 50px;
		border: 1px solid #ffffff;
		background-color: transparent;
	}

	.logout:hover {
		color: black;
		background-color: white;
	}

	.logout:active {
		color: black;
		background-color: white;

	}


	@media (max-width: 1140px) {
		.connect-wallet {
			margin: auto;
			width: 200px;
		}

		.logout {
			width: 200px;
			margin: auto;
		}
	}
</style>
