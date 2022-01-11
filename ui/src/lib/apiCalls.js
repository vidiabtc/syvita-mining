import { BASE_URL, API_URL, CYCLE_LENGTH, POOL_API_URL } from './constants.js';
import { getReadOnlyTxOptions, claimMiningReward } from './contractCalls.js';
import { callReadOnlyFunction } from 'micro-stacks/transactions';

import { cvToHex, hexToCV, hexToValue, standardPrincipalCV, uintCV } from 'micro-stacks/clarity';
import { hexStringToInt, hexToBigInt, intToHex } from 'micro-stacks/common';

export const getStxBalance = async (stxAddress) => {
	let url = `${BASE_URL}/address/${stxAddress}/balances`;
	console.log(url);
	let res = await fetch(url);
	let data = await res.json();
	let balance = Math.floor(data.stx.balance / 1000000);
	console.log(`STX balance for ${stxAddress}: `, balance);
	return balance;
};

export const getBlockHeight = async (city) => {
	let url = `${API_URL}/blockheight`;
	let res = await fetch(url);
	let block = await res.json();
	console.log('Block height: ', block);
	return parseInt(block);
};

export const getCoinBalance = async (city, stxAddress) => {
	let token = city.token;
	let url = `${BASE_URL}/address/${stxAddress}/balances`;
	let res = await fetch(url);
	let data = await res.json();
	let balance = parseInt(data.fungible_tokens[token].balance);
	console.log(`${city.coin.toUpperCase()} balance: `, balance);
	return balance;
};

export const getStackingCycleStats = async (city) => {
	let url = `${API_URL}/${city.coin}/cycles`;
	let res = await fetch(url);
	let cycles = await res.json();
	console.log(`Stacking Cycle Stats for ${city.name}: `, cycles);
	return cycles;
};

export const getCurrentCycle = async (city) => {
	let currentBlock = await getBlockHeight();
	let currentCycle = Math.floor(
		(parseInt(currentBlock) - parseInt(city.activationBlock)) / CYCLE_LENGTH
	);
	return currentCycle;
};

export const getUserId = async (city, stxAddress) => {
	let url = `https://mainnet.syvita.org/v2/contracts/call-read/${city.contractAddress}/${city.contractName}/get-user-id`;

	let res = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			sender: 'SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27',
			arguments: [cvToHex(standardPrincipalCV(stxAddress))]
		})
	});
	let data = await res.json();
	let userId = data.result.substring(4);
	userId = hexToValue(userId);

	console.log('User Id: ', userId);

	return parseInt(userId);
};

export const getLatestPoolId = async (city) => {
	let url = `${POOL_API_URL}/${city.coin}/latestpoolid`
	let res = await fetch(url);
	let id = 0;

	try {
		id = await res.json();
	} catch (error) {
		console.log('pool not found')
	}
	return id
}

export const getPool = async (city, poolId) => {
	console.log(city)
	console.log(poolId)
	let url = `${POOL_API_URL}/${city.coin}/pool/${poolId}`
	console.log('URL: ', url)
	let res = await fetch(url);
	let pool = await res.json()
	return pool
}


export const getStackingReward = async (city, userId, cycle) => {
	let cycleNum = cycle;
	let url = `https://mainnet.syvita.org/v2/contracts/call-read/${city.contractAddress}/${city.contractName}/get-stacker-at-cycle`;

	userId = '010000000000000000' + intToHex(userId);
	cycle = '010000000000000000' + intToHex(cycle);

	let res = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			sender: 'SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27',
			arguments: [cycle, userId]
		})
	});
	let data = await res.json();
	data = hexToCV(data.result);
	console.log('data', data);
	if (data.type == 9) {
		console.log("didn't stack this cycle");
		data = {
			amountStacked: 0,
			toReturn: 0
		};

		return data;
	} else {
		data = data.value.data;
		// console.log('data2:', data);
		data = {
			amountStacked: parseInt(data.amountStacked.value),
			toReturn: parseInt(data.toReturn.value)
		};
		console.log(`Stacking data for ${city.coin} cycle ${cycleNum}`, data);
	}

	return data;
};

