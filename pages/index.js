import { PureComponent } from "react";
import Head from "next/head";
import Navigation from "components/Navigation.js";

class Home extends PureComponent {
	render() {
		return (
			<React.Fragment>
				{/* Meta content */}
				<Head>
					<title>
						Toronto based Web Design & Development - Snakebyte Studios
					</title>
					<meta
						name="description"
						content="Snakebyte Studios is a Toronto based digital agency focused on
						delivering quality web development and graphic design
						experiences for your brand."
					/>
				</Head>

				{/* Page content */}
				<main id="home-page">
					<div id="logo">
						<div className="brandmark" />
						<h1>Snakebyte Studios</h1>
					</div>

					<p className="description">
						Snakebyte Studios is a Toronto based digital agency focused on
						delivering quality web&nbsp;development and graphic&nbsp;design
						experiences for your brand.
					</p>

					<Navigation showHomeLink={false} />
				</main>

				{/* CSS */}
				<style jsx>{`
					main {
						display: flex;
						flex-direction: column;
						height: 100vh;
						justify-content: center;
						align-items: center;
					}

					#logo {
						display: flex;
						align-items: center;
					}

					#logo .brandmark {
						height: 60px;
						width: 70px;
						background-color: black;
					}

					#logo h1 {
						font-size: 60px;
						margin-left: 10px;
					}

					#home-page :global(nav) {
						margin-top: 40px;
					}

					#home-page :global(nav a) {
						padding: 20px;
						text-decoration: none;
						color: black;
						text-transform: uppercase;
						margin-right: 40px;
						font-weight: bold;
						font-size: 20px;
						transition: 0.2s;
					}

					#home-page :global(nav a:hover) {
						opacity: 0.6;
					}

					#home-page :global(nav a:last-of-type) {
						margin-right: 0;
					}

					.description {
						font-size: 16px;
						margin-top: 50px;
						max-width: 700px;
						text-align: center;
						line-height: 1.6em;
						opacity: 0.7;
					}
				`}</style>
			</React.Fragment>
		);
	}
}

export default Home;
