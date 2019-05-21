export interface ITheme {
  palette: {
    black: string
    white: string
  }
  spacing: {
    unit: number
  }
}

const mainTheme = {
  palette: {
    black: '#252525',
    white: '#FFFFFF',
    opacity: 'rgba(255, 255, 255, 0.5)',
  },
  spacing: {
    unit: 8,
  },
}

export default mainTheme
