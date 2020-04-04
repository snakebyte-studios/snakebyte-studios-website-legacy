const BlogNamePlate = props => {
	return (
		<>
			<div className="plate">
				<img src="/images/team/lev.jpg" />
				<div className="right-side">
					<span className="authorName">{props.author}</span>
					<div className="adjustTextWithHourGlass">
						<span className="datOfBlog">{props.date}</span>
						&nbsp; &nbsp;
						<span className="readTime">
							📙 est. read time: {props.readTime}
						</span>
					</div>
				</div>
			</div>

			<style jsx>{`
				.plate {
					display: flex;
					flex-direction: row;
				}

				.plate img {
					background-size: cover;
					border-radius: 50% 50% 50% 50%;
					height: 3em;
					width: 3em;
					padding-right: 0.5em;
				}

				.plate .right-side {
					display: flex;
					flex-direction: column;
					justify-content: center;
				}

				.plate .right-side .authorName {
					font-size: 1em;
					font-weight: 400;
				}

				.plate .right-side .datOfBlog {
					font-size: 0.8em;
					color: grey;
					font-style: italic;
				}

				.adjustTextWithHourGlass {
					display: flex;
					align-items: center;
				}

				.readTime {
					font-size: 0.8em;
					color: grey;
					font-style: italic;
				}
			`}</style>
		</>
	);
};

export default BlogNamePlate;
