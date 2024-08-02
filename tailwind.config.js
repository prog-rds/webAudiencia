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
				colorButtonsText: '#ffffff',
				'fields-color': 'rgba(124, 130, 141, 0.28)',
				menu: '#DB3753',
				linksMenu:'#ffffff',
				footer: '#E1E1F1',
				headerTable: '#DB3753'
			},
			fontFamily: {
				customFont: ['Barlow', 'sans-serif']
			},
			backgroundImage: {
				texture: "url('@src/assets/img/texture.png')",
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
				SubTableAdvertising: '1fr 1fr'
			}
		}
	},
	plugins: []
};
