import { useState } from "react";
import Head from "next/head";
import DesignLink from "components/DesignLink.js";
import Modal from "components/Modal.js";
import DESIGN_LIST from "data/design_list.json";

const Designs = () => {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			{/* Meta content */}
			<Head>
				<title>Designs - Snakebyte Studios</title>
				<meta
					name="description"
					content="" //TODO: Write Design meta description
				/>
			</Head>

			{/* Page content */}
			<main id="design-page">
				<div className="container">
					<div className="DesignLinkCard" onClick={() => setModalOpen(true)}>
						{DESIGN_LIST.map(design => (
							<DesignLink
								name={design.name}
								// video={design.video}
								image={design.image}
								description={design.description}
								notAVideo={design.notAVideo}
							/>
						))}
					</div>

					{/* <button
						onClick={() => setModalOpen(true)}
						style={{ backgroundColor: "var(--brand-orange)", padding: "10px" }}
					>
						Open Modal
					</button> */}
				</div>

				{DESIGN_LIST.map(design => (
					<Modal
						children={design}
						isOpen={modalOpen}
						onCloseModal={() => setModalOpen(false)}
					/>
				))}
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
				}

				.container :global(.DesignLinkCard:last-of-type) {
					margin-right: 10px;
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
					width: 100%;
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
