import matter from "gray-matter";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import BlogNamePlate from "src/components/BlogNamePlate.js";
import MoreFromAuthor from "src/components/MoreFromAuthor.js";
import "github-markdown-css";

const PostTemplate = ({ content, data }) => {
	//holds the info between the --- inside the .md files
	const frontmatter = data;

	return (
		<>
			{/* Meta content */}
			<Head>
				<title>{frontmatter.title} | Snakebyte Studios</title>
				<meta
					name="description"
					content="blog stuff!" //TODO: Write blog meta description
				/>
			</Head>

			<div className="hero">
				<div className="makeSpaceForSideMenu">
					<div className="leftside">
						<div className="blogHeader">
							<h1>{frontmatter.title}</h1>
						</div>
						<div className="justBelowBlogHeader">
							<BlogNamePlate
								photo="/images/team/lev.jpg"
								author={frontmatter.author}
								date={frontmatter.date}
								readTime={frontmatter.readTime}
							/>
						</div>
						<div className="markdown-body">
							<ReactMarkdown source={content} />
						</div>
					</div>
					<MoreFromAuthor authorName={frontmatter.author} />
				</div>
			</div>

			<style jsx>{`
				.hero {
					display: flex;
					justify-content: center;
					height: 100vh;
					width: 100vw;
				}

				.makeSpaceForSideMenu {
					display: flex;
				}
				.leftside {
					display: flex;
					align-items: center;
					flex-direction: column;
					grid-column: 1 / 2;
				}

				.leftside::-webkit-scrollbar {
					display: none;
				}
				.blogHeader {
					display: flex;
					justify-content: center;
					align-content: center;
					margin-top: 80px;
					width: 980px;
					padding: 0 45px 0 45px;
				}

				.justBelowBlogHeader {
					display: flex;
					width: 980px;
					padding: 45px;
					align-items: center;
				}

				.blogHeader h1 {
					font-size: 3.5em;
				}

				.markdown-body {
					min-width: 200px;
					max-width: 980px;
					margin: 0 auto;
					padding: 45px;
				}

				img[src*="styleIt"] {
					width: 50px;
					height: 50px;
				}
			`}</style>
		</>
	);
};

PostTemplate.getInitialProps = async context => {
	const { slug } = context.query;

	//import our .md file using the 'slug' from the URL
	const content = await import(`../../data/blogContent/${slug}.md`);

	const data = matter(content.default);

	return { ...data };
};

export default PostTemplate;
