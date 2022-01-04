import { BASE_URL, API_URL, CYCLE_LENGTH } from './constants.js';
import { getReadOnlyTxOptions } from './contractCalls.js';
import { callReadOnlyFunction } from 'micro-stacks/transactions';

import { standardPrincipalCV, uintCV } from 'micro-stacks/clarity';

export const getStxBalance = async (stxAddress) => {
	let url = `${BASE_URL}/address/${stxAddress}/balances`;
	console.log(url);
	let res = await fetch(url);
	let data = await res.json();
	let balance = Math.floor(data.stx.balance / 1000000);
	console.log(`STX balance for ${stxAddress}: `, balance);
	return balance;
};

export const getBlockHeight = async () => {
	let url = `${API_URL}/blockheight`;
	console.log(url);
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
	const options = getReadOnlyTxOptions(city, 'get-user-id', [standardPrincipalCV(stxAddress)]);
	let res = await callReadOnlyFunction(options);
	let userId = parseInt(res.value.value);
	console.log('user id', userId);
	return userId;
};

export const getStackingReward = async (city, userId, cycle) => {
	const options = getReadOnlyTxOptions(city, 'get-stacking-reward', [
		uintCV(userId),
		uintCV(cycle)
	]);
	let res = await callReadOnlyFunction(options);
	// let userId = parseInt(res.value.value);
	console.log('stacking reward', res);
	return userId;
};

// get-user-id
// get-stacking-reward
