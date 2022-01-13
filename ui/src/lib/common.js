import { CITIES, IS_MAINNET } from '$lib/cities.js';
import {
	makeContractCallToken,
	openTransactionPopup,
	makeStxTransferToken
} from 'micro-stacks/connect';
import {
	AnchorMode,
	PostConditionMode,
	makeStandardSTXPostCondition,
	FungibleConditionCode
} from 'micro-stacks/transactions';
import { uintCV } from 'micro-stacks/clarity';
import { user } from '$lib/store';
import { get } from 'svelte/store';

import { StacksTestnet, StacksMainnet } from 'micro-stacks/network';

const NETWORK = IS_MAINNET ? new StacksMainnet() : new StacksTestnet();

export const authOptions = {
	appDetails: {
		name: 'CITY POOL',
		icon: '/'
	}
};

export const getReadOnlyTxOptions = (city, functionName, functionArgs) => {
	return {
		contractAddress: CITIES[city].contractAddress,
		contractName: CITIES[city].contractName,
		functionName: functionName,
		functionArgs: functionArgs,
		network: NETWORK,
		senderAddress: CITIES[city].contractAddress
	};
};

export const callPoolContract = async (city, functionName, functionArgs, postConditions) => {
	let stxAddress = IS_MAINNET
		? JSON.parse(get(user)).addresses.mainnet
		: JSON.parse(get(user)).addresses.testnet;
	let privateKey = JSON.parse(get(user)).appPrivateKey;

	console.log(functionArgs);

	const token = await makeContractCallToken({
		appDetails: { name: 'svelte', icon: '/' },
		privateKey: privateKey,
		contractAddress: CITIES[city].contractAddress,
		contractName: CITIES[city].contractName,
		functionName: functionName,
		functionArgs: functionArgs,
		network: NETWORK,
		stxAddress: stxAddress,
		AnchorMode: AnchorMode.Any,
		postConditionMode:
			functionName == 'contribute' ? PostConditionMode.Deny : PostConditionMode.Allow,
		postConditions: postConditions
	});

	return openTransactionPopup({
		token,
		onFinish: (result) => {},
		onCancel: () => {}
	});
};

export const parseClarityList = (list) => {
	list = list.list.map((element) => {
		return parseInt(element.value);
	});
	return list;
};

export const addFunds = async (coin, amount) => {
	let stxAddress = JSON.parse(get(user)).addresses.mainnet;
	let privateKey = JSON.parse(get(user)).appPrivateKey;
	let token;

	console.log('adding funds');

	token = await makeStxTransferToken({
		recipient: 'SP18XC4F27VQ8P2QGKZ5P6KR41GK77ZVFWV468P1',
		amount: amount * 1000000,
		memo: 'UI DISCLAIMER ACKNOWLEDGED',
		network: new StacksMainnet(),
		appDetails: {
			name: `NYC Pool`,
			icon: `citycoins/e.svg`
		},
		privateKey: privateKey,
		senderAddress: stxAddress,

		PostConditionMode: PostConditionMode.Deny,
		postConditions: [
			makeStandardSTXPostCondition(
				stxAddress,
				FungibleConditionCode.Equal,
				uintCV(amount * 1000000).value
			)
		],
		onFinish: (data) => {
			setTxId(data.txId);
		}
	});

	return openTransactionPopup({
		token,
		onFinish: (result) => {},
		onCancel: () => {}
	});
};