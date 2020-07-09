// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path');
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const purgecssOptions = require('./purgecss.config');
const cssnano = require('cssnano');

// For using global styles.
function addStyleResources(rule) {
	rule.use('style-resource')
		.loader('style-resources-loader')
		.options({
			patterns: [path.resolve(__dirname, './src/assets/scss/app.scss')],
		});
}

module.exports = {
	siteName: 'Gridsome',
	siteUrl: 'Your URL',
	siteDescription: 'Base meta description',
	// For using global styles, for more info:
	// https://gridsome.org/docs/assets-css/#global-preprocessor-files-ie-variables-mixins
	chainWebpack(config) {
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

		types.forEach((type) => {
			addStyleResources(config.module.rule('scss').oneOf(type));
		});
	},
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					autoprefixer,
					...(process.env.NODE_ENV === 'production'
						? [purgecss(purgecssOptions), cssnano]
						: []),
				],
			},
		},
	},
	plugins: [
		{
			use: `gridsome-plugin-netlify-cms`,
			options: {
				publicPath: '/login', // URL of your CMS login page
			},
		},
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'admin/content/posts/*.md', // Path to the content for this type
				typeName: 'Post', // Name of this content type
				remark: {
					// remark options for content type
					// EX: 'remark-plugin'
					// EX: ['remark-plugin-with-options', {
					// Options
					// }]
					// EX: 'require('remark-plugin')
				},
			},
		},
		{
			use: '@gridsome/plugin-sitemap',
			options: {
				cacheTime: 600000, // default
				exclude: [],
				config: {
					'/*': {
						changefreq: 'weekly',
						priority: 0.5,
					},
				},
			},
		},
		// {
		// 	use: '@gridsome/plugin-critical',
		// 	options: {
		// 		paths: ['/', '/*', '/**/*'],
		// 		width: 1300,
		// 		height: 900,
		// 	},
		// },
	],
	transformers: {
		remark: {
			// global remark options
			// remark options
			// EX: 'remark-plugin'
			// EX: ['remark-plugin-with-options', {
			// Options
			// }]
			// EX: 'require('remark-plugin')
		},
	},
};
