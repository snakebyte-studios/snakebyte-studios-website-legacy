const PortfolioLink = () => {
	return (
		<React.Fragment>
			<main>
				<div className="container">
					<div className="card">
						<img
							className="cardImage"
							src="https://cdn.shopify.com/s/files/1/0533/2089/files/web-design-portfolio-inspiration-toyfight.png?v=1503510344"
						/>
						<div className="cardBody">
							<h5 className="cardTitle">Sample Website</h5>
							<p className="cardDesc">
								This is a sample site made for a cool company
							</p>
							<a href="#" className="visitButton">
								Visit
							</a>
						</div>
					</div>
				</div>
			</main>

			<style jsx>{`
				.container {
					display: flex;
					align-items: center;
				}

				.card {
					width: 30%;
					background-color: #f4f7f6;
					align-content: center;
					justify-content: center;
					overflow: hidden;
					padding: 20px;
				}

				.cardImage {
					/*   position: relative; */
					height: 30%;
					width: 100%;
					display: block;
					object-fit: cover;
					overflow: hidden;
					transition: transform 0.7s, filter 0.7s ease-in-out;
					filter: blur(0);
					transform: scale(1);

					margin-bottom: 15px;
				}

				.cardTitle {
					margin-bottom: 10px;
				}

				.cardDesc {
					margin-bottom: 10px;
				}

				/* .cardImage img {
     transition: transform 0.7s, filter 0.7s ease-in-out;
     filter: blur(0);
     transform: scale(1);

} */

				.cardImage:hover {
					filter: blur(2px);
					transform: scale(1.2);
				}

				.cardBody {
					/*   padding-left: 20px; */
					display: flex;
					flex-direction: column;
					align-items: flex-start;
				}

				.visitButton {
					width: 50%;
					/*   left: 50%; */
					position: relative;
					text-align: center;
					text-decoration: none;
					/*   border: 1px solid black; */
					/*   padding: 5px 10px 5px 10px; */
					border-radius: 20px;
					background: orange;
					color: white;
					font-size: 1em;
				}
			`}</style>
		</React.Fragment>
	);
};

export default PortfolioLink;
