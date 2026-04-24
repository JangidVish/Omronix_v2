/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050D1A', // Deep midnight blue from brand description
        surface: {
          DEFAULT: '#11131b',
          dim: '#11131b',
          bright: '#373942',
          card: '#0F1E35', // From Card description
        },
        primary: {
          DEFAULT: '#b4c5ff',
          container: '#2563eb',
          on: '#002a78',
        },
        secondary: {
          DEFAULT: '#4cd7f6',
          container: '#03b5d3',
          on: '#003640',
        },
        accent: {
          blue: '#2563eb',
          cyan: '#06B6D4',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1.5rem',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #2563eb, #06b6d4)',
      }
    },
  },
  plugins: [],
};

