import { useState } from "react";
import { memo } from "react";

const FeatureBlog = ({ title, date, summary, body, conclusion, photo }) => {
	const [extraInfoShown, setExtraInfoShown] = useState(false);

	return (
		<>
			<div className="blog">
				<div className="banner">
					<h1>{title}</h1>
				</div>
				<h4>{date}</h4>
				<p className="summarySection">{summary}</p>
				<p className="bodySection">{extraInfoShown ? body : ""}</p>
				<p className="conclusionSection">{extraInfoShown ? conclusion : ""}</p>
				{extraInfoShown ? (
					<button
						className="afterButton"
						onClick={() => setExtraInfoShown(false)}
					>
						READ LESS
					</button>
				) : (
					<button className="ogButton" onClick={() => setExtraInfoShown(true)}>
						READ MORE
					</button>
				)}
			</div>

			<main />

			<style jsx>{`
				.blog {
					display: flex;
					align-items: center;
					flex-direction: column;
					width: 100%;
				}

				.banner {
					position: relative;
					width: 100%;
					height: 100%;
					max-height: 200px;

					background-image: url(${photo});

					background-repeat: no-repeat;
					background-position: top center fixed;
					background-size: cover;

					margin-bottom: 25px;
				}

				h1 {
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 80px;
					height: 200px;

					text-align: center;
				}

				h4 {
					font-style: italic;
				}

				.summarySection {
					margin: 25px 0px 10px 0px;
					font-size: 25px;
					padding: 10px 25px 0 25px;
					font-weight: bolder;
				}

				.bodySection {
					font-size: 25px;
					padding: 25px 25px 0 25px;
					text-align: justify;
					line-height: 25pt;
					text-indent: 50px;

					max-width: 950px;
				}

				.conclusionSection {
					font-size: 25px;
					padding: 25px 25px 25px 25px;
					text-align: justify;
					line-height: 25pt;
					text-indent: 50px;
					max-width: 950px;
				}

				button {
					font-size: 1em;
					background: transparent;
					outline: none;

					cursor: pointer;
				}
			`}</style>
		</>
	);
};

export default memo(FeatureBlog);
