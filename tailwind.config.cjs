/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
	theme: {
		extend: {
			colors: {
				white: '#f8f9fa',
				tahpe: {
					navy: '#273993',
					blue: '#3B8BCA'
				},
				paper: '#f5f2eb',
				ink: '#1a1a1a'
			},
			fontFamily: {
				body: ['Lora', 'Georgia', 'serif'],
				display: ['"Playfair Display"', 'Georgia', 'serif']
			},
			gridTemplateColumns: {
				list: 'repeat(auto-fill, minmax(400px, max-content))'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
