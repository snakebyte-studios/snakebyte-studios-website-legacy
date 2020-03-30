import Head from "next/head";

// import { useState } from "react";

// //sorts array based on post time, sets it to the newest post.
// const initialPost = BLOG_DETAILS.sort(
// 	(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
// )[0];

const Blog = () => {
	// const [selectedPostsId, setSelectedPostsId] = useState(initialPost.id);

	//Returns the currently selected posts object.
	// const selectedPost = BLOG_DETAILS.find(post => post.id === selectedPostsId);

	return (
		<>
			{/* Meta content */}
			<Head>
				<title>Blog - Snakebyte Studios</title>
				<meta
					name="description"
					content="Get your share of tech news, business content and other blog bits that we decide to write about!" //TODO: Write blog meta description
				/>
			</Head>

			<main id="blog-page">
				<div className="must-read-feature">
					<div className="must-read-attributes-container">
						<div className="must-read-attributes-littleTitle">
							- must read -
						</div>
						<div className="must-read-attributes-title">
							What I have learned building a markdown blog!
						</div>

						{/*end of must-read-attributes-container*/}
					</div>
				</div>
				{/*end of must-read-feature div*/}

				<div className="blog-topic-menu">
					<ul className="list-of-blog-topics">
						<li>DIGITAL MARKETING</li>
						<li>MONEY</li>
						<li>STARTUP ADVICE</li>
						<li>OUR EXPERIENCE</li>
						<li>FUN STUFF</li>
					</ul>
				</div>
			</main>

			<style jsx>{`
				#blog-page {
					display: grid;
					height: 100vh;
					width: 100vw;
					grid-template-columns: 1fr 2fr;
					grid-template-rows: 1fr 1fr;
				}

				.must-read-feature {
					grid-column: 1 / span 3;
				}
				.must-read-feature {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					align-items: center;
					color: white;
				}

				.blog-topic-menu {
					display: flex;
					justify-content: center;
					align-items: center;
					grid-column: 1 / span 1;
					grid-row: 2 / 3;
				}

				.blog-topic-menu .list-of-blog-topics {
					border: 1px solid white;
				}
				.blog-topic-menu .list-of-blog-topics li {
					color: red;
				}
			`}</style>
		</>
	);
};

export default Blog;
