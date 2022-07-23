/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				primary: '#643FFE',
				secondary: '#FFFFFF',
				black: '#040404',
				gray: {
					400: '#B7B7B7',
					600: '#7F7F7F',
					800: '#0F0F0F'
				}
			}
		}
	},
	plugins: []
}
