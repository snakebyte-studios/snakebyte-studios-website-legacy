import Head from "next/head";
import FeatureBlog from "components/FeatureBlog.js";
import BlogCell from "components/BlogCell.js";
import BLOG_DETAILS from "data/blog_data.json";

let thePost = null;

BLOG_DETAILS.forEach(function(obj, len) {
	let mostRecentBlog = obj;
	if (mostRecentBlog.id)
		if (mostRecentBlog.id > len) {
			thePost = mostRecentBlog;
		}
});

const Blog = () => {
	return (
		<>
			{/* Meta content */}
			<Head>
				<title>Blog - Snakebyte Studios</title>
				<meta
					name="description"
					content="Get your share of tech news, business content and other blog bits that we decide to write about!" //TODO: Write blog meta description
				/>
			</Head>

			<main id="blog-page">
				<div className="container">
					<div>Filler 1</div>
					<div>Filler 2</div>
					<div className="blog-grid">
						{BLOG_DETAILS.map(blogCell => (
							<div>
								<BlogCell
									title={blogCell.title}
									photo={blogCell.photo}
									summary={blogCell.summary}
								/>
							</div>
						))}
					</div>

					<div className="blog-feature">
						{/* {BLOG_DETAILS.map(blogFeature => (
							<FeatureBlog
								title={blogFeature.title}
								date={blogFeature.date}
								summary={blogFeature.summary}
								body={blogFeature.body}
								conclusion={blogFeature.conclusion}
								photo={blogFeature.photo}
							/>
						))} */}

						<FeatureBlog
							title={thePost.title}
							date={thePost.date}
							summary={thePost.summary}
							body={thePost.body}
							conclusion={thePost.conclusion}
							photo={thePost.photo}
						/>
					</div>
				</div>
			</main>

			<style jsx>{`
				.container {
					display: grid;
					grid-template-columns: 1fr 2fr;
					grid-template-rows: 90px 2fr 55px;

					height: 100vh;
				}

				/* .container > div {
					border: 1px solid black;
				} */

				.blog-grid {
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					grid-auto-rows: 200px;
					grid-gap: 1em;

					overflow: auto;
				}

				.blog-feature {
					display: flex;
					justify-content: center;
					max-height: calc(100vh - (90px + 55px));
					overflow: auto;
				}
			`}</style>
		</>
	);
};

export default Blog;
