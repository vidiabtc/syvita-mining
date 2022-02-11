<script>
    import { filterTxsByContractCalls, getAllTxsForAddress } from '$lib/apiCalls';

    import { getStxAddress } from '$lib/auth.js';
    import { user, city } from '$lib/stores.js';

    $: stxAddress = getStxAddress($user);
    $: txs = stxAddress ? getAllTxsForAddress(stxAddress) : null;


</script>

<!-- 
<p>Insert a STX address</p>
<input bind:value={stxAddress} type="text"/>

<button on:click={transactions = getAllTxsForAddress(stxAddress)}>Get Transactions</button> -->

{#await txs}
    <h2>loading...</h2>
{:then txs}
    <ul>
        {#each filterTxsByContractCalls(txs, $city.contractAddress, $city.contractName, ['stack-tokens', 'claim-stacking-reward']) as tx}
            <li>
                <p>{tx.blockHeight}</p>
                <p>{tx.blockTime}</p>
                <p>{tx.fee}</p>
                <p>{tx.status}</p>
                <p>{tx.type}</p>
                <p>{JSON.stringify(tx.info)}</p>
                <p>{tx.id}</p>
            </li>
        {/each}
    </ul>
{/await}

<style>
    ul {
        max-width: 1000px;
        list-style-type: none;
    }

    li {
        display: flex;
        padding: 5px;
    }

    p {
        min-width: 100px;
        max-width: 200px;
    }
</style>


