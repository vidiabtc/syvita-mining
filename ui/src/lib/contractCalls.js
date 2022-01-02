import { IS_MAINNET } from '$lib/constants.js';
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
import { listCV, uintCV, standardPrincipalCV } from 'micro-stacks/clarity';
import { user, city } from '$lib/stores.js';
import { get } from 'svelte/store';

import { StacksTestnet, StacksMainnet } from 'micro-stacks/network';

const NETWORK = IS_MAINNET ? new StacksMainnet() : new StacksTestnet();

export const authOptions = {
	appDetails: {
		name: 'Syvita Mining',
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

export const callContract = async (functionName, functionArgs, postConditions) => {
	let stxAddress = IS_MAINNET
		? JSON.parse(get(user)).addresses.mainnet
		: JSON.parse(get(user)).addresses.testnet;
	let privateKey = JSON.parse(get(user)).appPrivateKey;

	let coin = get(city);

	console.log(functionArgs);

	const token = await makeContractCallToken({
		appDetails: { name: 'Syvita Mining', icon: '/' },
		privateKey: privateKey,
		contractAddress: coin.contractAddress,
		contractName: coin.contractName,
		functionName: functionName,
		functionArgs: functionArgs,
		network: NETWORK,
		stxAddress: stxAddress,
		AnchorMode: AnchorMode.Any,
		postConditionMode: PostConditionMode.Deny,
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

export const mineMany = async (numOfBlocks, stxPerBlock) => {
	let stxAddress = IS_MAINNET
		? JSON.parse(get(user)).addresses.mainnet
		: JSON.parse(get(user)).addresses.testnet;
	let mineManyAmounts = [];
	for (let i = 1; i <= numOfBlocks; i++) {
		mineManyAmounts.push(uintCV(stxPerBlock));
	}
	console.log(mineManyAmounts);
	let total = numOfBlocks * stxPerBlock;

	await callContract(
		'mine-many',
		[listCV(mineManyAmounts)],
		[makeStandardSTXPostCondition(stxAddress, FungibleConditionCode.Equal, uintCV(total).value)]
	);
};

// 'get-mining-stats-at-block'
// 'get-block-winner-id'
// 'get-user'
// 'get-coinbase-amount'

export const getMiningStatsAtBlock = async () => {};
