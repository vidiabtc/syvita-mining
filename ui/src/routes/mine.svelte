<script>
	import MineMany from '$components/mineMany.svelte';
	import SelectCity from '$components/selectCity.svelte';
</script>

<div class="mine-wrapper">
	<div class="title">
		<h1>Mine</h1>
		<SelectCity />
	</div>
	<MineMany />
</div>

<style>
	.mine-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 770px;
	}
</style>
