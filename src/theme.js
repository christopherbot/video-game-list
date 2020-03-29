const colors = {
  navButton: '#929292',
  navButtonOn: '#18b518',
  navButtonOff: '#e43f00',
}

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
    ...colors,
    background: '#fff',
    nav: '#dadada',
    text: '#000'
  },
}

const darkTheme = {
  ...baseTheme,
  colors: {
    ...colors,
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
