<script>
	let email;

	const submitForm = async () => {
		const submit = await fetch('api/email', {
			body: JSON.stringify({
				email
			})
		});

		const data = await submit.json();
		console.log(data);
	};
</script>

<form on:submit={submitForm}>
	<label>
		Email
		<input type="text" name="email" bind:value={email} />
	</label>
	<input type="submit" />
</form>

<style>
	form {
		margin-top: 300px;
		margin-right: auto;
		margin-left: auto;
		width: 400px;
	}
</style>
