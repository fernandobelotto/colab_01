module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color1': '#3340FF',
        'color2': '#8F92B5',
        'color3': '#151729',
        'color4': '#23263E',
        'color5': '#F7F7F7',
        'color6': '#0B1423',
        'color7': '#FFFFFF',
        'color8': '#6F48EE',
        'bgr': '#4823c4',
        'bg2': '#242629',
        'p1': '#94A1B2',
        'bg1': '#16161A',
        'white1': '#FFFFFE',
      },
      fontSize: {
        'tiny': '12px',
        'base': '15px',
        '6xl': '50px',
        'md': '18px',
        'lg': '20px'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}