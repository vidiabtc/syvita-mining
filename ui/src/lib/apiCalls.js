import { BASE_URL } from './constants';

export const getCityWalletBalance = async (city) => {
	let address = city.cityWalletAddress;
	let url = `${BASE_URL}/address/${address}/balances`;
	let res = await fetch(url);
	let data = await res.json();
	let balance = Math.floor(data.stx.balance / 1000000);
	console.log('City balance: ', balance);
	return balance;
};
