import { useState, useEffect } from 'react'
import Gameboard from './components/Gameboard'
import Dropdown from './components/Dropdown'
import StartPrompt from './components/StartPrompt'
import EndPrompt from './components/EndPrompt'

import charsLevel1 from './charsLevel1'


import './App.css'

const App = ()=> {
  const [gameStart, setGameStart] = useState(false)
  const [selectionCoords, setSelectionCoords] = useState([])
  const [characters, setCharacters] = useState(charsLevel1)
  const [foundCounter, setFoundCounter] = useState(0)

  const handleGameboardClick = (event) => {
    const parent = document.querySelector('#play-area')
    const bounds = parent.getBoundingClientRect()
    const x = event.clientX - bounds.left
    const y = event.clientY - bounds.top

    setSelectionCoords([x, y])
  }

  function startGame() {
    setGameStart(true)
  }

  function checkCharacter(name) {
    const toCheck = characters.filter(character => character.name === name)[0]
    if(toCheck.found) {
      alert('you already found this one, dummy!')
      setSelectionCoords([])
      return
    }

    if(
      (selectionCoords[0] >= toCheck.rangeX[0] && selectionCoords[0] <= toCheck.rangeX[1]) &&
      (selectionCoords[1] >= toCheck.rangeY[0] && selectionCoords[1] <= toCheck.rangeY[1])){
        const tempCharacters = characters.filter(character => character.name !== name)
        toCheck.found = true
        tempCharacters.push(toCheck)
        setCharacters(tempCharacters)
        setSelectionCoords([])
        setFoundCounter(foundCounter + 1)
      } else {
        setSelectionCoords([])
      }
  }
  function checkWin() {
    if(foundCounter === 5) {
      alert('you won, good job')
      setGameStart(false)
    }
  }
  function resetGame() {
    setSelectionCoords([])
    setCharacters(charsLevel1)
    setFoundCounter(0)
    setGameStart(true)
  }
  useEffect(() => {
    checkWin()
  }, [characters])

  return (
    <div className='App'>
      <StartPrompt 
      startGame={startGame}
      show={gameStart ? 'none' : 'block'}/>
      <div id='play-area'>
        <Gameboard 
        show={gameStart ? 'block' : 'none'}
        handleGameboardClick={handleGameboardClick}
        checkCharacter={checkCharacter}
        selectionCoords={selectionCoords}
        characters={characters}
        foundCounter={foundCounter}/>
        <Dropdown 
            characters={characters}
            checkCharacter={checkCharacter}
            coords={selectionCoords}
            display={selectionCoords.length === 0 ? 'none' : 'block'}
            offsetX={selectionCoords[0]}
            offsetY={selectionCoords[1]}/>
      </div>
      <EndPrompt 
      show={gameStart ? 'none' : 'block'}/>
    </div>
  )
}

export default App;
