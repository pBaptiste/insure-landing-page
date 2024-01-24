/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'dm-serif': ["'DM Serif Display'", 'sans-serif'],
			},
			colors: {
				'primary' : '#2C2830',
				'secondary' : '#837D88',
				'accent' : '#2D2641',
			},
			backgroundImage: {
				'mobile-menu' : "url('/src/images/bg-pattern-mobile-nav.svg')",
				'how-we-work-mobile' : "url('/src/images/bg-pattern-how-we-work-mobile.svg')",
				'how-we-work-desktop' : "url('/src/images/bg-pattern-how-we-work-desktop.svg')",
				'footer-mobile' : "url('/src/images/bg-pattern-footer-mobile.svg')",
				'footer-desktop' : "url('/src/images/bg-pattern-footer-desktop.svg')",
			},
		},
	},
	plugins: [],
}
