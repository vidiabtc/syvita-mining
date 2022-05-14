export const IS_MAINNET = true;

export const BTC_API_URL = 'https://btc.syvitamining.com/api/v1';
export const BASE_URL = 'https://stacks-node-api.mainnet.stacks.co/extended/v1';
export const API_URL = 'https://syvita-mining.ocelo.workers.dev/api';
export const CYCLE_LENGTH = 2100;
export const POOL_API_URL = 'https://api.ocelo.workers.dev/api';

export const BTCPAY_STORE = 'BvwHJpw7KTHDVC5ZDpGzsBzuy34NomFHBsh5t3f1zKNw';

export const STATS = {
	totalSTXRaised: '3,731,735',
	totalCityCoinsWon: '316,900,000'
};
export const CITIES = {
	mia: {
		name: 'Miami',
		coin: 'mia',
		img: 'citycoins/mia.svg',
		cityWalletAddress: 'SM2MARAVW6BEJCD13YV2RHGYHQWT7TDDNMNRB1MVT',
		contractAddress: 'SP1H1733V5MZ3SZ9XRW9FKYGEZT0JDGEB8Y634C7R',
		contractName: 'miamicoin-core-v2',
		v1ContractName: 'miamicoin-core-v1',
		poolContractAddress: 'SP196Q1HN49MJTJFRW08RCRP7YSXY28VE72GQWS0P',
		poolContractName: 'syvita-mining-mia-v2',
		v1TokenContractName: 'miamicoin-token',
		tokenContractName: 'miamicoin-token-v2',
		tokenName: 'miamicoin',
		v1Address: 'SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27',
		v1Token: 'SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27.miamicoin-token::miamicoin',
		token: 'SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27.miamicoin-token-v2::miamicoin',
		miningHistoryUrl: 'miamining.com',
		activationBlock: '24497',
		startingPoolId: '21'
	},
	nyc: {
		name: 'New York',
		coin: 'nyc',
		img: 'citycoins/nyc.svg',
		cityWalletAddress: 'SM18VBF2QYAAHN57Q28E2HSM15F6078JZYZ2FQBCX',
		contractAddress: 'SPSCWDV3RKV5ZRN1FQD84YE1NQFEDJ9R1F4DYQ11',
		contractName: 'newyorkcitycoin-core-v2',
		v1ContractName: 'newyorkcitycoin-core-v1',
		poolContractAddress: 'SP196Q1HN49MJTJFRW08RCRP7YSXY28VE72GQWS0P',
		poolContractName: 'syvita-mining-nyc-v2',
		v1Address: 'SP2H8PY27SEZ03MWRKS5XABZYQN17ETGQS3527SA5',
		v1Token: 'SP2H8PY27SEZ03MWRKS5XABZYQN17ETGQS3527SA5.newyorkcitycoin-token::newyorkcitycoin',
		token: 'SP2H8PY27SEZ03MWRKS5XABZYQN17ETGQS3527SA5.newyorkcitycoin-token-v2::newyorkcitycoin',
		v1TokenContractName: 'newyorkcitycoin-token',
		tokenContractName: 'newyorkcitycoin-token-v2',
		tokenName: 'newyorkcitycoin',
		miningHistoryUrl: 'mining.nyc',
		activationBlock: '37449',
		startingPoolId: '17'
	}
};

