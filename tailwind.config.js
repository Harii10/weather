/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        25: '102px',
      },
      colors:{
        chose:{
          10 : '#FFC700',
          20: '#323333',
          30: '#6584AD',
          40: '#528BC0',
          50: '#3C7AD5',
          60: '#2E4374',
          70: '#9ED763',
          80: '#A3FF59'
        }
      }
    },
  },
  plugins: [],
}

