<script context="module">
	import { API_URL } from '$lib/constants';

	export async function load({ fetch }) {
		let url = `${API_URL}/docs`;
		let res = await fetch(url);
		let docs = await res.json();

		return {
			props: {
				docs
			}
		};
	}
</script>

<script>
	export let docs;
</script>

<h1>Sanity Docs</h1>

<h2>{docs.title}</h2>
<h3>{docs.text}</h3>
