
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			'phone': '400px',
			'tablet': '640px' ,
			'laptop': '1024px',
			'desktop': '1280px',
		},
		extend: {
			aspectRatio: {
				'16/9': 'calc(9 / 16 * 100%)',
				'4/3': 'calc(3 / 4 * 100%)',
				'3/2': 'calc(2 / 3 * 100%)',
				'1/1': '100%',
				'2/1': 'calc(100% / 2)',
				'3/1': 'calc(100% / 3)',
				'3/4': 'calc(100% / 3)',
				'2/3': 'calc(100% / 1.5)',
				'9/16': 'calc(16 / 9 * 100%)',
			},
			animation: {
				'bajada': 'bajar 1s ease-in-out',
				'aparece': 'aparecer 0.5s ease-in-out',
				'aparecerLadoDerecho': 'aparecerLadoDerecho 1.5s ease-in-out ',
				'aparecerLadoIzquierdo': 'aparecerLadoIzquierdo 1.5s ease-in-out ',
				'voltear': 'voltear 0.5s ease-in-out',
				'expandir': 'expandir 1s ease-in-out',
				'contraer': 'expandir reverse 1s ease-in-out',
			},
			keyframes: {
				bajar: {
					'0%': { transform: 'translateY(-100px)' },
					'100%': { transform: 'translateY(0px)' },
				},
				aparecer: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				expandir: {
					'0%': { opacity: '0', transform: 'scale(0)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
				aparecerLadoDerecho: {
					'0%': { opacity: '0', transform: 'translateX(150px)' },
					'100%': { opacity: '1', transform: 'translateX(0px)' },
				},
				aparecerLadoIzquierdo: {
					'0%': { opacity: '0', transform: 'translateX(-150px)' },
					'100%': { opacity: '1', transform: 'translateX(0px)' },
				},
				voltear: {
					'0%': { transform: '-scale-x-0' },
					'100%': { transform: '-scale-x-100' },
				},
			}
		},
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
