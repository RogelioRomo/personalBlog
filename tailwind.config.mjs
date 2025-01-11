/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'customGreen': '#29bc89',
        'customGray': '#c8c9cb',
        'customPink': '#e470d0',
        'customBlack': '#1d1f20'
      }
    },
	},
	plugins: [],
}
