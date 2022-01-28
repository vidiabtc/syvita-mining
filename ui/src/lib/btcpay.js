import { goto } from "$app/navigation"

import { BTC_API_URL } from "./constants.js"
let headers = { 'Content-Type': 'application/json', 'Authorization': `token ${import.meta.env.VITE_BTCPAYSERVER_API_KEY}` }



export const getStore = async (storeId) => {
  let url = `${BTC_API_URL}/stores/${storeId}`
  console.log('HEADERS ', headers)
  let res = await fetch(url, {
    method: 'GET',
    headers: headers,
  });
  let data = await res.json();
  console.log('STORE: ', data)
}

export const getInvoices = async (storeId) => {
  let url = `${BTC_API_URL}/stores/${storeId}/invoices`
  console.log('HEADERS ', headers)
  let res = await fetch(url, {
    method: 'GET',
    headers: headers,
  });
  let data = await res.json();
  console.log('Invoices: ', data)
}

export const createInvoice = async (storeId, stxAddress, btcContribute, poolId) => {
  let url = `${BTC_API_URL}/stores/${storeId}/invoices`
  console.log('HEADERS ', headers)
  let res = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      metadata: {'stxAddress': stxAddress,
    'poolId': poolId, 'orderId': `pool-${poolId}-${stxAddress}`},
    'orderId': JSON.stringify(`pool${poolId}/${stxAddress}`),
      amount: btcContribute,
      checkout: {
        'redirectURL': 'https://syvitamining.com/pool/stx',
       
      }
     
    })
  });
  console.log('Invoice created')
  let data = await res.json();
  console.log('created: ', data)
  let checkoutLink = data.checkoutLink
  console.log(checkoutLink)
  goto(checkoutLink)
}


export const getWalletBalance = async (storeId) => {
  let url =  `${BTC_API_URL}/stores/${storeId}/payment-methods/OnChain/BTC/wallet`
  let res = await fetch(url, {
    method: 'GET',
    headers: headers
  })
  let data = await res.json()
  let balance = data.confirmedBalance
  console.log('wallet balance: ', balance)
  return balance;
}
