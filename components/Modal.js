import { useEffect } from "react";
import { KEYS } from "global/constants.js";

const Modal = ({ isOpen, onCloseModal, children }) => {
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
				{children}
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
					background-color: #1f1f1f;
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
			`}</style>
		</div>
	);
};

export default Modal;
