import App, { Container } from "next/app";
import { PageTransition } from "next-page-transitions";
import { KEYS } from "global/constants.js";
import Header from "components/Header.js";
import NavDrawer from "components/NavDrawer.js";
import Footer from "components/Footer.js";
import "global/styles/_reset.css";
import "global/styles/style.css";

const PAGE_TRANSITION_TIME = 150;

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
			</Container>
		);
	}
}

export default MainApp;
