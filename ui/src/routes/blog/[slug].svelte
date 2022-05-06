<script context="module">
	export const prerender = true;

	const query = `
    query getPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      date
      title
      content
      author {
        node {
          name
        }
      }
      seo {
        title
        metaDesc
      }
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
    }
  }`;

	export async function load({ params, fetch }) {
		const response = await fetch(import.meta.env.VITE_GRAPHQL_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query,
				variables: {
					slug: params.slug
				}
			})
		});

		if (response.ok) {
			const responseObj = await response.json();
			const { post } = responseObj.data;

			return {
				props: {
					post
				}
			};
		}

		return {
			status: response.status,
			error: new Error(`Could not load {$url}`)
		};
	}
</script>

<script>
	export let post;
	const formatDate = (date) => new Date(date).toLocaleDateString();
</script>

<div class="blog-wrapper">
	<h1>{post.title}</h1>
	{#if post.featuredImage}
		<div class="featured-image">
			<img src={post.featuredImage.node.sourceUrl} alt={post.featuredImage.node.altText} />
		</div>
	{/if}

	<div class="blog-content">{@html post.content}</div>
	<p>Written by {post.author.node.name} on {formatDate(post.date)}</p>
</div>

<style>
	.blog-wrapper {
		padding: 50px 20px;
		padding: 0 20px;
		text-align: center;
	}

	.blog-wrapper :global(img) {
		margin: 20px 0;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}

	.blog-wrapper :global(.featured-image) {
		text-align: center;
	}

	.featured-image {
		padding-top: 20px;
	}

	.blog-wrapper :global(p) {
		font-size: 1.25rem;
		padding: 20px;
		text-align: left;
	}

	.blog-wrapper :global(h1) {
		font-size: 2.75rem;
		text-align: center;
		padding-top: 75px;
	}

	.blog-wrapper :global(h2) {
		font-size: 2.5rem;
	}
	.blog-wrapper :global(h3) {
		font-size: 2rem;
	}

	.blog-wrapper :global(h4) {
		font-size: 1.75rem;
	}

	.blog-wrapper :global(h5) {
		font-size: 1.5rem;
	}

	.blog-wrapper :global(h6) {
		font-size: 1.4rem;
	}

	.blog-wrapper :global(ul) {
		text-align: center;
		list-style-position: inside;
	}

	.blog-wrapper :global(ol) {
		text-align: center;
		list-style-position: inside;
	}

	.blog-wrapper :global(a) {
		text-decoration: underline;
	}

	.blog-wrapper :global(a:hover) {
		color: #384cff;
	}

	@media (max-width: 700px) {
		.blog-wrapper :global(p) {
			padding: 20px 5px;
		}
	}
</style>
