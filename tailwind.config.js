/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#ff6b1a',
          dark: '#0a0807',
          cream: '#f7f2ec',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 60px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
}

