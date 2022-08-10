/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],

	// im add
	darkMode: 'class', // or 'media' or 'class'
	variants: {
		extends: {},
	},
};
