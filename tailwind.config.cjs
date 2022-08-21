/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
      primary: "#11142D",
      secondary: "#C1CCCC",
      accent: "#195B7D",
			lightAccent: "#227DAC",
    },
		fontFamily: {
			body: ['Open Sans', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
}
