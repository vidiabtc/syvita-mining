<script>
  import { getStore, createInvoice, getInvoices } from '$lib/btcpay.js'

 </script>


 <h1>STX Mining</h1>
<button on:click={() => getStore('ELHKxPdWGoN96mAU2TUxmmPjcJrzFLFTxkTpFaUQpegT')}>Get Store</button>
<button on:click={() => createInvoice('ELHKxPdWGoN96mAU2TUxmmPjcJrzFLFTxkTpFaUQpegT')}>Create Invoice</button>
<button on:click={() => getInvoices('ELHKxPdWGoN96mAU2TUxmmPjcJrzFLFTxkTpFaUQpegT')}>Get Invoices</button>




<!-- <h1>{JSON.stringify(keypair)}</h1> -->

