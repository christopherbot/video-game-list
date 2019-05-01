import React, { Fragment } from 'react'
import styled from 'styled-components'
import GlobalStyle from './globalStyle'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 50px;
  background-color: ${props => props.clicked ? 'gold' : '#4ec785'};
  transition: background-color 200ms;

  p {
    margin-top: 0;
    color: #444;
  }
`

export default class extends React.PureComponent {
  state = {
    clicked: false,
  }
  
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Wrapper clicked={this.state.clicked}>
          <p>This app is styled entirely using <code>styled-components</code>.</p>
          <p>No css files to be found!</p>
          <button onClick={() => this.setState(state => ({ clicked: !state.clicked }))}>
            Click
          </button>
        </Wrapper>
      </Fragment>
    )
  }
}
