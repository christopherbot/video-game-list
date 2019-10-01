import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './globalStyle'
import systems from './systems'

const systemOrder = [
  'b60de999-f860-4ca9-8ede-bdf0424e41ed', // nes
  '18110ff3-6b1a-485a-bfda-73e6b27d60e6', // snes
  'cd1e21b6-61fd-412b-b264-d31d5c1f90c3', // n64
  '909f38cf-164b-4820-a376-80303247b3de', // gamecube
  'ba66a5af-654e-4344-8cb4-aab9f8ac47a6', // wii
  'cb635e03-5b31-4ce5-a399-2e471e319493', // wii u
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

const Bold = styled.h4`
  margin: 0;
  font-weight: bold;
`

const Wrapper = styled.main`
  min-height: 100%;
  width: 100%;
  padding: 50px;
  background-color: #ddeae3;

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

  button {
    margin: 0 5px;
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
        { Object.values(filteredGamesBySystemId).flat().length } games
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
                { filteredGamesBySystemId[system.id].length } games
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
    </Fragment>
  )
}

export default App
