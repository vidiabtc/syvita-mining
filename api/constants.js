export const IS_MAINNET = true

export const BASE_URL = 'https://stacks-node-api.mainnet.stacks.co/extended/v1'
export const API_URL = 'https://syvita-mining.ocelo.workers.dev/api'
export const CYCLE_LENGTH = 2100

export const CITIES = {
  mia: {
    name: 'Miami',
    coin: 'mia',
    img: 'citycoins/mia.svg',
    cityWalletAddress: 'SM2MARAVW6BEJCD13YV2RHGYHQWT7TDDNMNRB1MVT',
    contractAddress: 'SP1H1733V5MZ3SZ9XRW9FKYGEZT0JDGEB8Y634C7R',
    contractName: 'miamicoin-core-v2',
    token:
      'SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27.miamicoin-token::miamicoin',
    miningHistoryUrl: 'miamining.com',
    activationBlock: '24497',
  },
  nyc: {
    name: 'New York',
    coin: 'nyc',
    img: 'citycoins/nyc.svg',
    cityWalletAddress: 'SM18VBF2QYAAHN57Q28E2HSM15F6078JZYZ2FQBCX',
    contractAddress: 'SM18VBF2QYAAHN57Q28E2HSM15F6078JZYZ2FQBCX',
    contractName: 'newyorkcitycoin-core-v2',
    token:
      'SP2H8PY27SEZ03MWRKS5XABZYQN17ETGQS3527SA5.newyorkcitycoin-token::newyorkcitycoin',
    miningHistoryUrl: 'mining.nyc',
    activationBlock: '37449',
  },
}