export const getMineManyClaims = async (city, poolId, stxAddress, pool) => {
	console.log(poolId)
	let url = `https://mainnet.syvita.org/v2/contracts/call-read/${city.poolContractAddress}/${city.poolContractName}/get-claims-for-pool`;
	console.log(url)
	// console.log(poolId)
	// console.log(stxAddress)
	stxAddress = cvToHex(standardPrincipalCV(stxAddress))
	poolId = '010000000000000000' + intToHex(poolId);

	let res = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			sender: 'SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27',
			arguments: [poolId, stxAddress]
		})
	});
	let data = await res.json();
	console.log('CLAIMS FOR POOL', data);
	data = hexToCV(data.result) 

	if (data.type == 8) {
		console.log('Participant not in pool')
		return []
	} else {
		console.log('Claims found')
		data = data.value.data.mineManysClaimed.list;
		console.log('CLAIMS FOR POOL PARSED', data);
	}

	let claimedMineManys = []

	for (let num in data) {
		claimedMineManys.push(parseInt(data[num].value))
	}
	console.log(claimedMineManys)

	let claimingEnabledMineManys = []

	for (let id in pool.mineManys) {
		let mineMany = pool.mineManys[id];
		console.log('claiming enabled', mineMany.claimingEnabled);
		if (mineMany.claimingEnabled) {
			claimingEnabledMineManys.push(parseInt(id));
		}
	}

	console.log('Claiming enabled mine manys: ', claimingEnabledMineManys)

	// let claimableMineManys = []
	// claimingEnabledMineManys.map((id) => {
	// 	if (!claimedMineManys.includes(id)) {
	// 		claimableMineManys.push(id);
	// 	}
	// });
	// console.log('CLAIMABLE MINE ANYS: ', claimableMineManys)

	let mineManys = {}

	claimingEnabledMineManys.map((mineManyId) => {
		let claimable =  claimedMineManys.includes(mineManyId) ? false : true
		let mineMany = pool.mineManys[mineManyId];
		let coinsWon = parseInt(mineMany.coinsWon);
		let fee = parseInt(pool.stats.feePercentage) / 100;
		let poolContribution = parseInt(pool.stats.totalContributed) / 1000000;
		let userContribution = parseInt(getContributionSum(pool.contributions[stxAddress]))
		console.log('coinsWon: ', coinsWon)
		console.log('pool fee: ', fee)
		console.log('user contribution ', userContribution)
		console.log('pool contribution ', poolContribution)
		

		let claimAmount = Math.floor((userContribution / poolContribution) * (coinsWon * (1 - fee)))

		console.log('amount to claim ', claimAmount)

		mineManys[mineManyId] = {
			claimable: claimable,
			claimAmount: claimAmount
		}

	})

	console.log('Mine Manys to claim:', mineManys)

	return mineManys
}


export const canClaimMiningReward = async (city, stxAddress, blockHeight) => {
	let url = `https://mainnet.syvita.org/v2/contracts/call-read/${city.contractAddress}/${city.contractName}/can-claim-mining-reward`;
	let block = blockHeight;

	stxAddress = cvToHex(standardPrincipalCV(stxAddress))
	blockHeight = '010000000000000000' + intToHex(blockHeight);

	let res = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			sender: 'SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27',
			arguments: [stxAddress, blockHeight]
		})
	});
	let data = await res.json();
	data = hexToCV(data.result).type;
	console.log('CAN CLAIM MINING', data);
	return data == 3 ? claimMiningReward(block) : false
};

export const getContributionSum = (contributions) => {
	let sum = 0
	for (let contribution in contributions) {
		sum = sum + (parseInt(contributions[contribution]) / 1000000)
	}
	return sum
}

export const getUserContributions = (stxAddress, pool) => {
	let contributions = []
	let userContributions = pool.contributions[stxAddress];
	for (let contribution in pool.contributions[stxAddress]) {
		contributions.push({
			txId: contribution,
			amount: pool.contributions[stxAddress][contribution] / 1000000
		});
		console.log(contributions);
	}
return contributions
}