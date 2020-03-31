import matter from "gray-matter";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

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

			<div>
				<h1>{frontmatter.title}</h1>

				<ReactMarkdown source={content} />
			</div>

			<style jsx>{`
				* {
					margin: 25%;
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
