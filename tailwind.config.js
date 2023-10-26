/* @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory: 
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"Josefin": ["Josefin Sans", ...defaultTheme.fontFamily.sans],
				'porter': ['var(--font-porter)'],
				'primary': ['var(--font-friz)'],
			},

			screens: {
				xs: "480px",
				ss: "620px",
				sm: "768px",
				md: "1060px",
				lg: "1200px",
				xl: "1700px",
			},


		},
	},
	plugins: [],
}
