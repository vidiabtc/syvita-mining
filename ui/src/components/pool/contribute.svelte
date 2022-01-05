<script>
	import Info from "$components/info.svelte";

	
</script>
<div class="contribute-wrapper">
<div class="title">	<h3>Contribute</h3> <Info/></div>
<div class="contributions">
	<div class="add-contributions">
		<div>
			<input
			placeholder="40 STX Minimum"
				type="number"
			/>
		</div>
		<button>Contribute</button>
	</div>
	
</div>
</div>

<style>

	.contribute-wrapper {
		width: 770px;
		margin: auto;
    margin-top: 144px;

	}

	.title {
		font-size: 1.5rem;
		display: flex;
		align-items: center;
		gap: 5px;
		padding-bottom: 15px;
	}

	.contributions {
    width: 770px;
height: 110px;
		border: 2px solid transparent;
		border-radius: 10px;
		border: 1px solid blue;
		padding: 10px;
   
	}

	.add-contributions {
		padding: 20px;
		position: relative;
		display: flex;
		justify-content: space-between;
    gap: 30px;
 
	}



	input {
		color: white;
		width: 500px;
		height: 50px;
		padding-left: 10px;
	}
::placeholder {
	color: white;
	font-size: 1rem;
}

	button {
    width: 180px;
height: 50px;

background: #384CFF;
border-radius: 4px;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}

</style>
