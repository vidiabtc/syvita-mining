<script context="module">
	import { CITIES, API_URL, BASE_URL } from '$lib/constants.js';

	export async function load({ fetch }) {
		let url = `${API_URL}/price`;
		let res = await fetch(url);
		let stxPrice = await res.json();
		stxPrice = parseFloat(stxPrice);

		url = `${BASE_URL}/address/${CITIES['mia'].cityWalletAddress}/balances`;
		res = await fetch(url);
		let miaBalance = await res.json();
    console.log('MIA BLAANCE', miaBalance)
		miaBalance = Math.floor(miaBalance.stx.total_received / 1000000);

		url = `${BASE_URL}/address/${CITIES['nyc'].cityWalletAddress}/balances`;
		res = await fetch(url);
		let nycBalance = await res.json();
		nycBalance = Math.floor(nycBalance.stx.total_received / 1000000);

		return {
			props: {
				stxPrice,
				miaBalance,
				nycBalance
			}
		};
	}
</script>

<script>
	export let stxPrice;
	export let miaBalance;
	export let nycBalance;

	import Header from '$components/index/header.svelte';
	import PoolStats from '$components/index/poolStats.svelte';
	import MayorStats from '$components/index/mayorStats.svelte';
	import MobileMayorStats from '$components/index/mobileMayorStats.svelte';
	import CityStats from '$components/index/cityStats.svelte';
	import InfoSection from '$components/index/infoSection.svelte';
	import News from '$components/index/news.svelte';
	import Mobilenews from '$components/index/mobileNews.svelte';
	import Faq from '$components/index/faq.svelte';

</script>

<svelte:head>
	<title>Syvita Mining | CityCoins Mining Pool</title>
	<meta
		name="description"
		content="Democratizing CityCoin mining. Pool your funds with others to affordably and potentially profitably mine NewYorkCoin or MiamiCoin."
	/>
</svelte:head>

<div>
	<Header />
	<PoolStats />
<InfoSection/>
	<MayorStats {stxPrice} {miaBalance} {nycBalance} />
	<MobileMayorStats {stxPrice} {miaBalance} {nycBalance}/>
	<!-- <CityStats /> -->
	<Faq/>
	<News />

	<Mobilenews />
</div>

<style>
	div {
		margin: auto;
		padding: 0 20px;
		padding-top: 110px;
	}
</style>
