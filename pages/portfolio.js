import Head from "next/head";
import PortfolioLink from "components/PortfolioLink.js";

const Portfolio = () => {
	return (
		<>
			{/* Meta content */}
			<Head>
				<title>Portfolio - Snakebyte Studios</title>
				<meta
					name="description"
					content="Years of experience and keen eyes for detail –
                Meet the brilliant minds at Snakebyte Studios."
				/>
			</Head>

			<main id="portfolio-page">
				<div className="container">
					<PortfolioLink
						name="Sample Website 1"
						image="https://cdn.shopify.com/s/files/1/0533/2089/files/web-design-portfolio-inspiration-toyfight.png?v=1503510344"
						description="This is a sample site made for a cool company"
						link="#"
					/>
					<PortfolioLink
						name="Sample Website 2"
						image="https://cdn.shopify.com/s/files/1/0533/2089/files/web-design-portfolio-inspiration-toyfight.png?v=1503510344"
						description="This is a sample site made for a totally different company"
						link="#"
					/>
				</div>
			</main>

			<style jsx>{`
				#portfolio-page {
					min-height: 100vh;
				}

				.container {
					display: flex;
					align-items: center;
					flex-wrap: wrap;
					width: var(--container-width);
					max-width: 80%;
					margin: 0 auto;
					margin-top: 100px;
				}

				.container :global(.card) {
					width: calc(33% - 20px);
					margin-right: 20px;
					margin-bottom: 20px;
				}

				.container :global(.card:nth-of-type(3n)) {
					margin-right: 0px;
				}
			`}</style>
		</>
	);
};

export default Portfolio;
