import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import systems from './systems'
import { LIGHT, DARK } from './theme'

const systemOrder = [
  'b60de999-f860-4ca9-8ede-bdf0424e41ed', // nes
  '18110ff3-6b1a-485a-bfda-73e6b27d60e6', // snes
  'cd1e21b6-61fd-412b-b264-d31d5c1f90c3', // n64
  '909f38cf-164b-4820-a376-80303247b3de', // gamecube
  'ba66a5af-654e-4344-8cb4-aab9f8ac47a6', // wii
  'cb635e03-5b31-4ce5-a399-2e471e319493', // wii u
  '5c2c887a-3fbe-4a57-b488-6429206c3325', // switch
  '3b9dd6fa-8b04-408e-b302-50315d8daa6c', // gb
  '286e78dd-936e-4d5b-89ce-086277b0d7ce', // gba
  '4ad042aa-640b-4437-ba55-0a7226901ba3', // ds
  '12b38fee-9315-450e-ad80-33c0473c439c', // 3ds
  '6117732e-9cef-4d24-b974-235ba823a758', // ps1
  '3e29eafa-2268-4007-83ae-00a0d5136f68', // ps2
  '85b6c75e-6101-4e51-9e17-07e6beecffb5', // ps3
  '9586b04a-3d6b-4af9-972c-dfdc0f610d52', // ps4
  'd9491814-d564-49cc-b299-ef8da1a19ea8', // psp
  '37ac7333-b2ec-4748-bf59-d263200cf9a0', // dreamcast
  '9dae8f3f-1de4-407e-9c68-b54dd7950199', // pc
]

const sortedSystems = systems.sort((a, b) => systemOrder.indexOf(a.id) - systemOrder.indexOf(b.id))
const numGames = sortedSystems.map(system => system.games).flat().length

const createMediaQuery = minWidth => (...args) => css`
  @media only screen and (min-width: ${minWidth}px) { ${css(...args)} }
`

const media = {
  smallUp: createMediaQuery(500),
}

const strikethroughIfUnequal = (x, y) => {
  if (x === y) {
    return x
  }

  return (
    <>
      <span className="strike">
        { x }
      </span>
      {' '}
      { y }
    </>
  )
}

const Bold = styled.h4`
  margin: 0;
  font-weight: bold;
`

const MARGIN = 15

const Wrapper = styled.main`
  min-height: 100%;
  width: 100%;
  padding: 35px 50px;

  h1 {
    margin-top: 0;
  }

  h2 {
    display: inline-block;
  }

  p {
    margin-top: 0;
    color: #444;
  }

  a {
    text-decoration: none;
    margin-left: 5px;
  }

  .strike {
    text-decoration: line-through;
    opacity: 0.5;
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

const Button = styled.button``

const ThemeButton = styled(Button)`
  position: fixed;
  top: ${MARGIN}px;
  right: ${MARGIN}px;
  font-size: 20px;
`

const NavButton = styled(Button)`
  background-color: ${buttonColor};
  height: 40px;
  padding: 0 ${MARGIN}px;
`

const Nav = styled.nav`
  z-index: ${props => props.theme.zIndex.nav};
  position: sticky;
  max-width: 500px;
  top: ${MARGIN}px;
  padding: ${MARGIN}px;
  background-color: ${props => props.theme.colors.nav};

  input[type=text] {
    display: block;
    height: 30px;
    width: 100%;
    margin-bottom: ${MARGIN}px;
    padding: 0 6px;
  }

  .top-cover {
    position: absolute;
    top: -${MARGIN}px;
    left: 0;
    height: ${MARGIN}px;
    width: 100%;
    background-color: ${props => props.theme.colors.background};
  }

  .bottom-cover {
    position: absolute;
    bottom: -${MARGIN}px;
    left: 0;
    height: ${MARGIN}px;
    width: 100%;
    background-color: ${props => props.theme.colors.background};
  }

  .nav-row {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .nav-row ~ .nav-row {
    margin-top: ${MARGIN}px;
  }

  ${NavButton}:not(:last-child) {
    margin-right: ${MARGIN}px;
  }
`

const Info = styled.div`
  transition: max-height 400ms ease;
  max-height: ${props => props.show ? '500px' : 0};
  overflow: hidden;
`

const PlayIcon = styled.span.attrs({ children: '▶' })` color: navy;`
const CompletedIcon = styled.span.attrs({ children: '✓' })` color: green;`
const FavouriteIcon = styled.span.attrs({ children: '✰' })` color: gold;`

const buttonFilterStates = {
  0: null,
  1: true,
  2: false,
}

const App = (props) => {
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
      const matchesSearch = searchValues.every(value => {
        const matchesName = game.name.toLowerCase().includes(value.toLowerCase())
        const matchesTags = game.tags.some(tag => tag.toLowerCase().includes(value.toLowerCase()))

        return matchesName || matchesTags
      })
      const matchesPlayed = isPlayed === 0 ? true : game.played === buttonFilterStates[isPlayed]
      const matchesCompleted = isCompleted === 0 ? true : game.completed === buttonFilterStates[isCompleted]
      const matchesFavourite = isFavourite === 0 ? true : game.favourite === buttonFilterStates[isFavourite]

      return matchesSearch && matchesPlayed && matchesCompleted && matchesFavourite
    })

    return gamesBySystemId
  }, {})

  const numFilteredGames = Object.values(filteredGamesBySystemId).flat().length

  return (
    <Wrapper>
      <ThemeButton onClick={() => props.setTheme(props.theme === LIGHT ? DARK : LIGHT)}>
        { props.theme === LIGHT ? '☀️' : '🌙' }
      </ThemeButton>
      <header>
        <h1>
          Video Game List
        </h1>
      </header>
      <Nav>
        <div className="top-cover" />
        <input
          type="text"
          placeholder="Search for a game"
          value={searchValue}
          onChange={onSearchChange}
        />
        <div className="nav-row">
          <NavButton state={isPlayed} onClick={onToggleIsPlayed}>
            Played
          </NavButton>
          <NavButton state={isCompleted} onClick={onToggleIsCompleted}>
            Completed
          </NavButton>
          <NavButton state={isFavourite} onClick={onToggleIsFavourite}>
            Favourite
          </NavButton>
        </div>
        <div className="nav-row">
          <span>
            {
              strikethroughIfUnequal(
                numGames,
                numFilteredGames,
              )
            }
            {' '}
            games
          </span>
        </div>
        <div className="bottom-cover" />
      </Nav>
      {
        sortedSystems.map(system =>
          <article key={system.id}>
            <h2>
              { system.name }
            </h2>
            <button onClick={onToggleSystemInfoDisplay}>
              { isSystemInfoDisplayed ? '^' : 'v' }
            </button>
            <span>
              {
                strikethroughIfUnequal(
                  system.games.length,
                  filteredGamesBySystemId[system.id].length,
                )
              }
              {' '}
              games
            </span>
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
                  { game.played && <PlayIcon /> }
                  { game.completed && <CompletedIcon /> }
                  { game.favourite && <FavouriteIcon /> }
                </div>
              )
            }
          </article>,
        )
      }
    </Wrapper>
  )
}

export default App
