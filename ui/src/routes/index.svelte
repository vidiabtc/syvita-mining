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
		miaBalance = Math.floor(miaBalance.stx.balance / 1000000);

		url = `${BASE_URL}/address/${CITIES['nyc'].cityWalletAddress}/balances`;
		res = await fetch(url);
		let nycBalance = await res.json();
		nycBalance = Math.floor(nycBalance.stx.balance / 1000000);

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
	import News from '$components/index/news.svelte';
	import MobileNews from '$components/index/mobileNews.svelte';
	import Mobilenews from '$components/index/mobileNews.svelte';
</script>

<div>
	<Header />
	<PoolStats />
	<MayorStats {stxPrice} {miaBalance} {nycBalance} />
	<MobileMayorStats />
	<!-- <CityStats /> -->
	<News />
	<Mobilenews />
</div>

<style>
	div {
		margin: auto;
		padding: 0 20px;
	}
</style>
