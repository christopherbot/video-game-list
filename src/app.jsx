import React, { Fragment } from 'react'
import styled from 'styled-components'
import GlobalStyle from './globalStyle'
import systems from './systems'

const Bold = styled.h4`
  margin: 0;
  font-weight: bold;
`

const Wrapper = styled.main`
  min-height: 100%;
  width: 100%;
  padding: 50px;
  background-color: #ddeae3;

  p {
    margin-top: 0;
    color: #444;
  }

  a {
    text-decoration: none;
    margin-left: 5px;
  }
`

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <header>
          <h1>
            Video Game List
          </h1>
        </header>
        {
          systems.map(system =>
            <article key={system.id}>
              <h2>
                { system.name }
              </h2>
              <Bold>Systems:</Bold>
              {
                system.systems.map(sys =>
                  <div key={sys.id}>
                    { sys.description && `${sys.description} -` } { sys.color }
                  </div>
                )
              }
              <Bold>Cables:</Bold>
              {
                system.cables.map(cable =>
                  <div key={cable}>
                    { cable }
                  </div>
                )
              }
              <Bold>Accessories:</Bold>
              {
                system.accessories.map(accessory =>
                  <div key={accessory}>
                    { accessory }
                  </div>
                )
              }
              <Bold>Controllers:</Bold>
              {
                system.controllers.map(controller =>
                  <div key={controller}>
                    { controller }
                  </div>
                )
              }
              <Bold>Games:</Bold>
              {
                system.games.map(game =>
                  <div key={game.id}>
                    <span>
                      { game.name }
                    </span>
                    <a href={game.url} target="_blank" rel="noopener noreferrer">
                      🔗
                    </a>
                  </div>
                )
              }
            </article>,
          )
        }
      </Wrapper>
    </Fragment>
  )
}

export default App
