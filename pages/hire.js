import Head from "next/head";
import HireForm from "components/HireForm.js";

const Hire = () => (
	<React.Fragment>
		{/* Meta content */}
		<Head>
			<title>Hire Us - Snakebyte Studios</title>
			<meta name="description" content="" />
			{/* 
				TODO: ADD META DESCRIPTION ^	
			*/}
		</Head>

		{/* Page content */}
		<main id="hire-page">
			<div className="container">
				<section>
					<h1>We're excited to hear from you.</h1>
					<p>
						Ready to take your brand to the next level? We're as hyped about it
						as you are. Shoot us a message and we'll be sure to get back to you
						as soon as possible!
					</p>
				</section>
				<section>
					<HireForm />
				</section>
			</div>
		</main>

		<style jsx>{`
			#hire-page .container {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 80%;
				max-width: var(--container-width);
				margin: auto;
			}

			section {
				width: 500px;
			}

			section:nth-of-type(2) {
				width: 500px;
				margin-left: 80px;
				padding-left: 80px;
				padding-top: 15px;
				padding-bottom: 15px;
				border-left: 1px solid rgba(0, 0, 0, 0.2);
			}

			section h1 {
				font-size: 60px;
				margin-bottom: 30px;
				text-indent: -4px;
			}

			section p {
				line-height: 1.6em;
				font-size: 18px;
			}

			@media screen and (max-width: 950px) {
				#hire-page .container {
					margin-top: 120px;
					margin-bottom: 60px;
					flex-direction: column;
					height: auto;
				}

				section {
					width: 100%;
				}

				section:nth-of-type(2) {
					margin-top: 40px;
					margin-left: 0;
					padding-left: 0;
					border: none;
					width: 100%;
				}

				section h1 {
					font-size: 42px;
				}

				section p {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 550px) {
				#hire-page .container {
					width: 90%;
				}
			}
		`}</style>
	</React.Fragment>
);

export default Hire;
