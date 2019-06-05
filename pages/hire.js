import Head from "next/head";
import HireForm from "components/HireForm.js";

const HireUs = () => (
	<React.Fragment>
		<Head>
			<title>Hire Us - Snakebyte Studios</title>
			<meta name="description" content="" />
		</Head>

		<main id="hire-page">
			<div className="container">
				<section>
					<h1>We're excited that you're excited!</h1>
					<p>
						Ready to kick your brand up a notch? We look forward to hearing from
						you. Shoot us a message and we'll be sure to get back to you as soon
						as possible ;)
					</p>
				</section>
				<HireForm />
			</div>
		</main>
		<style jsx>{`
			#hire-page .container {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 90%;
				max-width: var(--container-width);
				margin: auto;
			}

			section {
				width: 500px;
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
		`}</style>
	</React.Fragment>
);

export default HireUs;
