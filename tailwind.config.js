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
          0: '#ffffff',
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#afafaf',
          300: '#8c8c8c',
          400: '#595959',
          500: '#444444',
          600: '#1a1a1a',
          650: '#111111',
          700: '#0d0d0d'
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
