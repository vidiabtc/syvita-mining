<script>
	import Header from '$components/header.svelte';
	import Footer from '$components/footer.svelte';
	import '@fontsource/inter/400.css';
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	div {
		display: grid;

		grid-template-areas:
			'nav'
			'main'
			'footer';
		grid-template-rows: auto 1fr auto;
		min-height: 100%;
	}

	nav {
		grid-area: nav;
	}
	main {
		grid-area: main;
	}
	footer {
		grid-area: footer;
	}
</style>
