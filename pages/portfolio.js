import Head from "next/head";
import PortfolioLink from "components/PortfolioLink.js";

const Portfolio = () => {
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
					<PortfolioLink />
					<PortfolioLink />
				</div>
			</main>

			<style jsx>{`
				.container {
					display: flex;
					align-items: center;
					justify-content: space-between;

					height: 100vh;
				}
			`}</style>
		</React.Fragment>
	);
};

export default Portfolio;
