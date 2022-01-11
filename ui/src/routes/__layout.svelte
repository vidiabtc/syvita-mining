<script>
	import NavBar from '$components/navigation/navBar.svelte';
	import Footer from '$components/footer.svelte';
	import '@fontsource/inter/400.css';
</script>

<div>
	<NavBar />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	div {
		display: grid;
		width: 100%;

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
		max-width: 100%;
		grid-area: main;
	}
	footer {
		grid-area: footer;
	}
</style>
