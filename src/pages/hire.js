import Head from "next/head";
import dynamic from "next/dynamic";
const HireForm = dynamic(() => import("src/components/HireForm.js"), {
	ssr: false
});

const Hire = () => (
	<>
		{/* Meta content */}
		<Head>
			<title>Hire Us - Snakebyte Studios</title>
			<meta
				name="description"
				content="Ready to take your brand to the next
				level? We're as hyped about it as you are. Shoot us a message and we'll
				be sure to get back to you as soon as possible!"
			/>
		</Head>

		{/* Page content */}
		<main id="hire-page">
			<div className="container">
				<section className="left">
					<h1>
						We're excited to hear from <span className="you">you.</span>
					</h1>
					<p>
						Ready to take your brand to the next level? We're as hyped about it
						as you are. Shoot us a message and we'll get back to you as soon as
						possible!
					</p>
				</section>

				<section className="right">
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
				padding-top: 15px;
				padding-bottom: 15px;
			}
			.right {
				animation: fade-up 0.7s cubic-bezier(0.57, 0.21, 0.69, 1.25);
			}
			.left {
				animation: fade-down 0.7s cubic-bezier(0.57, 0.21, 0.69, 1.25);
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
			@keyframes fade-down {
				0% {
					opacity: 0;
					transform: translateY(-50px);
				}
				100% {
					opacity: 100;
				}
			}

			section h1 {
				font-size: 60px;
				margin-bottom: 30px;
				text-indent: -4px;
			}
			.you {
				font-size: 60px;
				text-indent: -4px;
				color: #ee7100;
			}

			section p {
				line-height: 1.6em;
				font-size: 18px;
				opacity: 0.7;
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
				.you {
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
	</>
);

export default Hire;
