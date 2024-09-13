module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{png,html,js,css}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};