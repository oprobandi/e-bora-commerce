/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A6E7C',
          dark:    '#085A66',
          light:   '#E3F5F7',
          mid:     '#0D8494',
        },
        brand: {
          green:        '#0A7C4E',
          'green-dark': '#075C39',
          'green-light':'#E6F4EE',
          orange:       '#E8650A',
          'orange-light':'#FEF0E6',
        },
        ink: {
          DEFAULT: '#1A1D23',
          2:       '#3D4350',
          3:       '#717A8A',
        },
        ebora: {
          black:   '#0F1117',
          bg:      '#F7F8FA',
          surface: '#F0F2F5',
          border:  '#E2E5EA',
          border2: '#CDD2DB',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1280px',
      },
      animation: {
        ticker:       'ticker 24s linear infinite',
        float:        'float 3s ease-in-out infinite',
        'float-delay':'float 3s ease-in-out 0.8s infinite',
        blink:        'blink 1.5s infinite',
        fadeUp:       'fadeUp 0.5s ease both',
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-7px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.3' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
