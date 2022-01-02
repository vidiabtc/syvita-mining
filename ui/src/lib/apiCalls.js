import { BASE_URL } from './constants';

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
