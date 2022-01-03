<script>
	import { getStxAddress } from '$lib/auth';

	const getStacking = async () => {
		let url =
			'https://mainnet.syvita.org/v2/contracts/call-read/SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27/miamicoin-core-v1/get-stacking-stats-at-cycle';
		let res = await fetch(url);
		let data = await res.json();
		console.log('RESPONSE: ', data);
	};
</script>

<button on:click={getStacking}> TEST </button>
