import { goto } from "$app/navigation"
import { BTC_API_URL } from "./constants.js"

let headers = { 'Content-Type': 'application/json', 'Authorization': `token 798750388e2b374185933730575ed3c2e3b6ca2b` }



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
    'poolId': poolId},
    'orderId': JSON.stringify(`pool${poolId}/${stxAddress}`),
      amount: btcContribute,
      checkout: {
        redirectAutomatically: 'true',
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