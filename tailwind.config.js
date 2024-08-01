/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				colorTitle: '#DB3753',
				colorTextTable: '#ffffff',
				advertising: '#E1E1F1',
				colorButtons: '#DB3753',
				colorButtonsText: '#ffffff'
			},
			fontFamily: {
				customFont: ['Barlow', 'sans-serif']
			},
			backgroundImage: {
				imgcup: "url('@src/assets/img/bg.png')",
				bgAdmin: "url('@src/assets/img/bg-users.png')",
				login: "url('@src/assets/img/login.png')",
				'btns-admin': "url('@src/assets/img/Rectangle.png')",
				footer: "url('@src/assets/img/bg.png')",
				bgUser: "url('@src/assets/img/bguser.png')"
			},
			dropShadow: {
				'3xl': '6px 4px 7px rgba(0, 0, 0, 0.25)'
			},
			flex: {
				custom: '1 1 46%'
			},
			gridTemplateColumns: {
				// Complex site-specific column configuration
				SubTableAdvertising: '2fr 1fr'
			}
		}
	},
	plugins: []
};
