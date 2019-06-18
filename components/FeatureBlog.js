import { useState } from "react";
import { memo } from "react";

const FeatureBlog = ({ title, date, summary, body, conclusion, photo }) => {
	const [extraInfoShown, setExtraInfoShown] = useState(false);

	return (
		<>
			<div className="blog">
				<h1>{title}</h1>
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

				h1 {
					font-size: 80px;
					height: 200px;
					background-image: url(${photo});
					background-repeat: no-repeat;
					background-position: center;
					background-size: cover;
					margin: 0px 0 25px 0;

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

					max-width: 900px;
				}

				.conclusionSection {
					font-size: 25px;
					padding: 25px 25px 25px 25px;
					text-align: justify;
					line-height: 25pt;
					text-indent: 50px;
					max-width: 900px;
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
