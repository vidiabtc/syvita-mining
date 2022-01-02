import { API_ENDPOINT } from "./constants";


export const getCityWalletBalance = async (city) => {
  let address = city.cityWalletAddress
  let url = `${API_ENDPOINT}/address/${address}/balances`
  let res = await fetch(url);
  let data = await res.json();
  let balance = Math.floor(data.stx.balance / 1000000)
  console.log('City balance: ', balance)
  return balance
}