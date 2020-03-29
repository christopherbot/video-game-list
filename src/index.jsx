import React from 'react'
import ReactDOM from 'react-dom'
import MainApp from './mainApp'

const rootElement = document.querySelector('#main-canvas')

const renderApplication = () => ReactDOM.render(
  <MainApp />,
  rootElement,
)

renderApplication()
