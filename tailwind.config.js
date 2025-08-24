/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0A192F",
          gold: "#C9A227",
          slate: "#8892B0",
          soft: "#F8F8F8",
        },
      },
      boxShadow: {
        header: "0 4px 20px rgba(10,25,47,0.08)",
      },
      borderRadius: {
        xl2: "1rem",
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
    },
    fontFamily: {
      display: ['var(--font-playfair)'],
      heading: ['var(--font-montserrat)'],
      sans: ['var(--font-inter)'],
    },
  },
  plugins: [],
};