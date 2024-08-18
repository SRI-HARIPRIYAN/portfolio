/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
		},
		keyframes: {
			updown: {
				"0%, 100%": { transform: "translateY(0)" },
				"50%": { transform: "translateY(-10px)" },
			},
		},
		animation: {
			updown: "updown 1.5s ease-in-out infinite",
		},
	},
	plugins: [],
};
