/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			mRed: '#B91C1C',
			mBorder: 'rgba(0, 0, 0, 0.06)',
		},
		fontFamily: {
			DMSans: ['DM Sans', 'sans-serif'],
			WorkSans: ['Work Sans', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light'],
	},
};
