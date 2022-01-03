import { BASE_URL, CYCLE_LENGTH } from './constants.js';
import { getReadOnlyTxOptions } from './contractCalls.js';
import { callReadOnlyFunction } from 'micro-stacks/transactions';

import { uintCV } from 'micro-stacks/clarity';

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
	let url = `${BASE_URL}/block`;
	let res = await fetch(url);
	let data = await res.json();
	let block = data.total;
	console.log('Block height: ', block);
	return block;
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

export const getStackingStatsAtCycle = async (city, cycle) => {
	const options = getReadOnlyTxOptions(city, 'get-stacking-stats-at-cycle', [uintCV(cycle)]);
	let res = await callReadOnlyFunction(options);

	console.log('RESPONSE: ', res);
};

export const getCurrentCycle = async (city) => {
	let currentBlock = await getBlockHeight();
	let currentCycle = Math.floor(
		(parseInt(currentBlock) - parseInt(city.activationBlock)) / CYCLE_LENGTH
	);
	return currentCycle;
};
