import {
  callReadOnlyFunction,
  parseReadOnlyResponse,
} from 'micro-stacks/transactions'
import {
  uintCV,
  cvToTrueValue,
  standardPrincipalCV,
} from 'micro-stacks/clarity'
import { CITIES, IS_MAINNET } from './cities.js'
import { StacksTestnet, StacksMainnet } from 'micro-stacks/network'

const NETWORK = IS_MAINNET ? new StacksMainnet() : new StacksTestnet()

export const getLatestPoolId = async city => {
  const options = getReadOnlyTxOptions(city, 'get-latest-pool-id', [])
  let res = await callReadOnlyFunction(options)
  let id = parseInt(res.value)
  console.log(id)
  return id
}

export const getPool = async (city, poolId) => {
  const options = getReadOnlyTxOptions(city, 'get-pool', [uintCV(poolId)])
  let res = await callReadOnlyFunction(options)
  res = res.value.data
  let pool = {
    contributionsEndBlock: parseInt(res.contributionsEndBlock.value),
    contributionsStartBlock: parseInt(res.contributionsStartBlock.value),
    mineManyIds: parseClarityList(res.mineManyIds),
    totalCoinsWon: parseInt(res.totalCoinsWon.value),
    totalContributed: parseInt(res.totalContributed.value),
    feePercentage: parseInt(res.feePercentage.value),
    minContribution: parseInt(res.minContribution.value)
  }
  return pool
}

export const getMineMany = async (city, mineManyId) => {
  const options = getReadOnlyTxOptions(city, 'get-mine-many', [
    uintCV(mineManyId),
  ])
  let res = await callReadOnlyFunction(options)
  res = res.value.data
  let mineMany = {
    blockMiningStarted: parseInt(res.blockMiningStarted.value),
    claimingEnabled: cvToTrueValue(res.claimingEnabled),
    coinsWon: parseInt(res.coinsWon.value),
    poolId: parseInt(res.poolId.value),
    ustxAmounts: parseClarityList(res.ustxAmounts),
  }
  return mineMany
}

export const getContribution = async (city, poolId, stxAddress) => {
  const options = getReadOnlyTxOptions(city, 'get-contribution', [
    uintCV(poolId),
    standardPrincipalCV(stxAddress),
  ])
  let res = await callReadOnlyFunction(options)
  res = res.value.data
  let contribution = {
    amountUstx: parseInt(res.amountUstx.value),
    hasClaimed: cvToTrueValue(res.hasClaimed),
  }
  console.log(contribution)
  return contribution
}

export const getMinimumContribution = async city => {
  const options = getReadOnlyTxOptions(city, 'get-minimum-contribution', [])
  let res = await callReadOnlyFunction(options)
  res = res.value
  let minimumContribution = parseInt(res)
  console.log(minimumContribution)
  return minimumContribution
}

// export const getAdminAddresses = async city => {
//   const options = getReadOnlyTxOptions(city, 'get-admin-addresses', [])
//   let res = await callReadOnlyFunction(options)
//   res = res.list
//   console.log('RES TEST', res)
//   console.log('RES TEST2', parseClarityList(res))

//   let adminAddresses = res.map(address => {
//     return {
//       address: address.address,
//     }
//   })
//   console.log(adminAddresses)
//   return adminAddresses
// }

export const getReadOnlyTxOptions = (city, functionName, functionArgs) => {
  return {
    contractAddress: CITIES[city].contractAddress,
    contractName: CITIES[city].contractName,
    functionName: functionName,
    functionArgs: functionArgs,
    network: NETWORK,
    senderAddress: CITIES[city].contractAddress,
  }
}

export const parseClarityList = list => {
  list = list.list.map(element => {
    return parseInt(element.value)
  })
  return list
}
