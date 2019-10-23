const ServiceBox = ({ services, type, image, style }) => {
	return (
		<>
			<div>
				<div className="service-main">
					<h2 className="type">{type}</h2>

					<div className={style}>
						<img className="image" src={image} alt="design" />

						{services.map(service => (
							<li>
								<a href="#">
									<div className="listtext">{service}</div>
								</a>
							</li>
						))}
					</div>
				</div>
			</div>

			<style jsx>{`
				.type {
					text-transform: uppercase;
					text-align: center;
					margin: 0px 0px 20px 0px;
					font-size: 20px;
				}
				.service {
					width: 20vw;
					background: rgb(222, 74, 0);
					padding: 30px;
					border-radius: 5px;
					display: flex;
					flex-direction: column;
					list-style-type: none;
					align-items: start;
				}
				.service-main {
					margin: 30px 50px 0px 0px;
				}
				.service-main:nth-of-type(2) {
					margin: 30px 0px 0px 0px !important;
				}
				.service-main: (a: last-of-type) {
					margin-right: 0;
				}
				.listtext {
					font-size: 18px;
					margin-bottom: 20px;
				}
				.design {
					background: linear-gradient(
						180deg,
						rgba(222, 74, 0, 1) 0%,
						rgba(241, 113, 0, 1) 100%
					);
				}
				.dev {
					background: linear-gradient(
						90deg,
						rgba(222, 74, 0, 1) 0%,
						rgba(241, 113, 0, 1) 100%
					);
				}
				.image {
					height: 40px;
					margin-bottom: 30px;
				}

				@media screen and (max-width: 690px) {
					.service {
						width: 100%;
					}
					.service-main {
						margin: 30px 0px 0px 0px;
					}
				}
			`}</style>
		</>
	);
};

export default ServiceBox;
