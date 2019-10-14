import { useEffect } from "react";
import { KEYS } from "global/constants.js";

const Modal = ({ isOpen, onCloseModal, children }) => {
	// eslint-disable-next-line no-console
	console.log("children: ", children);

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
				<div className="modalConatiner">
					<div className="left">
						<video loop autoPlay muted width="">
							<source src={children.video} type="video/mp4" />
						</video>
					</div>
					<div className="right">
						<h1 className="title">{children.name}</h1>
						<h2 className="tagline">{children.tagline}</h2>
						<p className="tools">{children.tools}</p>
						<p className="desc">{children.description}</p>
					</div>
				</div>
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
					background-color: #121212;
					position: fixed;
					z-index: 40;
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
				}

				.modalConatiner video {
					width: 90%;
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
		</div>
	);
};

export default Modal;
