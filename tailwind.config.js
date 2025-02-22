/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slide: "slide linear infinite 10s",
        "spin-slow": "spin 75s linear infinite",
        rotate: "rotate 25s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": {
            transform: "translateX(95%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        rotate: {
          "0%": {
            transform: "rotateY(0deg)",
          },
          "50%": {
            transform: "rotateY(180deg)",
          },
          "100%": {
            transform: "rotateY(0deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
