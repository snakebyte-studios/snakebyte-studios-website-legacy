import Head from "next/head";
import FeatureBlog from "src/components/FeatureBlog.js";
import BlogCell from "src/components/BlogCell.js";
import BLOG_DETAILS from "src/data/blog_data.json";

import { useState } from "react";

//sorts array based on post time, sets it to the newest post.
const initialPost = BLOG_DETAILS.sort(
	(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)[0];

const Blog = () => {
	const [selectedPostsId, setSelectedPostsId] = useState(initialPost.id);

	//Returns the currently selected posts object.
	const selectedPost = BLOG_DETAILS.find(post => post.id === selectedPostsId);

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
				<div className="container">
					<div>Filler 1</div>
					<div>Filler 2</div>

					<div className="blog-grid">
						{BLOG_DETAILS.map(blogCell => (
							<div onClick={() => setSelectedPostsId(blogCell.id)}>
								<BlogCell
									title={blogCell.title}
									photo={blogCell.photo}
									summary={blogCell.summary}
								/>
							</div>
						))}
					</div>

					<div className="blog-feature">
						<FeatureBlog
							title={selectedPost.title}
							date={selectedPost.date}
							summary={selectedPost.summary}
							body={selectedPost.body}
							conclusion={selectedPost.conclusion}
							photo={selectedPost.photo}
						/>
					</div>
				</div>
			</main>

			<style jsx>{`
				.container {
					display: grid;
					grid-template-columns: auto 2fr;
					grid-template-rows: 90px 2fr 55px;

					height: 100vh;
				}

				.blog-grid {
					display: grid;
					grid-template-columns: repeat(1, 1fr);
					grid-auto-rows: 200px;
					grid-gap: 1em;

					padding: 10px 25px 10px 10px;

					overflow: auto;
				}

				.blog-feature {
					display: flex;
					justify-content: center;
					max-height: calc(100vh - (90px + 55px));
					overflow: auto;
				}
			`}</style>
		</>
	);
};

export default Blog;
