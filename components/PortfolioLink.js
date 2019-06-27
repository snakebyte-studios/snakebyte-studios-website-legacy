const PortfolioLink = ({ name, image, description, link }) => {
	return (
		<>
			<div className="card">
				<a href={link}>
					<img src={image} alt={name} />{" "}
				</a>
				<div className="info">
					<h5>{name}</h5>
					<p>{description}</p>
					<a
						className="link"
						href={link}
						target="_blank"
						rel="noopener noreferrer"
					>
						Visit
					</a>
				</div>
			</div>

			<style jsx>{`
				.card {
					background-color: rgba(0, 0, 0, 0.3);
					align-content: center;
					justify-content: center;
					overflow: hidden;
					padding: 20px;
				}

				.card img {
					width: 100%;
					display: block;
					object-fit: cover;
					overflow: hidden;
					transition: transform 0.7s, filter 0.7s ease-in-out;
					filter: blur(0);
					transform: scale(1);
					margin-bottom: 15px;
				}

				.card img:hover {
					filter: blur(2px);
					transform: scale(1.2);
				}

				.card h5 {
					font-size: 18px;
					margin-bottom: 10px;
				}

				.card p {
					font-size: 16px;
					line-height: 1.4em;
					margin-bottom: 10px;
				}

				/*
				.cardImage img {
					transition: transform 0.7s, filter 0.7s ease-in-out;
					filter: blur(0);
					transform: scale(1);
				}
				*/

				.card .link {
					display: inline-block;
					text-decoration: none;
					/*   border: 1px solid black; */
					padding: 10px 30px;
					border-radius: 20px;
					background: orange;
					color: white;
					font-size: 1em;
					margin-left: 33%;
				}
			`}</style>
		</>
	);
};

export default PortfolioLink;
