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
					max-width: 750px;
				}

				h1 {
					font-size: 80px;
					background-image: url(${photo});
					margin: 5px 0 5px 0;
				}

				h4 {
					font-style: italic;
				}

				.summarySection {
					margin: 10px 0px 10px 0px;
					font-size: 25px;
					padding: 10px;
				}

				.bodySection {
					font-size: 40px;
					margin: 10px 0px 10px 0px;
				}

				.conclusionSection {
					font-size: 25px;
					margin: 10px 0px 10px 0px;
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
