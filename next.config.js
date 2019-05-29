const { readFileSync, readdirSync, statSync } = require("fs");
const path = require("path");
const withCSS = require("@zeit/next-css");

const nextConfig = {
	webpack(config) {
		// Allow absolute paths in `import` statements for all directories
		// within current directory except those specified in .gitignore file
		const ignored_dirs = readFileSync(".gitignore", "utf8")
			.trim()
			.split("\n");

		readdirSync(__dirname)
			.filter(
				f =>
					statSync(path.join(__dirname, f)).isDirectory() &&
					!ignored_dirs.includes(f)
			)
			.forEach(dir => {
				config.resolve.alias[dir] = path.join(__dirname, dir);
			});

		return config;
	}
};

module.exports = withCSS(nextConfig);
