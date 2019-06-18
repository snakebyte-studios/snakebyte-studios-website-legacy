import { memo } from "react";

const BlogCell = ({ title, photo, summary }) => {
	return (
		<>
			<div className="blog-cell">
				<h2>{title}</h2>
				<p>{summary}</p>
			</div>

			<main />

			<style jsx>{`
				.blog-cell {
					display: flex;
					flex-direction: column;
					border: 1px solid black;
					height: 200px;
					width: 200px;
					margin: 10px;
					background-image: url(${photo});
					background-position: center;
					background-size: cover;
					padding: 5px;
				}

				h2 {
					font-size: 2em;
					text-align: center;
				}
				p {
					margin-top: 5px;
					text-align: justify;
				}
			`}</style>
		</>
	);
};

export default memo(BlogCell);
