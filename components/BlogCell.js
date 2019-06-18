import { memo } from "react";

const BlogCell = ({ title, photo, summary }) => {
	return (
		<>
			<div className="blog-cell">
				<div className="wrapper">
					<h2>{title}</h2>
					<p>{summary}</p>
				</div>
			</div>

			<style jsx>{`
				.blog-cell {
					height: 200px;
					width: 200px;
					max-width: 200px;
					margin: 10px;
					background-position: center;
					background-size: cover;
					padding: 5px;

					border: 2px solid black;
					position: relative;
				}

				.wrapper {
					z-index: 5;
				}

				.blog-cell::before {
					content: " ";
					position: absolute;
					top: 0;
					left: 0;
					height: 100%;
					width: 100%;
					background-image: url(${photo});

					z-index: 2;
				}

				h2 {
					font-size: 2em;
					text-align: center;

					z-index: 100;
				}
				p {
					margin-top: 5px;
					text-align: justify;
					z-index: 100;
				}
			`}</style>
		</>
	);
};

export default memo(BlogCell);