export const LANGUAGES = {
	English: {
		name: 'English',
		translatedName: 'English',
		img: '🇺🇸',
		home: {
			title: 'Mine CityCoins',
			subHeading:
				"The most effective way to mine CityCoins is as a team. With Syvita Mining your contributions are pooled with others to increase the pool's chance of winning blocks.",
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
			nycWon: 'NYC Won',
			allPools: 'All Pools',
			pool: 'Pool',
			contributors: 'Contributors',
			committedStx: 'Committed STX',
			activity: 'Activity',
			viewPoolDetails: 'View pool details',
			startBlock: 'Start Block',
			endBlock: 'End Block',
			current: 'Current',
			contribute: 'Contribute'
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
			miaWalletBalance: 'Miami Wallet Balance',
			nycWalletBalance: 'New York City Wallet Balance',
			myMIABalance: 'My MIA balance',
			myNYCBalance: 'My NYC balance',
			mySTXBalance: 'My STX balance',
			currentBlock: 'Current Block',
			joinMiningPool: 'Join Mining Pool',
			block: 'Block'
		},
		stack: {
			stack: 'Stack',
			stackingCycle: 'Stacking Cycle',
			miaStacked: 'MIA stacked',
			nycStacked: 'NYC stacked',
			stxToClaim: 'STX to claim',
			miaToReturn: 'MIA to return',
			nycToReturn: 'NYC to return',
			claimRewards: 'Claim rewards',
			cycle: 'Cycle',
			stxToStackers: 'STX to Stackers',
			percentComplete: 'Percent Complete',
			miaAmountToStack: 'Amount of MIA to stack',
			nycAmountToStack: 'Amount of NYC to stack',
			numOfCycles: 'Number of Cycles',
			stackForCycles: 'Stack for 5 cycles',
			claimStackingRewards: 'Claim Stacking Rewards',
			subHeading:
				'When a reward cycle is complete, Stackers can claim their portion of the STX committed by miners. When the last selected cycle is complete, Stackers can claim their CityCoins back in the same transaction.',
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
		translatedName: '한국어',
		img: '🇰🇷',
		home: {
			title: '시티 코인 채굴',
			subHeading:
				'시티코인을 가장 효과적으로 채굴할 수 있는 방법은 팀으로 하는 것입니다. Syvita로 사용하면, 다른사람들과 함께 공동작업으로 블록을 획들할 확률을 높일 수 있습니다.',
			totalStx: '공동작업을 위해 취합된 STX 합계',
			totalCityCoins: '총시티코인',
			cities: '도시들',
			city: '도시',
			walletBalance: '지갑 잔액',
			miningStatus: '채굴 현황',
			mayor: '시장',
			totalMayors: '총 시장',
			currentCityCoins: '현 시티코인',
			marketCap: '시가총액',
			news: '새소식',
			active: '활성',
			inactive: '비활성'
		},
		pool: {
			currentBlock: '현 블록',
			totalRaisedStx: '총 취합된 STX',
			yourContribution: '참여',
			yourTransactions: '거래',
			youHaveNotContributed: '참여 없음',
			recentTransactions: '최근 거래',
			viewInExplorer: '거래 보기',
			contributionsClosed: '블록 에서 참여 종료',
			contributionsUntil: '블록 까지 참여 가능',
			contributionsOpen: '블록 에서 참여 가능',
			miaWon: '총 MIA',
			nycWon: '총 NYC',
			allPools: '모든 공동작업',
			pool: '공동작업',
			contributors: '참여자',
			committedStx: '취득한 STX',
			activity: '활동',
			viewPoolDetails: '공동작업 세부정보 보기',
			startBlock: '시작 블록',
			endBlock: '끝 블록',
			current: '현재',
			contribute: '참여하기'
		},
		header: {
			connect: '고객센터',
			logOut: '로그아웃',
			pool: '공동작업',
			mine: '채굴',
			stack: '스택',
			discord: '디스코드'
		},
		mine: {
			blocksToMine: '채굴할 블록 수',
			stxPerBlock: '블록당 STX',
			max: '최고',
			reset: '초기화',
			mineForBlocks: '5블록 채굴',
			miaWalletBalance: 'Miami 지갑 잔액',
			nycWalletBalance: 'New York City 지갑 잔액',
			myMIABalance: '내 MIA 잔액',
			myNYCBalance: '내 NYC 잔액',
			mySTXBalance: '내 STX 잔액',
			currentBlock: '현블록',
			joinMiningPool: '공동작업 가입하기',
			block: '블록'
		},
		stack: {
			stackingCycle: '스택킹 기간',
			miaStacked: 'MIA 예치',
			nycStacked: 'NYC 예치',
			stxToClaim: 'STX 청구',
			miaToReturn: 'MIA로 전이',
			nycToReturn: 'NYC로 전이',
			claimRewards: '보상신청',
			cycle: '주기',
			stxToStackers: 'STX를 Stackers로 전환',
			percentComplete: '완료율',
			miaAmountToStack: '예치할 MIA 양',
			nycAmountToStack: '예치할 NYC 양',
			numOfCycles: '주기수',
			stackForCycles: '5주기동안 예치',
			claimStackingRewards: '예치금 보상신청',
			subHeading:
				'보상 주기가 완료되면 예치자는 채굴자가 취득한 STX의 일부를 청구할 수 있습니다. 마지막으로 선택한 주기가 완료되면 예치자는 동일한 트랜잭션에서 시티코인를 다시 청구할 수 있습니다',
			claimNow: '지금 청구하기',
			claimAtBlock: '블록 에서 청구'
		},
		footer: {
			syvita: 'Syvita Guild가 만들고 유지 관리',
			follow: '트위터에서 팔로우하세요'
		}
	}
	// Japanese: {
	// 	name: 'Japanese',
	// 	translatedName: 'Japanese',
	// 	img: '🇯🇵',
	// 	home: {
	// 		title: 'Mine City Coins',
	// 		subHeading: "The most effective way to mine CityCoins is as a team. With Syvita Mining your contributions are pooled with others to increase the pool's chance of winning blocks.",
	// 		totalStx: 'Total STX raised for Pool',
	// 		totalCityCoins: 'Total CityCoins Won',
	// 		cities: 'Cities',
	// 		city: 'City',
	// 		walletBalance: 'Wallet Balance',
	// 		miningStatus: 'Mining Status',
	// 		mayor: 'Mayor',
	// 		totalMayors: 'Total Mayors',
	// 		currentCityCoins: 'Current CityCoins',
	// 		marketCap: 'Market Cap',
	// 		news: 'News',
	// 		active: 'Active',
	// 		inactive: 'Inactive'
	// 	},
	// 	pool: {
	// 		currentBlock: 'Current Block',
	// 		totalRaisedStx: 'Total raised STX',
	// 		yourContribution: 'Your contribution',
	// 		yourTransactions: 'Your transactions',
	// 		youHaveNotContributed: 'You have not contributed',
	// 		recentTransactions: 'Recent transactions',
	// 		viewInExplorer: 'View your transaction in Syvita Explorer',
	// 		contributionsClosed: 'Contributions closed at block',
	// 		contributionsUntil: 'Contributions open until block',
	// 		contributionsOpen: 'Contributions open at block',
	// 		miaWon: 'MIA Won',
	// 		allPools: 'All Pools',
	// 		pool: 'Pool',
	// 		contributors: 'Contributors',
	// 		committedStx: 'Committed STX',
	// 		activity: 'Activity',
	// 		viewPoolDetails: 'View pool details',
	// 		startBlock: 'Start Block',
	// 		endBlock: 'End Block',
	// 		current: 'Current',
	// 	},
	// 	header: {
	// 		connect: 'Connect',
	// 		logOut: 'Logout',
	// 		pool: 'Pool',
	// 		mine: 'Mine',
	// 		stack: 'Stack',
	// 		discord: 'Discord'
	// 	},
	// 	mine: {
	// 		blocksToMine: 'Number of Blocks to mine',
	// 		stxPerBlock: 'STX per block',
	// 		max: 'Max',
	// 		reset: 'Reset',
	// 		mineForBlocks: 'Mine for 5 blocks',
	// 		miamiWalletBalance: 'Miami Wallet Balance',
	// 		myMIABalance: 'My MIA balance',
	// 		mySTXBalance: 'My STX balance',
	// 		currentBlock: 'Current Block',
	// 		joinMiningPool: 'Join Mining Pool'
	// 	},
	// 	stack: {
	// 		stackingCycle: 'Stacking Cycle',
	// 		miaStacked: 'MIA stacked',
	// 		stxToClaim: 'STX to claim',
	// 		miaToReturn: 'MIA to return',
	// 		claimRewards: 'Claim rewards',
	// 		cycle: 'Cycle',
	// 		stxToStackers: 'STX to Stackers',
	// 		percentComplete: 'Percent Complete',
	// 		miaAmountToStack: 'Amount of MIA to stack',
	// 		numOfCycles: 'Number of Cycles',
	// 		stackForCycles: 'Stack for 5 cycles',
	// 		claimStackingRewards: 'Claim Stacking Rewards',
	// 		subHeading: 'When a reward cycle is complete, Stackers can claim their portion of the STX committed by miners. When the last selected cycle is complete, Stackers can claim their MIA back in the same transaction.',
	// 		claimNow: 'Claim Now',
	// 		claimAtBlock: 'Claim at block'

	// 	},
	// 	footer: {
	// 		syvita: 'Created and maintained by Syvita Guild',
	// 		follow: 'Follow us on Twitter'
	// 	}
	// }
};
