import {
	TransactionsApi,
	SmartContractsApi,
	AccountsApi,
	Configuration,
	InfoApi
} from '@stacks/blockchain-api-client';

const BASE_URL = 'https://mainnet.syvita.org/extended/v1';
const config = new Configuration({ BASE_URL });
export const transactionsApi = new TransactionsApi(config);
export const accountsApi = new AccountsApi(config);
