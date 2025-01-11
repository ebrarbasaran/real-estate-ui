/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary-brand-color' : '#3A0CA3',
        'brand-lilac' : '#4361EE4D',
        'color-1' : '#4361EE',
        'text-color-1' : '#0B090A',
        'text-color-2' : '#2B2B2B',
        'text-color-3' : '#808080',
        'text-color-4' : '#AAAAAA',
        'text-color-5' : '#D4D4D4',
        'primary-gradient-color' : '#4CC9F000',
        'secondary-gradient-color' : '#4361EE4D',
        'yellow-star' : '#FFC700',
      },
      spacing: {
        '280px':'280px',
        '900px' : '900px',
    },
  },
  plugins: [],
}
}

