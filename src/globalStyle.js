import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    box-sizing: border-box;
  }

  body {
    height: 100%;
    margin: 0;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  #main-canvas {
    height: 100%;
  }
`

export default GlobalStyle
