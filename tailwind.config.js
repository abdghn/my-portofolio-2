// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5F00',
        secondary: '#FF9F66',
        background: '#FFFae6',
        accent: '#002379',
      },
    },
  },
  plugins: [],
}
