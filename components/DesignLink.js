const DesignLink = ({ name, image, description, link, notAvideo, video }) => {
	return (
		<>
			<div className="card">
				<a href={link}>
					<img src={image} alt={name} />{" "}
					<video loop autoPlay muted width="320" visible={notAvideo}>
						<source src={video} type="video/mp4" alt={name} />
					</video>
				</a>
				<div className="info">
					<h5>{name}</h5>
					<p>{description}</p>
					{/* <div
						className="link"
						target="_blank"
						rel="noopener noreferrer"
						onClick="setModalOpen(true)"
					>
						Visit
					</div> */}
				</div>
			</div>

			<style jsx>{`
				.card {
					background-color: rgba(0, 0, 0, 0.3);
					align-content: center;
					justify-content: center;
					overflow: hidden;
					padding: 20px;
					cursor: pointer;
					transition: transform 0.7s, filter 0.7s ease-in-out;
					width: 100%;
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

				.card video {
					margin-bottom: 15px;
					width: 100%;
				}

				.card img:hover {
					transform: scale(1.1);
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

				.card:hover {
					transform: scale(1.05);
				}
			`}</style>
		</>
	);
};

export default DesignLink;
