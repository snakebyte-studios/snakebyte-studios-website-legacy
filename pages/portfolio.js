import { useState } from "react";
import Head from "next/head";
import PortfolioLink from "components/PortfolioLink.js";
import Modal from "components/Modal.js";

const Portfolio = () => {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			{/* Meta content */}
			<Head>
				<title>Portfolio - Snakebyte Studios</title>
				<meta
					name="description"
					content="" //TODO: Write portfolio meta description
				/>
			</Head>

			{/* Page content */}
			<main id="portfolio-page">
				<div className="container">
					<PortfolioLink
						name="Sample Website 1"
						image="https://assets.awwwards.com/awards/media/cache/optimize/submissions/2019/05/5ce3f805a5e83598700318.png"
						description="This is a sample site made for a cool company"
						link="#"
					/>
					<PortfolioLink
						name="Sample Website 2"
						image="https://assets.awwwards.com/awards/media/cache/optimize/submissions/2019/05/5ce579eae5d2d041709194.png"
						description="This is a sample site made for a totally different company"
						link="#"
					/>
					<PortfolioLink
						name="Sample Website 3"
						image="https://assets.awwwards.com/awards/media/cache/optimize/submissions/2019/05/5ce583ce468e5487091155.jpg"
						description="This is a sample site made for a totally different company"
						link="#"
					/>
					<PortfolioLink
						name="Sample Website 4"
						image="https://assets.awwwards.com/awards/media/cache/optimize/submissions/2019/05/5ce583ce468e5487091155.jpg"
						description="This is a sample site made for a totally different company"
						link="#"
					/>
					<button onClick={() => setModalOpen(true)}>Open Modal</button>
				</div>

				<Modal isOpen={modalOpen} onCloseModal={() => setModalOpen(false)}>
					<p>Hello World :)</p>
				</Modal>
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
					margin-right: 30px;
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
