export const IS_MAINNET = true;

export const BASE_URL = 'https://mainnet.syvita.org/extended/v1';
export const API_URL = 'https://syvita-mining.ocelo.workers.dev/api';
export const CYCLE_LENGTH = 2100;
export const POOL_API_URL = 'https://api.ocelo.workers.dev/api'

export const STATS = {
	totalSTXRaised: '3,731,735',
	totalCityCoinsWon: '316,900,000'
}
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
		home: {
			title: 'Mine City Coins',
			subHeading: "The most effective way to mine CityCoins is as a team. With Syvita Mining your contributions are pooled with others to increase the pool's chance of winning blocks.",
			totalStx: 'Total STX raised for Pool',
			totalCityCoins: 'Total CityCoins Won',
			cities: 'Cities',
			city: 'City',
			walletBalance: 'Wallet Balance',
			miningStatus: 'Mining Status',
			mayor: 'Mayor',
			totalMayors: 'Total Mayors',
			currentCityCoins: 'Current CityCoins',
			marketCap: 'Market Cap',
			news: 'News',
			active: 'Active',
			inactive: 'Inactive'	
		},
		pool: {
			currentBlock: 'Current Block',
			totalRaisedStx: 'Total raised STX',
			yourContribution: 'Your contribution',
			yourTransactions: 'Your transactions',
			youHaveNotContributed: 'You have not contributed',
			recentTransactions: 'Recent transactions',
			viewInExplorer: 'View your transaction in Syvita Explorer',
			contributionsClosed: 'Contributions closed at block',
			contributionsUntil: 'Contributions open until block',
			contributionsOpen: 'Contributions open at block',
			miaWon: 'MIA Won', 
			allPools: 'All Pools',
			pool: 'Pool',
			contributors: 'Contributors',
			committedStx: 'Committed STX',
			activity: 'Activity',
			viewPoolDetails: 'View pool details',
			startBlock: 'Start Block',
			endBlock: 'End Block',
			current: 'Current',
		},
		header: {
			connect: 'Connect',
			logOut: 'Logout',
			pool: 'Pool',
			mine: 'Mine',
			stack: 'Stack',
			discord: 'Discord'
		},
		mine: {
			blocksToMine: 'Number of Blocks to mine',
			stxPerBlock: 'STX per block',
			max: 'Max',
			reset: 'Reset',
			mineForBlocks: 'Mine for 5 blocks',
			miamiWalletBalance: 'Miami Wallet Balance',
			myMIABalance: 'My MIA balance',
			mySTXBalance: 'My STX balance',
			currentBlock: 'Current Block',
			joinMiningPool: 'Join Mining Pool'
		},
		stack: {
			stack: 'Stack',
			stackingCycle: 'Stacking Cycle',
			miaStacked: 'MIA stacked',
			stxToClaim: 'STX to claim',
			miaToReturn: 'MIA to return',
			claimRewards: 'Claim rewards',
			cycle: 'Cycle',
			stxToStackers: 'STX to Stackers',
			percentComplete: 'Percent Complete',
			miaAmountToStack: 'Amount of MIA to stack',
			numOfCycles: 'Number of Cycles',
			stackForCycles: 'Stack for 5 cycles',
			claimStackingRewards: 'Claim Stacking Rewards',
			subHeading: 'When a reward cycle is complete, Stackers can claim their portion of the STX committed by miners. When the last selected cycle is complete, Stackers can claim their MIA back in the same transaction.',
			claimNow: 'Claim Now',
			claimAtBlock: 'Claim at block'

		},
		footer: {
			syvita: 'Created and maintained by Syvita Guild',
			follow: 'Follow us on Twitter'
		}
	},
	Korean: {
		name: 'Korean',
		img: '🇰🇷',
		home: {
			title: 'Mine City Coins',
			subHeading: "The most effective way to mine CityCoins is as a team. With Syvita Mining your contributions are pooled with others to increase the pool's chance of winning blocks.",
			totalStx: 'Total STX raised for Pool',
			totalCityCoins: 'Total CityCoins Won',
			cities: 'Cities',
			city: 'City',
			walletBalance: 'Wallet Balance',
			miningStatus: 'Mining Status',
			mayor: 'Mayor',
			totalMayors: 'Total Mayors',
			currentCityCoins: 'Current CityCoins',
			marketCap: 'Market Cap',
			news: 'News',
			active: 'Active',
			inactive: 'Inactive'	
		},
		pool: {
			currentBlock: 'Current Block',
			totalRaisedStx: 'Total raised STX',
			yourContribution: 'Your contribution',
			yourTransactions: 'Your transactions',
			youHaveNotContributed: 'You have not contributed',
			recentTransactions: 'Recent transactions',
			viewInExplorer: 'View your transaction in Syvita Explorer',
			contributionsClosed: 'Contributions closed at block',
			contributionsUntil: 'Contributions open until block',
			contributionsOpen: 'Contributions open at block',
			miaWon: 'MIA Won', 
			allPools: 'All Pools',
			pool: 'Pool',
			contributors: 'Contributors',
			contribute: 'Contribute',
			committedStx: 'Committed STX',
			activity: 'Activity',
			viewPoolDetails: 'View pool details',
			startBlock: 'Start Block',
			endBlock: 'End Block',
			current: 'Current',
		},
		header: {
			connect: 'Connect',
			logOut: 'Logout',
			pool: 'Pool',
			mine: 'Mine',
			stack: 'Stack',
			discord: 'Discord'
		},
		mine: {
			blocksToMine: 'Number of Blocks to mine',
			stxPerBlock: 'STX per block',
			max: 'Max',
			reset: 'Reset',
			mineForBlocks: 'Mine for 5 blocks',
			miamiWalletBalance: 'Miami Wallet Balance',
			myMIABalance: 'My MIA balance',
			mySTXBalance: 'My STX balance',
			currentBlock: 'Current Block',
			joinMiningPool: 'Join Mining Pool'
		},
		stack: {
			stackingCycle: 'Stacking Cycle',
			miaStacked: 'MIA stacked',
			stxToClaim: 'STX to claim',
			miaToReturn: 'MIA to return',
			claimRewards: 'Claim rewards',
			cycle: 'Cycle',
			stxToStackers: 'STX to Stackers',
			percentComplete: 'Percent Complete',
			miaAmountToStack: 'Amount of MIA to stack',
			numOfCycles: 'Number of Cycles',
			stackForCycles: 'Stack for 5 cycles',
			claimStackingRewards: 'Claim Stacking Rewards',
			subHeading: 'When a reward cycle is complete, Stackers can claim their portion of the STX committed by miners. When the last selected cycle is complete, Stackers can claim their MIA back in the same transaction.',
			claimNow: 'Claim Now',
			claimAtBlock: 'Claim at block'

		},
		footer: {
			syvita: 'Created and maintained by Syvita Guild',
			follow: 'Follow us on Twitter'
		}
	},
	Japanese: {
		name: 'Japanese',
		img: '🇯🇵',
		home: {
			title: 'Mine City Coins',
			subHeading: "The most effective way to mine CityCoins is as a team. With Syvita Mining your contributions are pooled with others to increase the pool's chance of winning blocks.",
			totalStx: 'Total STX raised for Pool',
			totalCityCoins: 'Total CityCoins Won',
			cities: 'Cities',
			city: 'City',
			walletBalance: 'Wallet Balance',
			miningStatus: 'Mining Status',
			mayor: 'Mayor',
			totalMayors: 'Total Mayors',
			currentCityCoins: 'Current CityCoins',
			marketCap: 'Market Cap',
			news: 'News',
			active: 'Active',
			inactive: 'Inactive'	
		},
		pool: {
			currentBlock: 'Current Block',
			totalRaisedStx: 'Total raised STX',
			yourContribution: 'Your contribution',
			yourTransactions: 'Your transactions',
			youHaveNotContributed: 'You have not contributed',
			recentTransactions: 'Recent transactions',
			viewInExplorer: 'View your transaction in Syvita Explorer',
			contributionsClosed: 'Contributions closed at block',
			contributionsUntil: 'Contributions open until block',
			contributionsOpen: 'Contributions open at block',
			miaWon: 'MIA Won', 
			allPools: 'All Pools',
			pool: 'Pool',
			contributors: 'Contributors',
			committedStx: 'Committed STX',
			activity: 'Activity',
			viewPoolDetails: 'View pool details',
			startBlock: 'Start Block',
			endBlock: 'End Block',
			current: 'Current',
		},
		header: {
			connect: 'Connect',
			logOut: 'Logout',
			pool: 'Pool',
			mine: 'Mine',
			stack: 'Stack',
			discord: 'Discord'
		},
		mine: {
			blocksToMine: 'Number of Blocks to mine',
			stxPerBlock: 'STX per block',
			max: 'Max',
			reset: 'Reset',
			mineForBlocks: 'Mine for 5 blocks',
			miamiWalletBalance: 'Miami Wallet Balance',
			myMIABalance: 'My MIA balance',
			mySTXBalance: 'My STX balance',
			currentBlock: 'Current Block',
			joinMiningPool: 'Join Mining Pool'
		},
		stack: {
			stackingCycle: 'Stacking Cycle',
			miaStacked: 'MIA stacked',
			stxToClaim: 'STX to claim',
			miaToReturn: 'MIA to return',
			claimRewards: 'Claim rewards',
			cycle: 'Cycle',
			stxToStackers: 'STX to Stackers',
			percentComplete: 'Percent Complete',
			miaAmountToStack: 'Amount of MIA to stack',
			numOfCycles: 'Number of Cycles',
			stackForCycles: 'Stack for 5 cycles',
			claimStackingRewards: 'Claim Stacking Rewards',
			subHeading: 'When a reward cycle is complete, Stackers can claim their portion of the STX committed by miners. When the last selected cycle is complete, Stackers can claim their MIA back in the same transaction.',
			claimNow: 'Claim Now',
			claimAtBlock: 'Claim at block'

		},
		footer: {
			syvita: 'Created and maintained by Syvita Guild',
			follow: 'Follow us on Twitter'
		}
	}
}
