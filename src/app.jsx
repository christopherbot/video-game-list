import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import systems from './systems'
import { LIGHT, DARK } from './theme'
import ThemeButton from './components/buttons/themeButton'
import FilterButton from './components/buttons/filterButton'
import SystemInfo from './components/systemInfo'

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
  '85fec36e-276c-4f27-b698-c0e8976e4afc', // xbox 360
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

  a {
    text-decoration: none;
    margin-left: 5px;
  }

  .strike {
    text-decoration: line-through;
    opacity: 0.5;
  }
`

const Nav = styled.nav`
  z-index: ${props => props.theme.zIndex.nav};
  position: sticky;
  max-width: 500px;
  top: ${props => props.theme.spacing.default}px;
  padding: ${props => props.theme.spacing.default}px;
  background-color: ${props => props.theme.colors.nav};

  input[type=text] {
    display: block;
    height: 30px;
    width: 100%;
    margin-bottom: ${props => props.theme.spacing.default}px;
    padding: 0 6px;
  }

  .top-cover {
    position: absolute;
    top: -${props => props.theme.spacing.default}px;
    left: 0;
    height: ${props => props.theme.spacing.default}px;
    width: 100%;
    background-color: ${props => props.theme.colors.background};
  }

  .bottom-cover {
    position: absolute;
    bottom: -${props => props.theme.spacing.default}px;
    left: 0;
    height: ${props => props.theme.spacing.default}px;
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
    margin-top: ${props => props.theme.spacing.default}px;
  }

  ${FilterButton}:not(:last-child) {
    margin-right: ${props => props.theme.spacing.default}px;
  }
`

const PlayIcon = styled.span.attrs({ children: '▶' })` color: navy;`
const CompletedIcon = styled.span.attrs({ children: '✓' })` color: green;`
const FavouriteIcon = styled.span.attrs({ children: '✰' })` color: gold;`

const FILTER_STATES = {
  0: null,
  1: true,
  2: false,
}
const numFilterStates = Object.keys(FILTER_STATES).length

const App = (props) => {
  const [searchValue, setSearchValue] = useState('')
  const onSearchChange = ({ target }) => setSearchValue(target.value)

  const [isPlayed, setIsPlayed] = useState(0)
  const [isCompleted, setIsCompleted] = useState(0)
  const [isFavourite, setIsFavourite] = useState(0)
  const onToggleIsPlayed = () => setIsPlayed((isPlayed + 1) % numFilterStates)
  const onToggleIsCompleted = () => setIsCompleted((isCompleted + 1) % numFilterStates)
  const onToggleIsFavourite = () => setIsFavourite((isFavourite + 1) % numFilterStates)

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
      const matchesPlayed = isPlayed === 0 ? true : game.played === FILTER_STATES[isPlayed]
      const matchesCompleted = isCompleted === 0 ? true : game.completed === FILTER_STATES[isCompleted]
      const matchesFavourite = isFavourite === 0 ? true : game.favourite === FILTER_STATES[isFavourite]

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
          <FilterButton state={isPlayed} onClick={onToggleIsPlayed}>
            Played
          </FilterButton>
          <FilterButton state={isCompleted} onClick={onToggleIsCompleted}>
            Completed
          </FilterButton>
          <FilterButton state={isFavourite} onClick={onToggleIsFavourite}>
            Favourite
          </FilterButton>
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
            <SystemInfo
              show={isSystemInfoDisplayed}
              system={system}
            />
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
