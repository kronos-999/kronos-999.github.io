module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		fontFamily: {
			'text': ['Montserrat', 'sans-serif'],
			'heading': ['Montserrat', 'sans-serif'],
		},
		extend: {
			colors: {
				'appromed': '#12767f',
				'appromed-light': '#2099b0',
				'appromed-dark': '#07666e',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
	],
};
