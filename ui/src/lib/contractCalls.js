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
	makeStandardFungiblePostCondition,
	makeContractSTXPostCondition,
	makeContractFungiblePostCondition,
	FungibleConditionCode,
	createAssetInfo
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
		contractAddress: city.contractAddress,
		contractName: city.contractName,
		functionName: functionName,
		functionArgs: functionArgs,
		network: NETWORK,
		senderAddress: city.contractAddress
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
		postConditionMode:
			functionName == 'claim-mining-reward' ? PostConditionMode.Allow : PostConditionMode.Deny,
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

export const stack = async (amountToStack, numOfCycles) => {
	let stxAddress = IS_MAINNET
		? JSON.parse(get(user)).addresses.mainnet
		: JSON.parse(get(user)).addresses.testnet;

	let coin = get(city);

	await callContract(
		'stack-tokens',
		[uintCV(amountToStack), uintCV(numOfCycles)],
		[
			makeStandardFungiblePostCondition(
				stxAddress,
				FungibleConditionCode.Equal,
				uintCV(amountToStack).value,
				createAssetInfo(coin.contractAddress, coin.tokenContractName, coin.tokenName)
			)
		]
	);
};

export const claimStackingReward = async (cycleNumber, cycleInfo, amountStacked, toReturn) => {
	let stxAddress = IS_MAINNET
		? JSON.parse(get(user)).addresses.mainnet
		: JSON.parse(get(user)).addresses.testnet;

	let coin = get(city);

	let claimableStx =
		((amountStacked / cycleInfo[coin.coin]) * cycleInfo.stx).toFixed(7).slice(0, -1) * 1000000;
	console.log('CLAIMABLE STX: ', claimableStx);

	await callContract(
		'claim-stacking-reward',
		[uintCV(cycleNumber)],
		[
			makeContractSTXPostCondition(
				coin.contractAddress,
				coin.contractName,
				FungibleConditionCode.LessEqual,
				uintCV(claimableStx).value
			),
			makeContractFungiblePostCondition(
				coin.contractAddress,
				coin.contractName,
				FungibleConditionCode.LessEqual,
				uintCV(toReturn).value,
				createAssetInfo(coin.contractAddress, coin.tokenContractName, coin.tokenName)
			)
		]
	);
};

export const claimMiningReward = async (blockHeight) => {
	await callContract('claim-mining-reward', [uintCV(blockHeight)], []);
	return true;
};

export const claimAllRewardsForPool = async (city, poolId) => {
	await callPoolContract(city, 'contributor-claim-all-rewards-for-pool', [uintCV(poolId)], []);
};

export const contribute = async (city, poolId, amount) => {
	let stxAddress = IS_MAINNET
		? JSON.parse(get(user)).addresses.mainnet
		: JSON.parse(get(user)).addresses.testnet;

	await callPoolContract(
		city,
		'contribute',
		[uintCV(poolId), uintCV(amount)],
		[makeStandardSTXPostCondition(stxAddress, FungibleConditionCode.Equal, uintCV(amount).value)]
	);
};

const callPoolContract = async (city, functionName, functionArgs, postConditions) => {
	let stxAddress = IS_MAINNET
		? JSON.parse(get(user)).addresses.mainnet
		: JSON.parse(get(user)).addresses.testnet;
	let privateKey = JSON.parse(get(user)).appPrivateKey;

	const token = await makeContractCallToken({
		appDetails: { name: 'syvita mining', icon: '/' },
		privateKey: privateKey,
		contractAddress: city.poolContractAddress,
		contractName: city.poolContractName,
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

export const addFunds = async (city, amount) => {
	let stxAddress = IS_MAINNET
		? JSON.parse(get(user)).addresses.mainnet
		: JSON.parse(get(user)).addresses.testnet;
	let privateKey = JSON.parse(get(user)).appPrivateKey;

	console.log('adding funds');

	let token = await makeStxTransferToken({
		recipient: 'SP78Q12M26WVN1V9DPQ29HVDTWPKQH6KVR1X0VEW',
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
