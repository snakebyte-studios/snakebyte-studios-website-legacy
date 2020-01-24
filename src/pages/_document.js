import Document, { Html, Head, Main, NextScript } from "next/document";
import { RECAPTCHA_SITE_KEY } from "src/global/constants";

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
						href="/images/snakebyte/favicon.ico"
					/>
					<script
						src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
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
