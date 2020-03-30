const path = require("path");
const withCSS = require("@zeit/next-css");
require("dotenv").config();

const nextConfig = {
	exportTrailingSlash: false,
	webpack(config) {
		config.resolve.alias.src = path.join(__dirname, "src");
		return config;
	}
};

// --- blog config ---

//lets next know to automatically process any .md file as if they were JSX files
const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/
});

// --- end of blog config ---

(module.exports = withCSS(nextConfig)),
	withMDX({
		pageExtensions: ["js", "jsx", "md", "mdx"]
	});
