/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sidebar-bg': '#bc00dd',
        'select-bg': '#8900f2',
        hover: '#be95c4',
      },
      backgroundImage: {
        'sidebar-gradient':
          'linear-gradient(to right, #e500a4, #db00b6, #d100d1, #bc00dd, #a100f2)',
        'mess-gradient':
          'linear-gradient(to right, #f20089, #e500a4, #db00b6, #d100d1, #bc00dd, #a100f2, #8900f2, #6a00f4)',
        'txt-gradient':
          'linear-gradient(to right, #db00b6, #d100d1, #bc00dd, #a100f2, #8900f2, #6a00f4)',
      },
    },
  },
  plugins: [require('daisyui')],
}

