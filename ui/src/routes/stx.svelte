<script>
  import PoolStats from '$components/stx/poolStats.svelte';
  import Contribute from '$components/stx/contribute.svelte';
  import { getStore, createInvoice, getInvoices } from '$lib/btcpay.js'

 </script>

<PoolStats/>

 <Contribute/>
<button on:click={() => getStore('ELHKxPdWGoN96mAU2TUxmmPjcJrzFLFTxkTpFaUQpegT')}>Get Store</button>
<button on:click={() => createInvoice('ELHKxPdWGoN96mAU2TUxmmPjcJrzFLFTxkTpFaUQpegT')}>Create Invoice</button>
<button on:click={() => getInvoices('ELHKxPdWGoN96mAU2TUxmmPjcJrzFLFTxkTpFaUQpegT')}>Get Invoices</button>





