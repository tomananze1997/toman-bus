module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    fontFamily: {
      sans: ['Inter'],
      serif: ['Gentium Book Plus']
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.1rem'
      }
    },
    extend: {
      colors: {
        primary: {
          50: '#ffe5e5',
          100: '#fcbaba',
          200: '#f78c8c',
          300: '#e63946',
          400: '#b71c1c',
          500: '#8a1616',
          600: '#640d0d'
        },
        secondary: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          650: '#3f3f46',
          700: '#27272a'
        },
        vip: {
          100: '#ffedb5',
          200: '#ffd97a',
          300: '#ffc940',
          400: '#e0a800',
          500: '#c28e00',
          600: '#a17300',
          700: '#6c4d00'
        },
        black: '#000000',
        white: '#ffffff'
      }
    }
  },
  plugins: []
};
