module.exports = {
	plugins: {
		'@tailwindcss/postcss': {},
    'postcss-preset-env': {
      stage: 1, // Be a little more future-facing (accept Stage 1 features)
      autoprefixer: {
        grid: true, // Add prefixes for CSS Grid (important if you support IE11 or old Edge)
      },
      browsers: [
        ">0.5%", // Browsers with more than 0.5% market share
        "last 2 versions", // Last two major versions of all browsers
        "Firefox ESR", // Firefox Extended Support Release
        "not dead", // Ignore browsers officially discontinued (no updates in last 24 months)
        "not op_mini all" // Exclude Opera Mini (because it barely supports modern CSS)
      ],
      features: {
        'nesting-rules': true, // Explicitly enable nesting (SCSS-like)
        'custom-media-queries': true, // Allow using custom named media queries
      },
      preserve: false, // Only output fallback CSS, no duplicate modern rules
    },
	},
};
