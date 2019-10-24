import { useState } from "react";
import Head from "next/head";
import DesignLink from "components/DesignLink.js";
import Modal from "components/Modal.js";
import DESIGN_LIST from "data/design_list.json";

DESIGN_LIST.forEach(design => {
	design.show = false;
});

const Designs = () => {
	const [activeDesign, setActiveDesign] = useState(null);

	const handleClick = id => {
		let design = DESIGN_LIST.find(design => design.id === id);
		setActiveDesign(design);
	};

	return (
		<>
			{/* Meta content */}
			<Head>
				<title>Designs - Snakebyte Studios</title>
				<meta
					name="description"
					content="View beautifully designed mockups as well as project designs done for clients!" //TODO: Write Design meta description
				/>
			</Head>

			{/* Page content */}
			<main id="design-page">
				<h1>Our Designs</h1>
				<div className="container">
					{DESIGN_LIST.map(design => (
						<div
							className="DesignLinkCard"
							onClick={() => handleClick(design.id)}
							key={design.id}
						>
							<DesignLink
								name={design.name}
								// video={design.video}
								image={design.image}
								description={design.tagline}
							/>
						</div>
					))}
					<Modal
						design={activeDesign}
						isOpen={activeDesign !== null}
						onCloseModal={() => setActiveDesign(null)}
					/>
				</div>
			</main>

			<style jsx>{`
				#design-page {
					min-height: 100vh;
				}
				h1 {
					display: inline-block;
					position: fixed;
					text-transform: uppercase;
					top: 90px;
					right: 0;
					left: 0;
					margin: 0 auto;
					text-align: center;
					font-size: 50px;
				}
				.container {
					display: flex;
					align-items: center;
					justify-content: space-evenly;
					flex-wrap: wrap;
					max-width: 80%;
					margin: 0 auto;
					margin-top: 200px;
					flex-direction: row;
				}

				.container :global(.card) {
					width: 25vw;
					margin-right: 20px;
					margin-bottom: 20px;
				}

				.container :global(.card:nth-of-type(3n)) {
					margin-right: 0px;
				}

				.DesignLinkCard {
					display: flex;
				}
				@media screen and (max-width: 690px) {
					h1 {
						font-size: 42px;
						margin-top: 100px;
						display: block;
						position: static;
					}
					.container :global(.card) {
						width: 100%;
						margin-right: 0;
					}
					.container {
						margin-top: 50px;
					}
				}
			`}</style>
		</>
	);
};

export default Designs;
