import { memo } from "react";
import Head from "next/head";
// eslint-disable-next-line no-unused-vars
import Navigation from "components/Navigation.js";
import ServiceBox from "components/ServiceBox.js";
import Fade from "react-reveal/Fade";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
			<AnchorLink href="#front-two">
				<div className="scroll-down">
					<i className="chevron bottom" />
				</div>
			</AnchorLink>
			{/* <a className="scroll-down" href="#front-two">
				<i className="chevron bottom" />
			</a> */}
		</main>

		<section id="front-two">
			<Fade bottom>
				<div className="bottom-page">
					<h2 className="typing-text">
						We're here for <span className="you">you.</span>
					</h2>
				</div>
			</Fade>
			<div>
				<Fade bottom>
					<p className="description">
						Snakebyte Studios is a Toronto based digital agency focused on
						delivering quality web&nbsp;development and graphic&nbsp;design
						experiences for your brand.
					</p>
				</Fade>
			</div>

			<div className="services">
				<Fade bottom>
					<ServiceBox
						type="Website Design"
						style="service design"
						services={[
							"Website Design",
							"Mobile Design",
							"Logo Design",
							"Graphic Design"
						]}
						image="/static/images/home/design.svg"
					/>
					<ServiceBox
						type="Web Development"
						style="service dev"
						services={[
							"Responsive Website",
							"React Development",
							"Mobile Development",
							"Custom Web Development"
						]}
						image="/static/images/home/development.svg"
					/>
				</Fade>
			</div>
		</section>

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
				flex-direction: column;
				align-items: center;
				min-width: 700px;
			}

			#logo .brandmark {
				width: 240px;
				position: relative;
				left: -15px;
				animation: fade-down 1s cubic-bezier(0.57, 0.21, 0.69, 1.25);
			}

			#logo .logo-text {
				margin-top: 10px;
				width: 450px;
				letter-spacing: 40;
				animation: fade-up 1s cubic-bezier(0.57, 0.21, 0.69, 1.25);
			}

			@keyframes fade-down {
				0% {
					opacity: 0;
					transform: translateY(-50px);
				}
				100% {
					opacity: 100;
				}
			}

			@keyframes fade-up {
				0% {
					opacity: 0;
					transform: translateY(50px);
				}
				100% {
					opacity: 100;
				}
			}

			@keyframes nav-fade-up {
				0% {
					opacity: 0;
				}
				50% {
					opacity: 0;
					transform: translateY(50px);
				}
				100% {
					opacity: 100;
				}
			}

			#home-page :global(nav) {
				margin-top: 60px;
				animation: nav-fade-up 1s cubic-bezier(0.25, 0.75, 0.5, 1.25);
				z-index: 2;
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
			.scroll-down {
				position: absolute;
				display: flex;
				align-items: flex-end;
				animation: chevron-fade-down 1s cubic-bezier(0.57, 0.21, 0.69, 1.25);
				bottom: 35px;
			}
			.scroll-down .chevron {
				animation: pulse 2s infinite;
				color: #ee7100;
			}

			.chevron::before {
				border-style: solid;
				border-width: 0.25em 0.25em 0 0;
				content: "";
				display: inline-block;
				height: 20px;
				position: relative;
				-webkit-transform: rotate(-45deg);
				-ms-transform: rotate(-45deg);
				transform: rotate(-45deg);
				vertical-align: top;
				width: 20px;
			}
			.chevron.bottom:before {
				top: 0;
				-webkit-transform: rotate(135deg);
				-ms-transform: rotate(135deg);
				transform: rotate(135deg);
			}
			@keyframes chevron-fade-down {
				0% {
					opacity: 0;
					transform: translateY(-10px);
				}
				100% {
					opacity: 100;
				}
			}

			@-webkit-keyframes pulse {
				0% {
					-webkit-transform: translate(0, 0);
					transform: translate(0, 0);
				}
				50% {
					-webkit-transform: translate(0, 10px);
					transform: translate(0, 10px);
				}
				100% {
					-webkit-transform: translate(0, 0);
					transform: translate(0, 0);
				}
			}

			@keyframes pulse {
				0% {
					-webkit-transform: translate(0, 0);
					transform: translate(0, 0);
				}
				50% {
					-webkit-transform: translate(0, 10px);
					transform: translate(0, 10px);
				}
				100% {
					-webkit-transform: translate(0, 0);
					transform: translate(0, 0);
				}
			}

			.typing-text {
				font-size: 32px;
				margin-top: 50px;
				max-width: 700px;
				text-align: center;
				line-height: 1.6em;
				overflow: hidden;
				border-right: 0.15em solid #ee7100;
				white-space: nowrap;
				animation: typing 3.5s steps(30, end),
					blink-caret 0.5s step-end infinite;
			}

			.description {
				font-size: 16px;
				margin-top: 25px;
				max-width: 700px;
				text-align: center;
				line-height: 1.6em;
				opacity: 0.7;
			}

			.you {
				font-size: 32px;
				color: #ee7100;
			}

			#front-two {
				display: flex;
				flex-direction: column;
				padding-bottom: 200px;
				align-items: center;
				transition: all 1s ease-in;
			}
			.services {
				display: flex;
				flex-direction: row !important;
				margin-top: 50px;
				margin-left: 50px;
			}

			/* The typing effect */
			@keyframes typing {
				0% {
					width: 0;
				}
				50% {
					width: 0;
				}
				100% {
					width: 270px;
				}
			}

			/* The typewriter cursor effect */
			@keyframes blink-caret {
				0% {
					border-color: transparent;
				}
				25% {
					border-color: transparent;
				}
				50% {
					border-color: #ee7100;
				}
			}

			@media screen and (max-width: 690px) {
				main {
					overflow: hidden;
				}

				#logo .brandmark {
					height: 30vw;
					left: 0.5vw;
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
				.services {
					display: flex;
					flex-direction: column !important;
					margin-bottom: 50px;
					margin-left: 0px;
				}
				#front-two {
					height: 100%;
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
