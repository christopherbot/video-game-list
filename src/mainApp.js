import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import App from './app'
import GlobalStyle from './globalStyle'
import themes, { LIGHT } from './theme'

const MainApp = () => {
  const [theme, setTheme] = useState(LIGHT)

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyle />
        <App
          setTheme={setTheme}
          theme={theme}
        />
      </>
    </ThemeProvider>
  )
}

export default MainApp
