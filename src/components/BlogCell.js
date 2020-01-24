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
					position: relative;

					height: 200px;
					width: 200px;
					background-position: center;
					background-size: cover;

					border: 2px solid black;

					overflow: hidden;

					cursor: pointer;
				}

				.wrapper {
					position: absolute;

					height: 100%;
					width: 100%;

					z-index: 5;
					transition: all 1s ease;
				}

				.wrapper > p,
				h2 {
					padding: 5px;
				}

				.wrapper:hover {
					background-color: #2c2b2a;
					opacity: 0.8;
				}

				.wrapper:hover h2 {
					color: white;
					bottom: 70px;
				}

				.wrapper:hover p {
					color: white;
					display: block;
					padding: 10px;
					background-color: #1c1b1b;
				}

				.blog-cell::after {
					content: " ";
					position: absolute;

					top: 0;
					left: 0;
					height: 100%;
					width: 100%;

					background-image: url(${photo});
					background-size: cover;
					opacity: 0.6;

					z-index: 2;
					transition: all 1s ease;
				}

				.blog-cell:hover::after {
					transform: scale(0.9);
				}

				h2 {
					position: absolute;
					bottom: 25px;

					font-size: 1.5em;
					text-align: left;
					transition: all 1s ease;
				}

				p {
					display: none;

					position: absolute;
					bottom: 0;
					width: 100%;

					transition: all 1s ease;
					text-align: left;
				}
			`}</style>
		</>
	);
};

export default memo(BlogCell);
