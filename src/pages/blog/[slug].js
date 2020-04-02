import matter from "gray-matter";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import BlogNamePlate from "src/components/BlogNamePlate.js";
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
				<div className="leftside">
					<div className="blogHeader">
						<h1>{frontmatter.title}</h1>
					</div>
					<div className="justBelowBlogHeader">
						<BlogNamePlate
							photo="/images/team/lev.jpg"
							author={frontmatter.author}
							date={frontmatter.date}
						/>
					</div>
					<div className="markdown-body">
						<ReactMarkdown source={content} />
					</div>
				</div>
			</div>

			<style jsx>{`
				.hero {
					display: grid;
					height: 100vh;
					width: 100vw;

					grid-template-columns: 2fr 1fr;
				}

				.blogHeader {
					display: flex;
					justify-content: center;
					margin-top: 80px;
					width: 980px;
					padding: 45px 45px 0 45px;
				}

				.leftside {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					grid-column: 1 / 2;
					overflow: hidden;
				}

				.markdown-body {
					width: 980px;
					padding: 45px;
					overflow-y: scroll;
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
