<script>
	let email;

	const submitEmail = async (email) => {
		let url = `https://campaigns.zoho.com/api/v1.1/addlistsubscribersinbulk?listkey=3z12320c6e15396486ff571cefc8a17dcaf67687a536e02bbd63cbb654293a2260&resfmt=JSON&emailids=${email}`;

		let res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization:
					'Zoho-oauthtoken 1000.6966def5d0dd2b4e74ba49b2aadcd4d4.d1af1919199ebd76581433850c979585'
			}
		});
		let data = await res.json();
		console.log('data', data);
	};
</script>

<div class="email-wrapper">
	<h3>Email</h3>
	<form on:submit|preventDefault={() => submitEmail(email)}>
		<input bind:value={email} type="email" />
		<input type="submit" />
	</form>
</div>

<style>
	.email-wrapper {
		margin-top: 300px;
		margin-right: auto;
		margin-left: auto;
		width: 400px;
	}
</style>
