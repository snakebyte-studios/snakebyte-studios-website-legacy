import Navigation from "components/Navigation.js";

const DRAWER_TRANSITION_TIME = 350;

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
				background-color: var(--site-bg-color);
				z-index: 50;
				box-shadow: 0 0 40px rgba(0, 0, 0, 0);
				border-top: 100px solid black;
				transform: translate3d(100%, 0, 0);
				transition: ${DRAWER_TRANSITION_TIME}ms;
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
				transition: ${DRAWER_TRANSITION_TIME}ms;
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
				color: var(--site-text-color);
				font-weight: bold;
				transition: var(--transition-time);
			}

			.nav-drawer :global(nav a:hover),
			.nav-drawer :global(nav a.active) {
				background-color: rgba(255, 255, 255, 0.7);
			}
		`}</style>
	</div>
);

export default NavDrawer;
