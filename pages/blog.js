import Head from "next/head";

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

			<main>
				<div className="container">
					<div>1</div>
					<div className="blog">2Blog</div>
					<div />
					<div className="instagramPlug">
						<h1>Come check us out!</h1>
					</div>
					<div className="feature">3Feature Website</div>
				</div>
			</main>

			<style jsx>{`
				.container {
					display: grid;
					grid-template-columns: 1fr 1fr;
					grid-template-rows: 90px 2fr 1fr 55px;

					height: 100vh;
				}

				.container > div {
					border: 1px solid black;
				}

				.instagramPlug {
					display: flex;
					justify-content: center;

					flex-direction: column;
				}

				.instagramPlug h1 {
					text-transform: uppercase;
				}

				.blog {
					display: flex;
					justify-content: center;
					align-items: center;

					background: grey;

					grid-column: 2;
					grid-row: 2/4;
				}

				.feature {
					display: flex;
					justify-content: center;
					align-items: center;
				}
			`}</style>
		</React.Fragment>
	);
};

export default Blog;
