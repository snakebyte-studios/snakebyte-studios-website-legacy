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
					<h1>THANK YOU FOR HIRING US!</h1>
					<p>
						We see that you liked our stuff! We will gladly do the same for you,
						fill out the form to the right and we will get back to you as soon
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
				width: calc((var(--container-width) / 2) + 30px);
			}
		`}</style>
	</React.Fragment>
);

export default HireUs;
