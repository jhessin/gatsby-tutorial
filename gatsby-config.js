module.exports = {
	siteMetadata: {
		title: "Grillbrick Studios",
	},
	plugins: [
		"gatsby-plugin-gatsby-cloud",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "blog",
				path: `${__dirname}/blog`,
			},
		},
	],
};
