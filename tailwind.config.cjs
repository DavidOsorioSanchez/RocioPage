
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		colors: {
			'black': '#0F0E0D',
			'white': '#FAF7F0',
			'dark-blue': '#0B2F9F',
			'blue': '#98A8F8',
			'light-blue': '#BCCEF8',
		},
	},
	darkMode: "class"
}
