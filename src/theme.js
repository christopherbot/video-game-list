import { useState } from 'react'

const colors = {
  filterButton: '#929292',
  filterButtonOn: '#18b518',
  filterButtonOff: '#e43f00',
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

const APP_THEME_STORAGE_KEY = 'chrisVgl:theme'
export const useTheme = (initialTheme) => {
  const [currentTheme, setTheme] = useState(
    initialTheme ||
    localStorage.getItem(APP_THEME_STORAGE_KEY) ||
    LIGHT
  )

  const setAndStoreTheme = (newTheme) => {
    setTheme(newTheme)
    localStorage.setItem(APP_THEME_STORAGE_KEY, newTheme)
  }

  return [
    currentTheme,
    setAndStoreTheme,
  ]
}
