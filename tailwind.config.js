/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter"],
                "work-sans": ["Work Sans"],
                mulish: ["Mulish"],
                raleway: ["Raleway"],
            },
            colors: {
                primary: "#001062",
                "dark-blue": "#1e60aa",
                "light-blue": "#EDF1FC",
                "odd-section": "#EDF1FC",
                red: "#DF2935",
            },
            backgroundImage: {
                hero: `
                    linear-gradient(180deg, rgba(12, 76, 147, 0.6) 14.71%, rgba(12, 76, 147, 0.6) 78.23%),
                    url('/img/bg-hero.jpg')
                `,
                pipes: "url('/img/bg-pipes.png')",
                menuLinkHover:
                    "linear-gradient(0deg, currentColor 4px, transparent 4px)",
                logoBg: "linear-gradient(180deg, rgba(12, 76, 147, 0.8) 14.71%, rgba(12, 76, 147, 0.8) 78.23%),",
            },
        },
    },
    plugins: [],
};
