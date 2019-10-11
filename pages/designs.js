import { useState } from "react";
import Head from "next/head";
import DesignLink from "components/DesignLink.js";
import Modal from "components/Modal.js";

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
					<div className=".DesignLinkCard" onClick={() => setModalOpen(true)}>
						<DesignLink
							name="Luxury Car Rental Mockup"
							image="../static/images/designPics/luxuryCarRental.jpg"
							description="This mockup was for a Luxury Car Rental app using vibrant and luxirious photos."
							notAVideo="hidden"
						/>
					</div>

					<div className=".DesignLinkCard" onClick={() => setModalOpen(true)}>
						<DesignLink
							name="Vacation Getaway Mockup"
							video="../static/images/designPics/travelyMockupVideo.mp4"
							description="This mockup displays the top places to visit during the cold times, in a beautiful design with smooth animations."
						/>
					</div>

					{/* <button
						onClick={() => setModalOpen(true)}
						style={{ backgroundColor: "var(--brand-orange)", padding: "10px" }}
					>
						Open Modal
					</button> */}
				</div>

				<Modal isOpen={modalOpen} onCloseModal={() => setModalOpen(false)}>
					<div className="modalConatiner">
						<div className="left">
							<video loop autoPlay muted width="250">
								<source
									src="../static/images/designPics/appPrototype.mp4"
									type="video/mp4"
								/>
							</video>
						</div>
						<div className="right">
							<h1 className="title">Luxury Car Rental App</h1>
							<h2 className="tagline">A beautiful UI to rent high end cars</h2>
							<p className="tools">Tools Used: Adobe XD and Illustrator</p>
							<p className="desc">
								This mockup was for a Luxury Car Rental app using vibrant and
								luxirious photos.
							</p>
						</div>
					</div>
				</Modal>
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
					width: 100%;
				}

				.modalConatiner {
					display: grid;
					grid-template-columns: 60% 40%;
				}

				.left {
					justify-content: center;
					display: flex;
				}
				.title {
					font-size: 30px;
					color: var(--brand-orange);
					margin-bottom: 5px;
				}
				.tagline {
					margin-bottom: 5px;
				}
				.tools {
					font-size: 12px;
					margin-bottom: 10px;
					opacity: 0.8;
				}
				@media screen and (max-width: 690px) {
					.container :global(.card) {
						width: 100%;
					}
					.modalConatiner {
						display: flex;
						flex-direction: column-reverse;
					}
					.modalConatiner video {
						width: 75%;
					}

					.right {
						margin-bottom: 1em;
					}

					.title {
						font-size: 30px;
						color: var(--brand-orange);
						margin-bottom: 5px;
					}
				}
			`}</style>
		</>
	);
};

export default Designs;
