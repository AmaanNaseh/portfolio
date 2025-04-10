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
      backgroundImage: {
        "body-gradient":
          "linear-gradient(to bottom, #54A5ED 0%, #B9DAF8 35%, #B9DAF8 65%, #54A5ED 100%)",
        "title-gradient":
          "linear-gradient(to bottom, #1F3C6E 0%, #1A78D2 25%, #1F3C6E 50%, #1A78D2 75%, #1F3C6E 100%)",
      },
      colors: {
        denim: {
          50: "#A2CDF5",
          100: "#8FC4F3",
          200: "#6BB0EF",
          300: "#469CEB",
          400: "#2189E7",
          500: "#1674C9",
          600: "#105796",
          700: "#0B3A64",
          800: "#051C31",
          900: "#000000",
          950: "#000000",
        },
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
