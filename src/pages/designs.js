import { useState } from "react";
import Head from "next/head";
import DesignLink from "src/components/DesignLink.js";
import Modal from "src/components/Modal.js";
import DESIGN_LIST from "src/data/design_list.json";
import Counter from "src/components/Counter.js";

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
				<Counter />
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
					animation: fade-down 0.7s cubic-bezier(0.57, 0.21, 0.69, 1.25);
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
					animation: fade-up 0.7s cubic-bezier(0.57, 0.21, 0.69, 1.25);
				}

				@keyframes fade-up {
					0% {
						opacity: 0;
						transform: translateY(50px);
					}
					100% {
						opacity: 100;
					}
				}
				@keyframes fade-down {
					0% {
						opacity: 0;
						transform: translateY(-50px);
					}
					100% {
						opacity: 100;
					}
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
