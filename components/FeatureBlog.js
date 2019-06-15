import { useState } from "react";
import { memo } from "react";
import BLOG_DETAILS from "data/blog_data.json";

const FeatureBlog = () => {
	const [extraInfoShown, setExtraInfoShown] = useState(false);

	return (
		<>
			{BLOG_DETAILS.map(blogPost => (
				<div className="blog">
					<h1>{blogPost.title}</h1>
					<h4>{blogPost.date}</h4>
					<p className="summarySection">{blogPost.summary}</p>
					<p className="bodySection">{extraInfoShown ? blogPost.body : ""}</p>
					<p className="conclusionSection">
						{extraInfoShown ? blogPost.conclusion : ""}
					</p>
					{extraInfoShown ? (
						<button
							className="afterButton"
							onClick={() => setExtraInfoShown(false)}
						>
							READ LESS
						</button>
					) : (
						<button
							className="ogButton"
							onClick={() => setExtraInfoShown(true)}
						>
							READ MORE
						</button>
					)}
				</div>
			))}

			<main />

			<style jsx>{`
				.blog {
					display: flex;
					align-items: center;
					flex-direction: column;
					max-width: 750px;
				}
				h1 {
					font-size: 100px;
					padding-top: 5px;
				}

				h4 {
					font-style: italic;
				}

				.summarySection {
					font-size: 25px;
					padding: 10px;
				}

				.bodySection {
					font-size: 40px;
				}

				.conclusionSection {
					font-size: 25px;
				}

				button {
					font-size: 1em;
					background: transparent;
					outline: none;

					cursor: pointer;
				}

				@keyframes stuff {
					from {
						height: 25vh;
					}
					to {
						height: 100vh;
					}
				}
			`}</style>
		</>
	);
};

export default memo(FeatureBlog);
