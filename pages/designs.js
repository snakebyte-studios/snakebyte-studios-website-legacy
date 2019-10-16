import { useState } from "react";
import Head from "next/head";
import DesignLink from "components/DesignLink.js";
import Modal from "components/Modal.js";
import DESIGN_LIST from "data/design_list.json";

DESIGN_LIST.forEach(design => {
	design.show = false;
});

const Designs = () => {
	const [modalOpen, setModalOpen] = useState(false);

	const [selectedCardId, setSelectedCardId] = useState(false);

	// const selectedCard = DESIGN_LIST.find(post => post.id == selectedCardId);

	function handleClick(id) {
		let selectedDesign = DESIGN_LIST.find(post => post.id == selectedCardId);
		// eslint-disable-next-line no-debugger
		debugger;
		selectedDesign.show = true;
		// setModalOpen(true);
		setSelectedCardId(selectedDesign);
	}

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
				<div className="container">
					{DESIGN_LIST.map(design => (
						<div
							className="DesignLinkCard"
							onClick={() => handleClick(design.id)}
						>
							<DesignLink
								name={design.name}
								// video={design.video}
								image={design.image}
								description={design.tagline}
							/>
							<Modal
								data={selectedCardId}
								isOpen={design.show}
								onCloseModal={() => (design.show = false)}
							/>
						</div>
					))}
				</div>
			</main>

			<style jsx>{`
				#design-page {
					min-height: 100vh;
				}

				.container {
					display: flex;
					align-items: center;
					justify-content: space-evenly;
					flex-wrap: wrap;
					max-width: 80%;
					margin: 0 auto;
					margin-top: 100px;
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
					.container :global(.card) {
						width: 100%;
					}
				}
			`}</style>
		</>
	);
};

export default Designs;
