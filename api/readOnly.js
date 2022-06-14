import { BASE_URL, CYCLE_LENGTH, IS_MAINNET } from './constants.js'
import { callReadOnlyFunction } from 'micro-stacks/transactions'

import { uintCV } from 'micro-stacks/clarity'
import { StacksMainnet } from 'micro-stacks/network'
import { hashP2PKH, publicKeyToStxAddress } from 'micro-stacks/crypto'

const getReadOnlyTxOptions = (city, functionName, functionArgs) => {
  return {
    contractAddress: city.contractAddress,
    contractName: city.contractName,
    functionName: functionName,
    functionArgs: functionArgs,
    network: new StacksMainnet(),
    senderAddress: city.contractAddress,
  }
}

export const getStackingStatsAtCycle = async (city, cycle) => {
  console.log('cucle: ', cycle)
  const options = getReadOnlyTxOptions(city, 'get-stacking-stats-at-cycle', [
    uintCV(cycle),
  ])
  console.log('options', options)
  let res = await callReadOnlyFunction(options)
  console.log('res1', res)

  res = res.value.data
  console.log('res')

  return res
}

export const getLatestUserId = async city => {
  const options = getReadOnlyTxOptions(city, 'get-registered-users-nonce', [])
  let res = await callReadOnlyFunction(options)
  res = res.value
  return parseInt(res)
}

export const getUser = async (city, userId) => {
  const options = getReadOnlyTxOptions(city, 'get-user', [uintCV(userId)])
  let res = await callReadOnlyFunction(options)
  let address = res.value.address
  console.log(address)
  let stxAddress = publicKeyToStxAddress(address.hash160)
  return stxAddress
}
