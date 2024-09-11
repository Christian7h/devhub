/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			porno: "#ffa31a",
			blanco: "#f1f3f8",
			amarillo: "#f9f16f",
			verdeagua: "#008170",
			verde: "#005b41",
			mostaza: "#586020",
			azulmorado: "#232d3f",
			azul: "#1f2d40",
			negro: "#0f0f0f",
			lima: "#A8E860",
			primary: "#B9FF66",
			black: "#000000",
			white: "#FFFFFF",
			gray: "#0D0C22",
			stone: "#231F20",
			lime: "#B9FF66",
			zinc: {
				100: "#F3F3F3",
				200: "#F0F0F0",
				300: "#D9D9D9",
				400: "#D8D8D8",
				500: "#898989",
				600: "#B0B0B0",
				700: "#787878",
				800: "#292A32",
				900: "#191A23",
			},
		},
		boxShadow: {
			card: '0px 5px 0px 0px #191A23'
		},
		extend: {
			fontFamily: {
				"Oswald": ['sans-serif', 'serif'],
			},
		},
	},
}
