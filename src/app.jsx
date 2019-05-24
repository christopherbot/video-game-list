import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components'
import GlobalStyle from './globalStyle'
import systems from './systems'

console.log(systems)

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 50px;
  background-color: #ddeae3;

  p {
    margin-top: 0;
    color: #444;
  }
`

export default class extends PureComponent {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Wrapper>
          <h1>Video Game List</h1>
        </Wrapper>
      </Fragment>
    )
  }
}
