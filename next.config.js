const { readFileSync, readdirSync, statSync } = require('fs');
const path = require('path');
const withSass = require('@zeit/next-sass');
const withOffline = require('next-offline');

const nextConfig = {
	webpack (config, options) {
		// Allow absolute paths in `import` statements for all directories
		// within current directory except those specified in .gitignore file	
		const ignored_dirs = readFileSync('.gitignore', 'utf8').trim().split('\n');

		readdirSync(__dirname)
		.filter(f => statSync(path.join(__dirname, f)).isDirectory() && !ignored_dirs.includes(f))
		.forEach(dir => {
			config.resolve.alias[dir] = path.join(__dirname, dir);
		});

		return config;
	}
}

module.exports = withOffline(withSass(nextConfig));
