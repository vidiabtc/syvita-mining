export const IS_MAINNET = true;

export const BASE_URL = 'https://mainnet.syvita.org/extended/v1';
export const API_URL = 'https://syvita-mining.ocelo.workers.dev/api';
export const CYCLE_LENGTH = 2100;
export const POOL_API_URL = 'https://api.ocelo.workers.dev/api'

export const CITIES = {
	mia: {
		name: 'Miami',
		coin: 'mia',
		img: 'citycoins/mia.svg',
		cityWalletAddress: 'SM2MARAVW6BEJCD13YV2RHGYHQWT7TDDNMNRB1MVT',
		contractAddress: 'SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27',
		contractName: 'miamicoin-core-v1',
		poolContractAddress: 'SP196Q1HN49MJTJFRW08RCRP7YSXY28VE72GQWS0P',
		poolContractName: 'syvita-mining-mia-v1',
		tokenContractName: 'miamicoin-token',
		tokenName: 'miamicoin',
		token: 'SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27.miamicoin-token::miamicoin',
		miningHistoryUrl: 'miamining.com',
		activationBlock: '24497',
		startingPoolId: '8',
	},
	nyc: {
		name: 'New York',
		coin: 'nyc',
		img: 'citycoins/nyc.svg',
		cityWalletAddress: 'SM18VBF2QYAAHN57Q28E2HSM15F6078JZYZ2FQBCX',
		contractAddress: 'SP2H8PY27SEZ03MWRKS5XABZYQN17ETGQS3527SA5',
		contractName: 'newyorkcitycoin-core-v1',
		poolContractAddress: '',
		poolContractName: '',
		token: 'SP2H8PY27SEZ03MWRKS5XABZYQN17ETGQS3527SA5.newyorkcitycoin-token::newyorkcitycoin',
		tokenContractName: 'newyorkcitycoin-token',
		tokenName: 'newyorkcitycoin',
		miningHistoryUrl: 'mining.nyc',
		activationBlock: '37449',
		startingPoolId: '8',
	}
};

export const LANGUAGES = {
	English: {
		name: 'English',
		img: '🇺🇸',
		mining: {
			title: 'This is a title in english'
		}
	},
	Korean: {
		name: 'Korean',
		img: '🇰🇷',
		mining: {
			title: 'This is a title in korean'
		}
	},
	Japanese: {
		name: 'Japanese',
		img: '🇯🇵',
		mining: {
			title: 'This is a title in japanese'
		}
	}
}
