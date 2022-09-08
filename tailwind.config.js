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
				'primary-light': '#8d6fff',
				secondary: '#FFFFFF',
				black: '#040404',
				gray: {
					400: '#B7B7B7',
					600: '#7F7F7F',
					700: '#222222',
					800: '#0F0F0F',
					900: '#0a0a0a'
				}
			},
			boxShadow: {
				xl: '0 0px 60px -15px rgba(0, 0, 0, 0.3)'
			}
		}
	},
	plugins: []
}
