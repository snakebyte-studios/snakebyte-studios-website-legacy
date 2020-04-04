const MoreFromAuthor = props => {
	return (
		<>
			<div className="container">
				<div>More From {props.authorName}</div>
				<hr />
				<span>Newest</span>
				<div>Here will go the title from the newest</div>
				<div>Here will go the hook from the newest</div>
				<span>More</span>
				<div>Below will be a list of other blogs by author</div>
			</div>
			<style jsx>{`
				.container {
					display: flex;
					flex-direction: column;
					justify-content: center;
				}

				hr {
					border: 1px solid white;
				}

				span {
					color: grey;
					font-style: italic;
				}
			`}</style>
		</>
	);
};

export default MoreFromAuthor;
