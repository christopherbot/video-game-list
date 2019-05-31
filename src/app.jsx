import React, { Fragment, useState } from 'react'
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

const buttonColor = ({ state }) => {
  switch (state) {
    case 1:
      return 'green'
    case 2:
      return 'red'
    default:
      return 'grey'
  }
}

const Button = styled.button`
  background-color: ${buttonColor};
`

const buttonFilterStates = {
  0: null,
  1: true,
  2: false,
}

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const [isPlayed, setIsPlayed] = useState(0)
  const [isCompleted, setIsCompleted] = useState(0)
  const [isFavourite, setIsFavourite] = useState(0)

  const onSearchChange = ({ target }) => setSearchValue(target.value)

  const onToggleIsPlayed = () => setIsPlayed((isPlayed + 1) % Object.keys(buttonFilterStates).length)
  const onToggleIsCompleted = () => setIsCompleted((isCompleted + 1) % Object.keys(buttonFilterStates).length)
  const onToggleIsFavourite = () => setIsFavourite((isFavourite + 1) % Object.keys(buttonFilterStates).length)

  const searchValues = searchValue.split(' ')
  const filteredGamesBySystemId = systems.reduce((gamesBySystemId, system) => {
    gamesBySystemId[system.id] = system.games.filter((game) => {
      const matchesName = searchValues.every(value => game.name.toLowerCase().includes(value.toLowerCase()))
      const matchesPlayed = isPlayed === 0 ? true : game.played === buttonFilterStates[isPlayed]
      const matchesCompleted = isCompleted === 0 ? true : game.completed === buttonFilterStates[isCompleted]
      const matchesFavourite = isFavourite === 0 ? true : game.favourite === buttonFilterStates[isFavourite]

      return matchesName && matchesPlayed && matchesCompleted && matchesFavourite
    })

    return gamesBySystemId
  }, {})

  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <header>
          <h1>
            Video Game List
          </h1>
        </header>
        <input
          type="text"
          placeholder="Search for a game"
          value={searchValue}
          onChange={onSearchChange}
        />
        <Button state={isPlayed} onClick={onToggleIsPlayed}>Played</Button>
        <Button state={isCompleted} onClick={onToggleIsCompleted}>Completed</Button>
        <Button state={isFavourite} onClick={onToggleIsFavourite}>Favourite</Button>
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
                filteredGamesBySystemId[system.id].map(game =>
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
