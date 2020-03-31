const path = require("path");
const withCSS = require("@zeit/next-css");
require("dotenv").config();

const nextConfig = {
	exportTrailingSlash: false,
	webpack(config) {
		config.resolve.alias.src = path.join(__dirname, "src");
		config.module.rules.push({
			test: /\.md$/,
			use: "raw-loader"
		});
		return config;
	}
};

module.exports = withCSS(nextConfig);
