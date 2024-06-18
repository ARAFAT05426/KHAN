/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      minipad: "600px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      widescreen: "1536px",
    },
    container: {
      screens: {
        mobile: "100%",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
        widescreen: "1536px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bg: "#000",
        primary: "#14cf93",
        card: "#111827",
      },
    },
  },
  plugins: [],
};
