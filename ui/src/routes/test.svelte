<script>
	import { transactionsApi, accountsApi } from '$lib/test.js';

	const getTxs = async () => {
		// const tx = await transactionsApi.getTransactionList((limit = 10));
		const accountParameters = {
			principal: 'SM2MARAVW6BEJCD13YV2RHGYHQWT7TDDNMNRB1MVT',
			limit: 50
			// offset?: number;
			// height?: number;
			// unanchored?: boolean;
			// untilBlock?: string;
		};
		const tx = await accountsApi.getAccountTransactions(accountParameters);

		console.log(tx);
	};
</script>

<button on:click={getTxs}> GET TXS </button>
