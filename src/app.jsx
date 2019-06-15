import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './globalStyle'
import systems from './systems'
const sortedSystems = systems.sort((a, b) => { console.log('sorting'); return a.index - b.index })

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

const Info = styled.div`
  transition: max-height 400ms ease;
  max-height: ${props => props.show ? '500px' : 0};
  overflow: hidden;
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

  const [isSystemInfoDisplayed, setIsSystemInfoDisplayed] = useState(false)
  const onToggleSystemInfoDisplay = () => setIsSystemInfoDisplayed(!isSystemInfoDisplayed)

  const searchValues = searchValue.split(' ')
  const filteredGamesBySystemId = sortedSystems.reduce((gamesBySystemId, system) => {
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
        { Object.values(filteredGamesBySystemId).flat().length } games found.
        <Button state={isPlayed} onClick={onToggleIsPlayed}>Played</Button>
        <Button state={isCompleted} onClick={onToggleIsCompleted}>Completed</Button>
        <Button state={isFavourite} onClick={onToggleIsFavourite}>Favourite</Button>
        {
          sortedSystems.map(system =>
            <article key={system.id}>
              <h2>
                { system.name }
                <button onClick={onToggleSystemInfoDisplay}>
                  { isSystemInfoDisplayed ? '^' : 'v' }
                </button>
              </h2>
              <Info show={isSystemInfoDisplayed}>
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
              </Info>
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
