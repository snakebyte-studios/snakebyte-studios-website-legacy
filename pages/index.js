import { Component } from "react";
import Head from "next/head";
import Link from "next/link";

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				{/* Meta content */}
				<Head>
					<title>
						Toronto based Web Design & Development - Snakebyte Studios
					</title>
				</Head>

				{/* Page content */}
				<main>
					<div id="logo">
						<div className="brandmark" />
						<h1>Snakebyte Studios</h1>
					</div>

					<p className="description">
						Snakebyte Studios is a Toronto based digital agency focused on
						delivering quality web&nbsp;development and graphic&nbsp;design
						experiences for your brand.
					</p>

					<nav>
						<Link href="/team">
							<a>Team</a>
						</Link>
						<Link href="/portfolio">
							<a>Portfolio</a>
						</Link>
						<Link href="/blog">
							<a>Blog</a>
						</Link>
						<Link href="/contact">
							<a>Contact</a>
						</Link>
					</nav>
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

					nav {
						margin-top: 40px;
					}

					nav a {
						padding: 20px;
						text-decoration: none;
						color: black;
						text-transform: uppercase;
						margin-right: 40px;
						font-weight: bold;
						font-size: 20px;
						transition: 0.2s;
					}

					nav a:hover {
						opacity: 0.6;
					}

					nav a:last-of-type {
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
