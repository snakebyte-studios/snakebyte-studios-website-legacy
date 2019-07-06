import Document, { Html, Head, Main, NextScript } from "next/document";

class MainDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						href="https://fonts.googleapis.com/css?family=Heebo:400,700&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="shortcut icon"
						type="image/ico"
						href="/static/images/snakebyte/favicon.ico"
					/>
				</Head>
				<body className="no-js">
					<script
						dangerouslySetInnerHTML={{
							__html: "document.body.classList.remove('no-js');"
						}}
					/>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MainDocument;
