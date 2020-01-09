import { memo } from "react";
import Link from "next/link";
import Head from "next/head";
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
			<Link href="/">
				<img
					src="/static/images/snakebyte/logo.svg"
					className="logo"
					alt="Snakebyte Studios"
				/>
			</Link>
			<Navigation showHomeLink={false} tabbable={true} />
			<AnchorLink href="#front-two">
				<div className="scroll-down">
					<i className="chevron bottom" />
				</div>
			</AnchorLink>

			<svg
				version="1.1"
				className="top-left"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				viewBox="0 0 885.7 531.9"
				style={{ enableBackground: "new 0 0 885.7 531.9" }}
			>
				<linearGradient
					id="SVGID_1_"
					gradientUnits="userSpaceOnUse"
					x1="432.8525"
					y1="512.1655"
					x2="432.8525"
					y2="6.6855"
				>
					<stop offset="0" style={{ stopColor: "#BE0C00" }} />
					<stop offset="1" style={{ stopColor: "#F99300" }} />
				</linearGradient>
				<linearGradient
					id="SVGID_2_"
					gradientUnits="userSpaceOnUse"
					x1="434.319"
					y1="530.1446"
					x2="434.319"
					y2="1.6855"
				>
					<stop offset="0" style={{ stopColor: "#BE0C00" }} />
					<stop offset="1" style={{ stopColor: "#F99300" }} />
				</linearGradient>
				<path
					className="st0"
					d="M6.3,512.2V6.7h853c0,0-107.6,224.9-402.9,221.5C456.5,228.1,190,207.5,6.3,512.2z"
				/>
			</svg>

			<svg
				version="1.1"
				className="top-right"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				viewBox="0 0 885.7 531.9"
				style={{ enableBackground: "new 0 0 885.7 531.9" }}
			>
				<linearGradient
					id="SVGID_1_"
					gradientUnits="userSpaceOnUse"
					x1="432.8525"
					y1="512.1655"
					x2="432.8525"
					y2="6.6855"
				>
					<stop offset="0" style={{ stopColor: "#BE0C00" }} />
					<stop offset="1" style={{ stopColor: "#F99300" }} />
				</linearGradient>
				<linearGradient
					id="SVGID_2_"
					gradientUnits="userSpaceOnUse"
					x1="434.319"
					y1="530.1446"
					x2="434.319"
					y2="1.6855"
				>
					<stop offset="0" style={{ stopColor: "#BE0C00" }} />
					<stop offset="1" style={{ stopColor: "#F99300" }} />
				</linearGradient>
				<path
					className="st0"
					d="M6.3,512.2V6.7h853c0,0-107.6,224.9-402.9,221.5C456.5,228.1,190,207.5,6.3,512.2z"
				/>
			</svg>

			<div className="front-page-content container">
				<div className="left content">
					<h1 className="title">
						Developing <span className="highlighted">your</span> dreams.
					</h1>
					{/* <h2 className="typing-text title">
						Developing <span className="highlighted">your</span> dreams.
					</h2> */}
					<p className="description">
						We are a Toronto based digital agency focused on delivering quality
						Web Development, Design and Digital Marketing to improve your brands
						online presence.
					</p>
					<Link href="/hire">
						<p className="cta">GET IN TOUCH</p>
					</Link>
				</div>
				<div className="right content">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 718.61 89.65">
						<title>Snakebyte Studios</title>
						<g id="Final_Logo" data-name="Final Logo">
							<path
								className="cls-1"
								d="M11.17,52.2H23.71c.06,3.8,3.17,6.27,8.61,6.27,4.31,0,7.1-1.58,7.1-4.37,0-3.29-3.74-4.05-8.36-4.68-7.79-1.08-19.58-2-19.58-13.68,0-9,7.73-14.83,19.7-14.83s20.08,6.47,20.08,15.84H39.16c0-4-3-6.27-7.53-6.27-4.25,0-6.78,1.77-6.78,4.31,0,3.42,4.5,4,9.75,4.75,7.73,1.14,18.18,2.78,18.18,13.74,0,9-8.3,14.82-21,14.82C19.4,68.1,11.17,61.58,11.17,52.2Z"
							/>
							<path
								className="cls-1"
								d="M58.42,21.8H72.74L87.62,49.92h.63V21.8h12.48V67.15H86.42L71.53,39.09H70.9V67.15H58.42Z"
							/>
							<path
								className="cls-1"
								d="M119.23,21.8h19.64l14.18,45.35H139.31l-2.15-6.9H120.88l-2.16,6.9H105Zm15.33,29-5.2-17.61h-.63l-5.19,17.61Z"
							/>
							<path
								className="cls-1"
								d="M157.3,21.8h13.37V39.47h.63L183.78,21.8h15.77L182.89,43.4l16.85,23.75H184L171.3,47.83h-.63V67.15H157.3Z"
							/>
							<path
								className="cls-1"
								d="M203.73,21.8h34.9V32.32h-22v7.6h20.78v8.67H216.65v8h22.62V67.15H203.73Z"
							/>
							<path
								className="cls-1"
								d="M244.72,21.8H268c10.71,0,17,4.94,17,12.54a9.72,9.72,0,0,1-6.59,9.38v.63a10.61,10.61,0,0,1,7.86,10.58c0,7.79-6.53,12.22-17.11,12.22H244.72ZM265.36,40c3.42,0,5.83-1.77,5.83-4.31s-2.41-4.24-5.83-4.24h-7.28V40Zm.89,17.54c3.55,0,6.21-2,6.21-4.68s-2.66-4.63-6.21-4.63h-8.17v9.31Z"
							/>
							<path
								className="cls-1"
								d="M301.54,51.7,285.76,21.8h13.88L307.87,40h.63l7.73-18.24h14.06L314.9,51.7V67.15H301.54Z"
							/>
							<path
								className="cls-1"
								d="M345.69,32.76H331.5v-11h41.74v11H359.05V67.15H345.69Z"
							/>
							<path
								className="cls-1"
								d="M377.48,21.8h34.9V32.32h-22v7.6h20.77v8.67H390.41v8H413V67.15H377.48Z"
							/>
							<path
								className="cls-1"
								d="M422.27,52.65H428c.06,6.9,4.94,11,13.3,11,7.28,0,11.53-3.17,11.53-8.17,0-6.15-6.21-7.16-12.92-8.24C431.83,46,423,43.91,423,34.22c0-8,6.15-13.31,16.92-13.31,10.95,0,17.6,5.71,17.67,15.14H452C452,29.72,447.54,26,439.88,26c-7.22,0-11.15,3.11-11.15,7.92,0,5.89,5.95,7,12.54,8,8.11,1.33,17.29,3.1,17.29,13.24,0,8.36-6.4,13.62-17.35,13.62C429.49,68.74,422.27,62.59,422.27,52.65Z"
							/>
							<path
								className="cls-1"
								d="M476.36,27.57H461.6V22.5H497v5.07H482.13V67.15h-5.77Z"
							/>
							<path
								className="cls-1"
								d="M503.35,50V22.5h5.83V50c0,8,5.25,13.68,12.54,13.68S534.19,58,534.19,50V22.5H540V50c0,10.89-7.6,18.75-18.24,18.75S503.35,60.88,503.35,50Z"
							/>
							<path
								className="cls-1"
								d="M551.68,22.5H566c15.46,0,25.72,8.8,25.72,22.29S581.45,67.15,566,67.15H551.68ZM566,62.09c12,0,20-6.59,20-17.3s-8.11-17.22-20-17.22h-8.55V62.09Z"
							/>
							<path className="cls-1" d="M601,22.5h5.77V67.15H601Z" />
							<path
								className="cls-1"
								d="M616,44.79c0-13.93,10-23.88,24.13-23.88s24.13,10,24.13,23.88-10,23.95-24.13,23.95S616,58.86,616,44.79Zm42.43,0c0-10.95-7.6-18.81-18.3-18.81S621.8,33.84,621.8,44.79s7.66,18.88,18.37,18.88S658.47,55.75,658.47,44.79Z"
							/>
							<path
								className="cls-1"
								d="M671.15,52.65h5.7c.06,6.9,4.94,11,13.3,11,7.28,0,11.53-3.17,11.53-8.17,0-6.15-6.21-7.16-12.93-8.24-8-1.26-16.91-3.35-16.91-13,0-8,6.15-13.31,16.91-13.31,11,0,17.61,5.71,17.68,15.14h-5.58c0-6.33-4.43-10.07-12.1-10.07-7.22,0-11.14,3.11-11.14,7.92,0,5.89,5.95,7,12.54,8,8.11,1.33,17.29,3.1,17.29,13.24,0,8.36-6.4,13.62-17.36,13.62C678.37,68.74,671.15,62.59,671.15,52.65Z"
							/>
						</g>
					</svg>
				</div>
			</div>
		</main>

		<section id="front-two">
			<div className="second-page-content container">
				<Fade left>
					<h1 className="title">
						We are here to help{" "}
						<span className="highlighted">your brand grow.</span>
					</h1>
					<p className="description">
						Here at Snakebyte Studios, we understand the importance of your
						brands recognition in the digital market space. This is why we work
						side by side with you to help you get your business where it should
						be, on the front page of Google.
					</p>
				</Fade>

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
						<ServiceBox
							type="Search Engine Optimization"
							style="service seo"
							services={[
								"Organic Results",
								"First Page Ranking",
								"Quality of Traffic",
								"Quantity of Traffic"
							]}
							image="/static/images/home/seo.svg"
						/>
					</Fade>
				</div>
			</div>

			<Fade bottom>
				<div className="quote-box">
					<h1 className="title quote">
						<span className="quotation-mark quotation-mark-top">“</span>
						The best marketing doesn’t feel like marketing,
						<br />
						it’s simply a solution to your problem
						<span className="quotation-mark quotation-mark-bottom">”</span>
					</h1>
				</div>
			</Fade>
		</section>

		<section className="five-steps">
			<h1 className="title">Our Process</h1>

			<div className="process">
				<div className="process-left">
					<Fade left>
						<div className="snake">
							<h1>Strategy Development</h1>
						</div>
					</Fade>
					<Fade top>
						<p>
							We work with you and come up with a detailed plan of action to
							transform your online presence into a dominating force using our
							digital marketing solutions. We conduct research to see the best
							approach your brand should take in your given market, and the best
							avenues to operate in.
						</p>
					</Fade>
				</div>

				<div className="process-right">
					<Fade bottom>
						<img
							src="/static/images/home/strategyDevelopment.svg"
							alt="Strategy Development"
						/>
					</Fade>
				</div>
			</div>

			<div className="process inverted-process">
				<div className="inverted-process-right">
					<Fade right>
						<div className="snake inverted-snake">
							<h1>Design</h1>
						</div>
					</Fade>
					<Fade top>
						<p>
							Each aspect of your brand is strategically developed in a way
							which is responsive in all possible screen sizes, user friendly
							and follows the general UX and UI rules. Our sites are also custom
							developed using modern web technologies to provide you with the
							best solution to establish your brands online presence.
						</p>
					</Fade>
				</div>

				<div className="inverted-process-left">
					<Fade bottom>
						<img
							src="/static/images/home/strategyDevelopment.svg"
							alt="Strategy Development"
						/>
					</Fade>
				</div>
			</div>

			<div className="process">
				<div className="process-left">
					<Fade left>
						<div className="snake">
							<h1>Development</h1>
						</div>
					</Fade>
					<Fade top>
						<p>
							Each aspect of your brand is strategically developed in a way
							which is responsive in all possible screen sizes, user friendly
							and follows the general UX and UI rules. Our sites are also custom
							developed using modern web technologies to provide you with the
							best solution to establish your brands online presence.
						</p>
					</Fade>
				</div>

				<div className="process-right">
					<Fade bottom>
						<img
							src="/static/images/home/strategyDevelopment.svg"
							alt="Strategy Development"
						/>
					</Fade>
				</div>
			</div>

			<div className="process inverted-process">
				<div className="inverted-process-right">
					<Fade right>
						<div className="snake inverted-snake">
							<h1>QA Testing</h1>
						</div>
					</Fade>
					<Fade top>
						<p>
							Each aspect of your brand is strategically developed in a way
							which is responsive in all possible screen sizes, user friendly
							and follows the general UX and UI rules. Our sites are also custom
							developed using modern web technologies to provide you with the
							best solution to establish your brands online presence.
						</p>
					</Fade>
				</div>

				<div className="inverted-process-left">
					<Fade bottom>
						<img
							src="/static/images/home/strategyDevelopment.svg"
							alt="Strategy Development"
						/>
					</Fade>
				</div>
			</div>

			<div className="process">
				<div className="process-left">
					<Fade left>
						<div className="snake">
							<h1>Launch</h1>
						</div>
					</Fade>
					<Fade top>
						<p>
							Each aspect of your brand is strategically developed in a way
							which is responsive in all possible screen sizes, user friendly
							and follows the general UX and UI rules. Our sites are also custom
							developed using modern web technologies to provide you with the
							best solution to establish your brands online presence.
						</p>
					</Fade>
				</div>

				<div className="process-right">
					<Fade bottom>
						<img
							src="/static/images/home/strategyDevelopment.svg"
							alt="Strategy Development"
						/>
					</Fade>
				</div>
			</div>
		</section>

		<style jsx>{`
			main {
				display: flex;
				flex-direction: column;
				height: 100vh;
				justify-content: center;
				align-items: center;
				color: var(--site-text-color);
			}

			.logo {
				position: absolute;
				z-index: 2;
				width: 40px;
				top: 0;
				margin-top: 15px;
				padding: 5px;
				animation: pop-in-logo 2s cubic-bezier(0.165, 0.84, 0.44, 1);
				cursor: pointer;
			}

			@keyframes pop-in-logo {
				0% {
					transform: scale(0);
					opacity: 0;
				}
				50% {
					transform: scale(0.7);
					opacity: 0;
				}
				100% {
					transform: scale(1);
					opacity: 1;
				}
			}

			/* -----------SVG STYLING----------- */
			.st0 {
				fill: url(#SVGID_1_);
				stroke: url(#SVGID_2_);
				stroke-width: 2;
				stroke-miterlimit: 10;
			}

			.cls-1 {
				fill: #f26d00;
			}

			.top-left,
			.top-right {
				width: 45vw;
				stroke-dasharray: 2400;
				animation: animate 1.5s ease-in-out;
				position: absolute;
			}

			.top-left {
				top: -4px;
				left: -4px;
				z-index: 100;
			}

			.top-right {
				transform: rotate(180deg);
				bottom: -4px;
				right: -4px;
			}

			@keyframes animate {
				0% {
					opacity: 0;
					fill-opacity: 0;
					stroke-dashoffset: 2400;
				}
				10% {
					opacity: 10;
					stroke-dashoffset: 2400;
				}
				70% {
					fill-opacity: 0;
				}
				100% {
					opacity: 10;
					stroke-dashoffset: 0;
					fill-opacity: 1;
					stroke-width: 1 !important;
				}
			}
			/* -----------END OF SVG STYLING----------- */

			/* -----------HERO PAGE STYLING----------- */
			.front-page-content {
				animation: pop-in 2s cubic-bezier(0.165, 0.84, 0.44, 1);
			}

			.container {
				width: 80vw;
				height: 70vh;
				display: flex;
			}

			@keyframes pop-in {
				0% {
					transform: scale(0);
					opacity: 0;
				}
				50% {
					transform: scale(0.9);
					opacity: 0;
				}
				100% {
					transform: scale(1);
					opacity: 1;
				}
			}

			.content {
				width: 50%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.title {
				margin-bottom: 25px;
				font-weight: bolder;
				font-size: 40px;
			}

			.typing-text {
				max-width: 275px;
				line-height: 1.6em;
				overflow: hidden;
				border-right: 0.15em solid #ee7100;
				white-space: nowrap;
				animation: typing 3.5s steps(30, end),
					blink-caret 0.5s step-end infinite;
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

			.left {
				align-items: left;
			}

			.highlighted {
				font-size: inherit;
				color: var(--brand-orange);
			}

			.description {
				font-size: 19px;
				margin-bottom: 25px;
				line-height: 25px;
			}

			.cta {
				background-color: #f26c00;
				padding: 17px 15px;
				width: 150px;
				text-align: center;
				border-radius: 30px;
				text-decoration: none;
				font-weight: bold;
				cursor: pointer;
			}

			.right {
				align-items: center;
			}

			.right svg {
				width: 80%;
			}

			/* -----------END OF HERO PAGE STYLING----------- */

			/* -----------SECOND SECTION STYLING----------- */

			#front-two {
				display: flex;
				flex-direction: column;
				align-items: center;
				transition: all 1s ease-in;
				height: 100vh;
				justify-content: space-between;
			}
			.services {
				display: flex;
				flex-direction: row !important;
				margin-left: 50px;
			}

			.second-page-content {
				flex-direction: column;
				padding-top: 75px;
			}

			.second-page-content p {
				width: 80%;
			}

			.second-page-content .title {
				margin: 15px 0px;
			}

			.quote-box {
				width: 100vw;
				height: 10vh;
				display: flex;
				justify-content: center;
				align-items: flex-end;
				bottom: 0;
			}

			.quotation-mark {
				font-family: "PT Sans", sans-serif;
				font-size: 100px;
				opacity: 0.2;
				position: absolute;
			}

			.quotation-mark-top {
				margin: -10px -55px;
			}
			.quotation-mark-bottom {
				margin: 70px 55px;
			}

			.quote {
				text-align: center;
				margin-bottom: -35px;
				line-height: 50px;
			}
			/* -----------END OF SECOND SECTION STYLING----------- */

			/* -----------THIRD SECTION STYLING----------- */

			.five-steps {
				width: 100vw;
				height: 165vh;
				padding-top: 100px;
			}

			.process {
				display: flex;
				width: 100vw;
				margin-top: 30px;
				margin-bottom: 70px;
			}

			.process p {
				color: var(--site-text-color);
				width: 80%;
				margin-left: 10vw;
				grid-row-start: 2;
				line-height: 1.6em;
			}

			.process img {
				width: 30%;
				grid-row-start: 1;
				grid-row-end: 3;
				align-items: end;
			}

			.snake {
				color: var(--site-text-color);
				font-size: 30px;
				text-transform: uppercase;
				width: 50vw;
				background: linear-gradient(
					90deg,
					rgba(190, 12, 0, 1) -25%,
					rgba(249, 147, 0, 1) 150%
				);
				height: 8vh;
				border-radius: 0px 0px 150px 0px;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				margin-bottom: 30px;
			}

			.snake:after {
				content: "";
				width: 20px;
				height: 20px;
				background-color: #fa9903;
				position: absolute;
				transform: rotate(135deg);
				border-radius: 0px 30px;
				left: 50vw;
				margin-top: -1.5vh;
				display: inline-block;
				margin-left: -45px;
			}

			.snake h1 {
				font-size: 20px;
				margin-right: 75px;
			}

			.snake-right {
				border-radius: 0px 0px 0px 150px;
			}

			.five-steps > h1 {
				margin-left: 10vw;
				color: white;
			}

			.process-right {
				width: 30%;
				align-items: center;
				justify-content: center;
				display: flex;
			}

			.process-left {
				width: 70%;
			}

			/* INVERTED SNAKE*/

			.inverted-process {
				flex-direction: row-reverse;
			}

			.inverted-snake {
				background: linear-gradient(
					-90deg,
					rgba(190, 12, 0, 1) -25%,
					rgba(249, 147, 0, 1) 150%
				);
				border-radius: 0px 0px 0px 1500px;
				justify-content: flex-start;
			}

			.inverted-snake h1 {
				margin-left: 85px;
			}

			.inverted-snake:after {
				margin-left: 35px;
			}

			.inverted-process-right {
				width: 70%;
				display: flex;
				flex-direction: column;
				align-items: flex-end;
			}

			.inverted-process-right p {
				margin-right: 10vw;
				text-align: right;
			}

			.inverted-process-left {
				width: 30%;
				align-items: center;
				justify-content: center;
				display: flex;
			}

			/* -----------END OF THIRD SECTION STYLING----------- */

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

			@keyframes nav-fade-down {
				0% {
					opacity: 0;
				}
				50% {
					opacity: 0;
				}
				70% {
					opacity: 0;
					transform: translateY(-50px);
				}
				100% {
					opacity: 100;
				}
			}

			#home-page :global(nav) {
				margin-top: 25px;
				animation: nav-fade-down 1.5s cubic-bezier(0.25, 0.75, 0.5, 1.25);
				z-index: 2;
				display: flex;
				position: absolute;
				top: 0;
				right: 10%;
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
				animation: chevron-fade-down 1.5s cubic-bezier(0.57, 0.21, 0.69, 1.25);
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
				70% {
					opacity: 0;
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

			/* .description {
				font-size: 16px;
				margin-top: 25px;
				max-width: 700px;
				text-align: center;
				line-height: 1.6em;
				opacity: 0.7;
			} */

			@media screen and (max-width: 690px) {
				main {
					overflow: hidden;
				}

				#logo .brandmark {
					height: 30vw;
					left: 0.2vw;
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

				.scroll-down {
					left: 47vw;
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
