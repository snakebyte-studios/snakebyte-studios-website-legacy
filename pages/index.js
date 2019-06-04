import { memo } from "react";
import Head from "next/head";
import Navigation from "components/Navigation.js";

const Index = () => (
	<React.Fragment>
		{/* Meta content */}
		<Head>
			<title>Toronto based Web Design & Development - Snakebyte Studios</title>
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
				background-color: var(--site-text-color);
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
				color: var(--site-text-color);
				text-transform: uppercase;
				margin-right: 40px;
				font-weight: bold;
				font-size: 20px;
				transition: var(--transition-time);
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

			@media screen and (max-width: 690px) {
				#logo .brandmark {
					height: 30px;
					width: 40px;
				}

				#logo h1 {
					font-size: 30px;
				}

				.description {
					font-size: 14px;
					margin-top: 20px;
					padding: 0 20px;
				}

				#home-page :global(nav a) {
					padding: 10px;
					text-decoration: none;
					color: black;
					text-transform: uppercase;
					margin-right: 10px;
					font-weight: bold;
					font-size: 14px;
					transition: var(--transition-time);
				}
			}
		`}</style>
	</React.Fragment>
);

export default memo(Index);
