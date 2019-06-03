import App, { Container } from "next/app";
import Link from "next/link";
import { PageTransition } from "next-page-transitions";
import "global/styles/_reset.css";
import "global/styles/style.css";
import { KEYS } from "global/constants.js";
import NavDrawer from "components/NavDrawer.js";

class MainApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	constructor(props) {
		super(props);
		this.state = {
			navDrawerOpen: false
		};
	}

	openNavDrawer = () => {
		this.setState({ navDrawerOpen: true });
	};

	closeNavDrawer = () => {
		this.setState({ navDrawerOpen: false });
	};

	render() {
		const { navDrawerOpen } = this.state;
		const { Component, router, pageProps } = this.props;
		const { openNavDrawer, closeNavDrawer } = this;

		return (
			<Container>
				<main
					tabIndex="0"
					onKeyDown={e => (e.keyCode === KEYS.ESC ? closeNavDrawer() : null)}
				>
					{/* Header */}
					<header>
						<Link href="/">
							<a>
								<div className="brandmark" />
							</a>
						</Link>

						<div className="menu-button" onClick={openNavDrawer}>
							<span />
						</div>
					</header>

					{/* Pages render here */}
					<PageTransition
						id="page-transition"
						timeout={100}
						classNames="page-transition"
					>
						<Component {...pageProps} key={router.route} />
					</PageTransition>

					{/* Navigation Drawer Sidemenu */}
					<NavDrawer isOpen={navDrawerOpen} onCloseNav={closeNavDrawer} />

					{/* Footer */}
					<footer>
						<div className="copyright">
							© {new Date().getFullYear()} All rights reserved
						</div>
						<div className="social">
							<a
								href="https://www.instagram.com/snakebyte.studios/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src="/static/images/instagram.svg" />
							</a>
						</div>
					</footer>

					{/* CSS for main app layout */}
					<style jsx>{`
						/* Header */
						header {
							display: flex;
							justify-content: space-between;
							align-items: center;
							padding: 20px;
							position: fixed;
							top: 0;
							left: 0;
							height: 90px;
							width: 100vw;
							outline: 0;
						}

						header .brandmark {
							height: 40px;
							width: 50px;
							background-color: black;
						}

						.menu-button {
							padding: 25px 15px;
							cursor: pointer;
							transition: 0.2s;
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
							background-color: black;
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

						/* Main Page */
						#page-transition {
							will-change: opacity;
						}

						:global(.page-transition-enter) {
							opacity: 0;
						}

						:global(.page-transition-enter-active) {
							opacity: 1;
							transition: opacity 100ms;
						}

						:global(.page-transition-exit) {
							opacity: 1;
						}

						:global(.page-transition-exit-active) {
							opacity: 0;
							transition: opacity 100ms;
						}

						/* Footer */
						footer {
							display: flex;
							justify-content: space-between;
							align-items: center;
							position: fixed;
							bottom: 0;
							left: 0;
							width: 100vw;
							padding: 15px;
						}

						footer .copyright {
							opacity: 0.3;
							font-size: 12px;
						}

						footer .social a {
							padding: 10px;
							color: black;
						}

						footer .social img {
							height: 24px;
							width: 24px;
						}
					`}</style>
				</main>
			</Container>
		);
	}
}

export default MainApp;
