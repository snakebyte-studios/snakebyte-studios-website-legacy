import Navigation from "components/Navigation.js";

const TRANSITION_TIME = "350ms";

const NavDrawer = ({ isOpen, onCloseNav }) => (
	<div
		className={isOpen ? "nav-drawer-container open" : "nav-drawer-container"}
	>
		<aside className="nav-drawer">
			<div onClick={onCloseNav}>
				<Navigation showHomeLink={true} />
			</div>
		</aside>

		<div className="nav-drawer-shade" onClick={onCloseNav} />

		<style jsx>{`
			.nav-drawer {
				width: 300px;
				height: 100vh;
				max-width: 80vw;
				position: fixed;
				top: 0;
				right: 0;
				background-color: #ccc;
				z-index: 50;
				box-shadow: 0 0 40px rgba(0, 0, 0, 0);
				border-top: 100px solid black;
				transform: translate3d(100%, 0, 0);
				transition: ${TRANSITION_TIME};
				will-change: transform;
			}

			.nav-drawer-shade {
				position: fixed;
				top: 0;
				left: 0;
				width: 100vw;
				height: 100vh;
				z-index: 45;
				background-color: rgba(0, 0, 0, 0.45);
				pointer-events: none;
				transition: ${TRANSITION_TIME};
				opacity: 0;
				will-change: opacity;
			}

			.open .nav-drawer {
				transform: none;
				box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
			}

			.open .nav-drawer-shade {
				opacity: 1;
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
				transition: ${TRANSITION_TIME};
			}

			.nav-drawer :global(nav a:hover),
			.nav-drawer :global(nav a.active) {
				background-color: rgba(255, 255, 255, 0.3);
			}
		`}</style>
	</div>
);

export default NavDrawer;
