const { readdirSync, statSync } = require("fs");
const path = require("path");
const withCSS = require("@zeit/next-css");
require("dotenv").config();

const nextConfig = {
	exportTrailingSlash: false,
	webpack(config) {
		// Allow absolute paths in `import` statements for all directories
		// within current directory

		readdirSync(__dirname)
			.filter(f => statSync(path.join(__dirname, f)).isDirectory())
			.forEach(dir => {
				config.resolve.alias[dir] = path.join(__dirname, dir);
			});

		return config;
	}
};

module.exports = withCSS(nextConfig);
