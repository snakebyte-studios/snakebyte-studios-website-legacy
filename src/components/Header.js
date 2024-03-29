import ActiveLink from "src/components/ActiveLink.js";

// eslint-disable-next-line no-unused-vars
const Header = ({ onMenuBtnClick }) => (
	<header>
		<ActiveLink href="/">
			<a>
				<img
					src="/images/snakebyte/logo.svg"
					className="brandmark"
					alt="Snakebyte Studios"
				/>
			</a>
		</ActiveLink>

		<div className="menu-button" onClick={onMenuBtnClick}>
			<span />
		</div>

		<style jsx>{`
			header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 20px;
				position: fixed;
				top: 0;
				left: 0;
				height: 80px;
				width: 100vw;
				z-index: 2;
				background-color: var(--site-bg-color);
			}

			header > :global(a) {
				transition: var(--transition-time);
			}

			header > :global(a.active) {
				opacity: 0;
				pointer-events: none;
			}

			header .brandmark {
				height: 40px;
				width: 50px;
			}

			.menu-button {
				padding: 25px 15px;
				cursor: pointer;
				transition: var(--transition-time);
				z-index: 100;
			}

			.menu-button:hover {
				opacity: 0.7;
			}

			.menu-button span,
			.menu-button span:before,
			.menu-button span:after {
				display: block;
				height: 5px;
				width: 30px;
				position: relative;
				background-color: var(--brand-orange);
			}

			.menu-button span:before {
				content: "";
				position: absolute;
				top: -10px;
			}

			.menu-button span:after {
				content: "";
				position: absolute;
				top: 10px;
			}

			@media screen and (max-width: 850px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
				header {
					height: 50px;
				}
			}
		`}</style>
	</header>
);

export default Header;
