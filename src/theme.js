const spacing = {
  default: 15,
}

const zIndex = {
  nav: 1,
}


const baseTheme = {
  spacing,
  zIndex,
}


const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#fff',
    nav: '#dadada',
    text: '#000'
  },
}

const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#000',
    nav: '#333',
    text: '#fff',
  },
}

export const LIGHT = 'light'
export const DARK = 'dark'

const themes = {
  [LIGHT]: lightTheme,
  [DARK]: darkTheme,
}

export default themes
