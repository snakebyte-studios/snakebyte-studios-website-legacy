import { Component } from "react";
import Navigation from "components/Navigation.js";

class NavDrawer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { isOpen, onCloseNav } = this.props;

		return (
			<div
				className={
					isOpen ? "nav-drawer-container open" : "nav-drawer-container closed"
				}
			>
				<aside className="nav-drawer">
					<div onClick={onCloseNav}>
						<Navigation showHomeLink={true} />
					</div>
				</aside>

				<div className="nav-drawer-shade" onClick={onCloseNav} />

				<style jsx>{`
					.nav-drawer {
						width: 20vw;
						height: 100vh;
						position: fixed;
						right: -20vw;
						top: 0;
						background-color: #ccc;
						z-index: 50;
						transition: 0.2s;
						border-top: 70px solid black;
					}

					.nav-drawer-shade {
						position: fixed;
						top: 0;
						left: 0;
						width: 100vw;
						height: 100vh;
						z-index: 45;
						background-color: transparent;
						pointer-events: none;
						transition: 0.2s;
					}

					.open .nav-drawer {
						right: 0;
						box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
					}

					.open .nav-drawer-shade {
						background-color: rgba(0, 0, 0, 0.45);
						pointer-events: auto;
					}

					.nav-drawer :global(nav) {
						display: flex;
						flex-direction: column;
						margin-top: 20px;
					}

					.nav-drawer :global(nav a) {
						padding: 30px 40px;
						text-transform: uppercase;
						color: black;
						font-weight: bold;
						transition: 0.2s;
					}

					.nav-drawer :global(nav a:hover),
					.nav-drawer :global(nav a.active) {
						background-color: rgba(255, 255, 255, 0.3);
					}
				`}</style>
			</div>
		);
	}
}

export default NavDrawer;
