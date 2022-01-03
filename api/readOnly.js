import { BASE_URL, CYCLE_LENGTH, IS_MAINNET } from './constants.js'
import { callReadOnlyFunction } from 'micro-stacks/transactions'
import {
  makeContractCallToken,
  openTransactionPopup,
  makeStxTransferToken,
} from 'micro-stacks/connect'
import {
  AnchorMode,
  PostConditionMode,
  makeStandardSTXPostCondition,
  FungibleConditionCode,
} from 'micro-stacks/transactions'
import { listCV, uintCV, standardPrincipalCV } from 'micro-stacks/clarity'
import { StacksMainnet } from 'micro-stacks/network'

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
  const options = getReadOnlyTxOptions(city, 'get-stacking-stats-at-cycle', [
    uintCV(cycle),
  ])
  let res = await callReadOnlyFunction(options)
  res = res.value.data

  return res
}
