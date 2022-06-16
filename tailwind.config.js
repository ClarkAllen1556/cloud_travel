const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    colors: {
      'black-1': '#000000',
      'black-2': '#333333',
      'blue-1': '#002D63',
      'blue-2': '#00A1E6',
      'green-1': '#019501',
      'green-2': '#ECFBEC',
      'grey-1': '#F5F5F5',
      'grey-2': '#757575',
      'grey-3': '#DDDDDD',
      'orange-1': '#EE8F13',
      'orange-2': '#FFFBE8',
      'red-1': '#D80000',
      'red-2': '#FFE8E8',
      'white-1': '#FFFFFF'
    },
    fontFamily: {
      sans: ['Mulish', 'sans-serif']
    },
    extend: {}
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        h1: {
          fontSize: '32px',
          fontWeight: '700',
          lineHeight: '40px',
          letterSpacing: '0em',
          textAlign: 'left'
        },
        h2: {
          fontSize: '24px',
          fontWeight: '700',
          lineHeight: '30px',
          letterSpacing: '0px',
          textAlign: 'left'
        },
        h3: {
          fontSize: '16px',
          fontWeight: '700',
          lineHeight: '20px',
          letterSpacing: '0em',
          textAlign: 'left'
        },
        h4: {
          fontSize: '14px',
          fontWeight: '700',
          lineHeight: '16px',
          letterSpacing: '0px',
          textAlign: 'left'
        },
        p: {
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '20px',
          letterSpacing: '0px',
          textAlign: 'left'
        },
        body: {
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '20px',
          letterSpacing: '0px',
          textAlign: 'left'
        }
      })
    })
  ]
}
