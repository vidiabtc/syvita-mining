import { authenticate } from 'micro-stacks/connect';
import { user } from '$lib/stores.js';
import { get } from 'svelte/store';
import { IS_MAINNET } from './constants.js';

const authOptions = {
	appDetails: {
		name: 'Syvita Mining',
		icon: 'https://syvitamining.com/syvitamining.jpg'
	}
};

export const signIn = async () => {
	await authenticate({
		...authOptions,
		onFinish: (payload) => {
			user.update(() => JSON.stringify(payload));
		}
	});
};

export const signOut = async () => {
	await user.update(() => 'null');
};

export const getStxAddress = () => {
	let stxAddress = null;
	try {
		stxAddress = IS_MAINNET
			? JSON.parse(get(user)).addresses.mainnet
			: JSON.parse(get(user)).addresses.testnet;
		console.log('user stx address:', stxAddress);
	} catch {
		console.log('Not signed in');
	}
	return stxAddress;
};
