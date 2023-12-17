/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        "font-primary-color": "var(--font-primary-color)",
        "font-secondary-color": "var(--font-secondary-color)",
        "primary-color": "var(--bg-primary-color)",
        "secondary-color": "var(--bg-secondary-color)",
        "hover-color": "var(--bg-hover-color)",
        yellow: "#f5c518",
        orange: "#ff5500",
      },
      fontFamily: {
        numbers: ["Poppins"],
      },
      keyframes: {
        show: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        expand: {
          "0%": { width: "0px" },
          "100%": { width: "100%" },
        },
        firstBulletHole: {
          "0%": { opacity: "0" },
          "79%": { opacity: "0" },
          "79.1%": { opacity: "1" },
        },
        secondBulletHole: {
          "0%": { opacity: "0" },
          "87%": { opacity: "0" },
          "87.1%": { opacity: "1" },
        },
      },
      animation: {
        expand: "expand 0.5s ease",
        firstBullet: "firstBulletHole 3.2s ease",
        secondBullet: "secondBulletHole 3.2s ease",
        show: "show 0.75s ease",
      },
    },
  },
  plugins: [],
};
