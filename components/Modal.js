import { useEffect } from "react";
import { KEYS } from "global/constants.js";
import ToolsUsed from "components/ToolsUsed.js";

const Modal = ({ isOpen, onCloseModal, design }) => {
	// Handle ESC key press (without needing the element to be focused first)
	useEffect(() => {
		const closeOnEsc = e => (e.keyCode === KEYS.ESC ? onCloseModal() : null);
		document.addEventListener("keydown", closeOnEsc);
		return () => document.removeEventListener("keydown", closeOnEsc);
	}, [onCloseModal]);

	return (
		<div
			className={isOpen ? "modal-shade" : "modal-shade hidden"}
			onClick={onCloseModal}
		>
			<div className="modal" onClick={e => e.stopPropagation()}>
				<span className="close-btn" onClick={onCloseModal}>
					✕
				</span>
				{design && (
					<div className="modalConatiner">
						<div className="left">
							<video loop autoPlay muted width="">
								<source src={design.video} type="video/mp4" />
							</video>
						</div>

						<div className="right">
							<h1 className="title">{design.name}</h1>
							<p className="tagline">{design.tagline}</p>
							<hr />
							<div className="box tools">
								<h1 className="box-titles">Tools Used:</h1>
								<ToolsUsed tools={design.tools} />
							</div>
							<div className="box desc">
								<h1 className="box-titles">Description:</h1>
								<p className="desc">{design.description}</p>
							</div>
						</div>
					</div>
				)}
			</div>

			<style jsx>{`
				.modal-shade {
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: rgba(0, 0, 0, 0.45);
					position: fixed;
					top: 0;
					left: 0;
					height: 100vh;
					width: 100vw;
					z-index: 35;
					transition: var(--transition-time);
				}

				.modal-shade.hidden {
					opacity: 0;
					pointer-events: none;
				}

				.modal {
					width: 80vw;
					height: 80vh;
					position: relative;
					padding: 40px;
					background-color: #080808;
					position: fixed;
					z-index: 40;
					border-radius: 10px;
				}

				.close-btn {
					position: absolute;
					padding: 25px 30px;
					cursor: pointer;
					top: 0px;
					right: 0px;
					font-size: 24px;
					font-weight: 100;
					opacity: 0.7;
					transition: 0.2s;
				}

				.close-btn:hover {
					opacity: 1;
				}

				.modalConatiner {
					display: grid;
					grid-template-columns: 60% 40%;
					height: 100%;
				}

				.modalConatiner video {
					width: 90%;
					max-height: 100%;
				}

				.left {
					justify-content: center;
					align-items: flex-start;
					display: flex;
				}
				.title {
					font-size: 35px;
					color: var(--brand-orange);
					margin-bottom: 5px;
				}
				.tagline {
					margin-bottom: 20px;
					font-size: 12px;
				}
				.tools {
					margin-bottom: 20px;
				}
				hr {
					width: 100%;
					border: 0.5px solid white;
					margin-bottom: 20px;
				}
				.box-titles {
					color: var(--brand-orange);
					margin-bottom: 15px;
				}
				.box {
					background-color: rgba(2, 2, 2, 0.5);
					padding: 15px;
					border: none;
					border-radius: 10px;
				}
				.desc {
					height: 40%;
					font-size: 15px;
					line-height: 20px;
				}

				@media screen and (max-width: 690px) {
					.modalConatiner {
						display: flex;
						flex-direction: column;
						overflow: scroll;
					}
					.modalConatiner video {
						width: 100%;
						margin-bottom: 10px;
					}

					.right {
						margin-bottom: 1em;
					}

					.title {
						font-size: 20px;
						color: var(--brand-orange);
						margin-bottom: 5px;
					}
				}
			`}</style>
		</div>
	);
};

export default Modal;
