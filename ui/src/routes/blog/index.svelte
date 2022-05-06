<script context="module">
	const query = `query getPosts {
  posts {
    nodes {
      date
      databaseId
      uri
      title
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
}`;

	export async function load({ fetch }) {
		const response = await fetch(import.meta.env.VITE_GRAPHQL_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ query })
		});

		if (response.ok) {
			const responseObj = await response.json();
			const posts = responseObj.data.posts.nodes;

			return {
				props: {
					posts
				}
			};
		}

		return {
			status: response.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	export let posts;
</script>

<div class="blog">
	<h1>Blog</h1>
	<div class="blog-post-wrapper">
		{#if posts}
			{#each posts as post}
				<div class="blog-posts">
					{#if post.featuredImage}
						<img
							class="featured-image"
							src={post.featuredImage.node.sourceUrl}
							alt={post.featuredImage.node.altText}
						/>
					{:else}
						<img
							class="featured-image"
							src="https://www.pillsbury.com/-/media/PB/Images/doughboy/doughboy.jpg"
						/>
					{/if}
					<div>
						<a href={`/blog${post.uri}`}><p>{post.title}</p></a>
						<p>{@html post.excerpt}</p>
					</div>
				</div>
			{/each}
		{:else}
			<p>No Posts Found</p>
		{/if}
	</div>
</div>

<style>
	.blog {
		max-width: 1120px;
		margin: auto;
		padding: 0 40px;
	}

	h1 {
		font-size: 2.5rem;
		padding: 50px 0;
	}

	.blog-post-wrapper {
		margin: auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 50px;
	}

	.blog-posts {
		border: 1px solid gray;
		height: 400px;
		max-width: 400px;
		border-radius: 10px;
	}

	.blog-posts div {
		padding: 10px 0;
		text-align: center;
	}

	.blog-posts div p:first-child {
		font-size: 1.5rem;
		padding: 10px 0;
	}

	.blog-posts div p:nth-child(2) {
		font-size: 0.85rem;
		text-align: left;
		padding: 0 10px;
	}

	.featured-image {
		width: 100%;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		height: 250px;
	}

	a:hover {
		color: #384cff;
	}

	@media (max-width: 944px) {
		.blog-posts {
			margin: auto;
		}

		.blog {
			padding: 0 20px;
		}
	}
</style>
