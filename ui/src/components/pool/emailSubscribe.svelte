<script>



	let email = '';

	const submitEmail = async (email) => {
		let url = `https://guarded-island-36278.herokuapp.com/https://api.sendgrid.com/v3/marketing/contacts`;

		let res = await fetch(url, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${import.meta.env.VITE_EMAIL_API_KEY}`
			},
			body: JSON.stringify (
      { "contacts": [
        {
          "email": email
        }
    ]
     }
    )
	
  });

		alert('Email Submitted Succesfully');
	};
</script>

<div class="email-wrapper">
	<div class="title">
		<h3>Subscribe to our email newsletter!</h3>
		<p>Get updates on when pools are opening and other mining news.</p>
	</div>
	<form on:submit|preventDefault={() => submitEmail(email)}>
		<div class="input">
			<input class="email" placeholder="Insert Email" bind:value={email} type="email" />
			<div class="submit">
				{#if email == ''}
					<button class="submit-button">Submit</button>
				{:else}
					<input class="submit-button" type="submit" />
				{/if}
			</div>
		</div>
	</form>
</div>

<style>
	.email-wrapper {
		margin-right: auto;
		margin-left: auto;
		max-width: 400px;
		padding: 40px 20px;
		text-align: left;
	}

	.title {
		text-align: left;
	}

	h3 {
		font-size: 1.75rem;
	}

	p {
		padding: 10px 0px;
	}

	input {
		height: 50px;
	}

	.input {
		max-width: 400px;
		width: 100%;
	}

	.submit-button {
		transition: 0.4s;
	}

	.email {
		padding-left: 10px;
	}

	.submit-button:hover {
		background-color: #384cff;
		cursor: pointer;
	}

	.submit-button:active {
		background-color: rgba(56, 76, 255, 0.8);
	}

	button {
		height: 50px;
		border: 1px solid #444d66;
	}

	.submit {
		padding-top: 10px;
	}
</style>
