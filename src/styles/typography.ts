import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.25,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['400', '500', '700'],
    },
  ],
  headerFontFamily: ['Montserrat', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Montserrat', 'Arial', 'sans-serif'],
})

export default typography
