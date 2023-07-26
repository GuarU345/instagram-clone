/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height', 
        'opacity': 'opacity', 
      },
      transitionDuration: {
        'slow': '500ms', 
        'fast': '150ms', 
      },
    },
  },
  plugins: [],
}

