/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
				"hero-particular": `
                    linear-gradient(to right, rgba(15, 52, 92, 0.8) 14.71%, rgba(15, 52, 92, 0.8) 78.23%),
                    url('/hero/1.jpg')
                `,
				"hero-commercial": `
                    linear-gradient(to right, rgba(15, 52, 92, 0.8) 14.71%, rgba(15, 52, 92, 0.8) 78.23%),
                    url('/hero/2.jpg')
                `,
				"hero-emergency": `
                    linear-gradient(to right, rgba(15, 52, 92, 0.8) 14.71%, rgba(15, 52, 92, 0.8) 78.23%),
                    url('/hero/emergency.jpg')
                `,
				logo: `
                    linear-gradient(45deg, rgba(2,0,36,1) 10%, rgba(0,212,255,1) 10%)
                `,
			},
		},
	},
	plugins: [],
};
