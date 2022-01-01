import { authenticate } from 'micro-stacks/connect';
import { user } from '$lib/stores.js';

const authOptions = {
	appDetails: {
		name: 'Syvita Mining',
		icon: '/'
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
