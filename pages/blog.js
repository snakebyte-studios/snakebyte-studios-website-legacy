import Head from "next/head";
import FeatureBlog from "components/FeatureBlog.js";

const Blog = () => {
	return (
		<React.Fragment>
			{/* Meta content */}
			<Head>
				<title>Our Blog - Snakebyte Studios</title>
				<meta
					name="description"
					content="Years of experience and keen eyes for detail –
                Meet the brilliant minds at Snakebyte Studios."
				/>
			</Head>

			<main id="blog-page">
				<div className="container">
					<div>Filler 1</div>
					<div>Filler 2</div>

					<div className="blog-grid">
						<div>Blog1</div>
						<div>Blog2</div>
						<div>Blog3</div>
						<div>Blog4</div>
					</div>

					<div className="blog-feature">
						<FeatureBlog />
					</div>
				</div>
			</main>

			<style jsx>{`
				.container {
					display: grid;
					grid-template-columns: 1.5fr 2fr;
					grid-template-rows: 90px 2fr 55px;

					height: 100vh;
				}

				.container > div {
					border: 1px solid black;
				}

				.blog-grid {
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					grid-auto-rows: 200px;
					grid-gap: 1em;
				}

				.blog-grid > div {
					border: 1px solid black;
					padding: 1em;
					margin: 1em;
				}

				.blog-feature {
					display: flex;
					justify-content: center;
					max-height: calc(100vh - (90px + 55px));
					overflow: scroll;
				}
			`}</style>
		</React.Fragment>
	);
};

export default Blog;
