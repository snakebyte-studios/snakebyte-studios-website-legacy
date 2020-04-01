import { useState } from "react";

import Head from "next/head";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

let categories = [
	"digital marketing",
	"money",
	"startup advice",
	"our experience",
	"fun stuff"
];

// //sorts array based on post time, sets it to the newest post.
// const initialPost = BLOG_DETAILS.sort(
// 	(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
// )[0];

const importAll = results => results.keys().map(results);

const markdownFiles = importAll(
	require.context("../../data/blogContent", false, /\.md$/)
)
	.sort()
	.map(blogPost => matter(blogPost.default))
	.reverse();

const Blog = () => {
	const [selectedCategory, setSelectedCategory] = useState("digital marketing");

	const activePosts = markdownFiles.filter(
		p => p.data.tag === selectedCategory
	);

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
							What I am doing right now:!
						</div>

						{/*end of must-read-attributes-container*/}
					</div>
				</div>
				{/*end of must-read-feature div*/}

				<div className="blog-topic-menu">
					<ul className="list-of-blog-topics">
						{categories.map(category => (
							<li onClick={() => setSelectedCategory(category)}>{category}</li>
						))}
					</ul>
				</div>

				<div className="blog-boxes">
					{activePosts.map(post => (
						<ReactMarkdown source={post.content} />
					))}
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

				.blog-boxes {
					display: flex;
					justify-content: center;
					align-items: center;
				}
			`}</style>
		</>
	);
};

export default Blog;
