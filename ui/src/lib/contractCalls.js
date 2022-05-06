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
import { listCV, uintCV, standardPrincipalCV, noneCV } from 'micro-stacks/clarity';
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
			functionName == 'claim-mining-reward' || functionName == 'claim-stacking-reward'
				? PostConditionMode.Allow
				: PostConditionMode.Deny,
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

	let claimableStx = Math.round(
		parseFloat(
			((amountStacked / cycleInfo[coin.coin]) * cycleInfo.stx).toFixed(7).slice(0, -1) * 1000000
		)
	);
	console.log('CLAIMABLE STX: ', claimableStx);

	await callContract('claim-stacking-reward', [uintCV(cycleNumber)], []);
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

export const adminMineMany = async (city, poolId, amounts) => {
	console.log(poolId);
	console.log(amounts);
	await callPoolContract(city, 'contract-mine-many', [uintCV(poolId), listCV(amounts)], []);
};

export const adminEnableClaiming = async (city, mineManyId) => {
	await callPoolContract(city, 'contract-enable-contributor-claiming', [uintCV(mineManyId)], []);
};

export const adminStartNextPool = async (city, contributionsStartBlock, fee, minContribution) => {
	console.log('fee', fee);
	console.log('min contribution', minContribution);
	console.log('contributionsStartBlock ', contributionsStartBlock);
	await callPoolContract(
		city,
		'start-next-pool',
		[uintCV(contributionsStartBlock), uintCV(fee), uintCV(minContribution * 1000000)],
		[]
	);
};

export const adminSetEndBlock = async (city, poolId, contributionsEndBlock) => {
	await callPoolContract(
		city,
		'set-end-block',
		[uintCV(poolId), uintCV(contributionsEndBlock)],
		[]
	);
};

export const adminAddAdminAddress = async (city, address) => {
	await callPoolContract(city, 'add-admin-address', [standardPrincipalCV(address)], []);
};

export const adminRemoveAdminAddress = async (city, address) => {
	await callPoolContract(city, 'remove-admin-address', [standardPrincipalCV(address)], []);
};

export const adminUpdateFeeAddress = async (city, address) => {
	await callPoolContract(city, 'update-fee-address', [standardPrincipalCV(address)], []);
};

export const adminClaimSingle = async (city, mineManyId, block) => {
	await callPoolContract(city, 'contract-claim-single', [uintCV(mineManyId), uintCV(block)], []);
};

export const adminClaimMany = async (city, mineManyId, blocks) => {
	console.log('CLAIMG MANY');
	console.log(mineManyId);
	// console.log(JSON.stringify(blocks))
	await callPoolContract(city, 'contract-claim-many', [uintCV(mineManyId), listCV(blocks)], []);
};

export const registerUser = async (city) => {
	let stxAddress = IS_MAINNET
		? JSON.parse(get(user)).addresses.mainnet
		: JSON.parse(get(user)).addresses.testnet;
	let privateKey = JSON.parse(get(user)).appPrivateKey;

	const token = await makeContractCallToken({
		appDetails: { name: 'syvita mining', icon: '/' },
		privateKey: privateKey,
		contractAddress: city.contractAddress,
		contractName: city.contractName,
		functionName: 'register-user',
		functionArgs: [noneCV()],
		network: NETWORK,
		stxAddress: stxAddress,
		AnchorMode: AnchorMode.Any
	});

	return openTransactionPopup({
		token,
		onFinish: (result) => {},
		onCancel: () => {}
	});
};

export const convertToV2 = async (city, amountV1) => {
	console.log('amount v1: ', amountV1);
	amountV1 = parseInt(amountV1);
	let stxAddress = IS_MAINNET
		? JSON.parse(get(user)).addresses.mainnet
		: JSON.parse(get(user)).addresses.testnet;
	await callConvertToV2(
		city,
		'convert-to-v2',
		[],
		[
			makeStandardFungiblePostCondition(
				stxAddress,
				FungibleConditionCode.Equal,
				uintCV(amountV1).value,
				createAssetInfo(city.v1Address, city.v1TokenContractName, city.tokenName)
			)
			// makeContractFungiblePostCondition(
			// 	city.contractAddress,
			// 	city.tokenContractName,
			// 	FungibleConditionCode.Equal,
			// 	uintCV(amountV1 * 1000000).value,
			// 	createAssetInfo(city.contractAddress, city.tokenContractName, city.tokenName)
			// )
		]
	);
};

export const burn = async (city) => {
	let stxAddress = IS_MAINNET
		? JSON.parse(get(user)).addresses.mainnet
		: JSON.parse(get(user)).addresses.testnet;
	await callBurn(
		city,
		'burn',
		[uintCV(1), standardPrincipalCV(stxAddress)],
		[
			makeStandardFungiblePostCondition(
				stxAddress,
				FungibleConditionCode.Equal,
				uintCV(1).value,
				createAssetInfo(city.contractAddress, city.v1TokenContractName, city.tokenName)
			)
			// makeContractFungiblePostCondition(
			// 	city.contractAddress,
			// 	city.contractName,
			// 	FungibleConditionCode.Equal,
			// 	uintCV(amountV1 * 1000000).value,
			// 	createAssetInfo(city.contractAddress, city.tokenContractName, city.tokenName)
			// )
		]
	);
};

const callBurn = async (city, functionName, functionArgs, postConditions) => {
	let stxAddress = IS_MAINNET
		? JSON.parse(get(user)).addresses.mainnet
		: JSON.parse(get(user)).addresses.testnet;
	let privateKey = JSON.parse(get(user)).appPrivateKey;
	console.log('upgrading token ', city.name);

	const token = await makeContractCallToken({
		appDetails: { name: 'syvita mining', icon: '/' },
		privateKey: privateKey,
		contractAddress: 'SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27',
		contractName: city.v1TokenContractName,
		functionName: functionName,
		functionArgs: functionArgs,
		network: NETWORK,
		stxAddress: stxAddress,
		AnchorMode: AnchorMode.Any
		// postConditionMode: PostConditionMode.Deny,
		// postConditions: postConditions
	});

	return openTransactionPopup({
		token,
		onFinish: (result) => {},
		onCancel: () => {}
	});
};

const callConvertToV2 = async (city, functionName, functionArgs, postConditions) => {
	let stxAddress = IS_MAINNET
		? JSON.parse(get(user)).addresses.mainnet
		: JSON.parse(get(user)).addresses.testnet;
	let privateKey = JSON.parse(get(user)).appPrivateKey;
	console.log('upgrading token ', city.name);

	const token = await makeContractCallToken({
		appDetails: { name: 'syvita mining', icon: '/' },
		privateKey: privateKey,
		contractAddress: city.contractAddress,
		contractName: city.tokenContractName,
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
