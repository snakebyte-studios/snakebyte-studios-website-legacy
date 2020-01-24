import App from "next/app";
import Router from "next/router";
import { PageTransition } from "next-page-transitions";
import { KEYS, ANALYTICS_TRACKING_CODE } from "src/global/constants.js";
import Header from "src/components/Header.js";
import NavDrawer from "src/components/NavDrawer.js";
import Footer from "src/components/Footer.js";
import "src/global/styles/_reset.css";
import "src/global/styles/style.css";
import withGA from "next-ga";

const PAGE_TRANSITION_TIME = 150;

class MainApp extends App {
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
			<div>
				<div
					tabIndex="0"
					onKeyDown={e => (e.keyCode === KEYS.ESC ? closeNavDrawer() : null)}
				>
					{/* Header */}
					<Header onMenuBtnClick={openNavDrawer} />

					{/* Page Contents */}
					<PageTransition
						timeout={PAGE_TRANSITION_TIME}
						classNames="page-transition"
					>
						<Component {...pageProps} key={router.route} />
					</PageTransition>

					{/* Navigation Drawer (Side Menu) */}
					<NavDrawer isOpen={navDrawerOpen} onCloseNav={closeNavDrawer} />

					{/* Footer */}
					<Footer />
				</div>

				<style jsx>{`
					div {
						outline: 0;
					}

					:global(.page-transition-enter) {
						opacity: 0;
					}

					:global(.page-transition-enter-active) {
						opacity: 1;
						transition: opacity ${PAGE_TRANSITION_TIME}ms;
					}

					:global(.page-transition-exit) {
						opacity: 1;
					}

					:global(.page-transition-exit-active) {
						opacity: 0;
						transition: opacity ${PAGE_TRANSITION_TIME}ms;
					}
				`}</style>
			</div>
		);
	}
}

export default withGA(ANALYTICS_TRACKING_CODE, Router)(MainApp);
