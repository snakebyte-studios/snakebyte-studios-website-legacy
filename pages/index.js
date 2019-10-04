import { memo } from "react";
import Head from "next/head";
import Navigation from "components/Navigation.js";

const Index = () => (
	<>
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
				<img
					src="/static/images/snakebyte/logo.svg"
					className="brandmark"
					alt="Snakebyte Studios"
				/>
				<img
					src="/static/images/snakebyte/logo-text.svg"
					className="logo-text"
					alt="Snakebyte Studios"
				/>
			</div>
			<Navigation showHomeLink={false} tabbable={true} />

			<p className="description">
				Snakebyte Studios is a Toronto based digital agency focused on
				delivering quality web&nbsp;development and graphic&nbsp;design
				experiences for your brand.
			</p>
		</main>

		<style jsx>{`
			main {
				display: flex;
				flex-direction: column;
				height: 100vh;
				justify-content: center;
				align-items: center;
				background-image: url("/static/images/general/dreams.svg");
				background-repeat: no-repeat;
				background-position: center center;
			}

			#logo {
				display: flex;
				flex-direction: column;
				align-items: center;
				min-width: 700px;
			}

			#logo .brandmark {
				width: 240px;
				position: relative;
				left: -15px;
			}

			#logo .logo-text {
				margin-top: 10px;
				width: 450px;
			}

			#home-page :global(nav) {
				margin-top: 60px;
			}

			#home-page :global(nav a) {
				padding: 10px;
				text-decoration: none;
				color: var(--site-text-color);
				text-transform: uppercase;
				margin-right: 40px;
				font-weight: bold;
				font-size: 20px;
				border-radius: 100px;
				position: relative;
			}

			#home-page :global(nav a::before) {
				content: "";
				position: absolute;
				height: 3px;
				width: 0;
				display: block;
				margin-top: 5px;
				right: 0;
				bottom: 0;
				background: linear-gradient(0.06turn, #bf0500, #ff8700);
				transition: var(--transition-time);
			}

			#home-page :global(nav a:hover::before) {
				width: 100%;
				left: 0;
				background-color: white;
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
					height: 30vw;
					left: -3vw;
				}

				#logo .logo-text {
					width: 80vw;
				}

				.description {
					font-size: 14px;
					margin-top: 20px;
					padding: 0 20px;
				}

				#home-page :global(nav a) {
					padding: 10px;
					text-decoration: none;
					text-transform: uppercase;
					margin-right: 10px;
					font-weight: bold;
					font-size: 14px;
					transition: var(--transition-time);
				}
			}

			@media (orientation: portrait) {
				main {
					background-image: none;
				}
			}
		`}</style>
	</>
);

export default memo(Index);
