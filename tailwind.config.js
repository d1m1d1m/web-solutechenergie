/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	safelist: ["swiper-pagination-bullet", "swiper-pagination-bullet-active"],
	theme: {
		extend: {
			keyframes: {
				"phone-trin": {
					"0%": { transform: "rotate3d(0, 0, 1, 0deg)" },
					"20%, 32%, 44%, 56%, 68%": {
						transform: "rotate3d(0, 0, 1, 0deg)",
					},
					"23%, 35%, 47%, 59%, 71%": {
						transform: "rotate3d(0,0,1,15deg)",
					},
					"26%, 38%, 50%, 62%, 74%": {
						transform: "rotate3d(0,0,1,0deg)",
					},
					"29%, 41%, 53%, 65%, 77%": {
						transform: "rotate3d(0,0,1,-15deg)",
					},
					"80%": { transform: "rotate3d(0, 0, 1, 0deg)" },
				},
			},
			animation: {
				"phone-spin": "phone-trin 1.5s linear infinite",
			},
			fontFamily: {
				inter: ["Inter"],
				"work-sans": ["Work Sans"],
				mulish: ["Mulish"],
				raleway: ["Raleway"],
			},
			colors: {
				primary: {
					50: "#edfaff",
					100: "#d7f3ff",
					200: "#b7ecff",
					300: "#86e2ff",
					400: "#4dcfff",
					500: "#24b2ff",
					600: "#0c96ff",
					700: "#0680f5",
					800: "#0c63c1",
					900: "#115597",
					950: "#0f345c",
				},
			},

			backgroundImage: {
				hero1: `
                    linear-gradient(180deg, rgba(12, 76, 147, 0.7) 14.71%, rgba(12, 76, 147, 0.7) 78.23%),
                    url('/hero/1.jpg')
                `,
				hero2: `
                    linear-gradient(180deg, rgba(12, 76, 147, 0.7) 14.71%, rgba(12, 76, 147, 0.7) 78.23%),
                    url('/hero/2.jpg')
                `,
				hero3: `
                    linear-gradient(180deg, rgba(12, 76, 147, 0.7) 14.71%, rgba(12, 76, 147, 0.7) 78.23%),
                    url('/hero/3.jpg')
                `,
			},
		},
	},
	plugins: [],
};
