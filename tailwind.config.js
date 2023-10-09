/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        screenshot: "ScreenShot 10s linear infinite",
      },
      keyframes: (theme) => ({
        ScreenShot: {
          "0%": { opacity: theme("opacity.0") },
          "67%": { opacity: theme("opacity.100") },
          "100%": { opacity: theme("opacity.100") },
        },
      }),
    },
  },
  plugins: [],
};
