import { useState, useEffect, useReducer } from 'react'
import Gameboard from './components/Gameboard'
import Scorebox from './components/Scorebox'
import Dropdown from './components/Dropdown'
import Prompt from './components/Prompt'
import charsLevel1 from './charsLevel1'
import './App.css'

const App = ()=> {
  var characters = charsLevel1
  const [gameState, setGameState] = useState('start')
  const [selectionCoords, setSelectionCoords] = useState([])
  const [foundCounter, setFoundCounter] = useState(0)
  const [timerStart, setTimerStart] = useState('')
  const [timerEnd, setTimerEnd] = useState('')

  // handle when a user clicks on a character 
  const handleGameboardClick = (event) => {
    const parent = document.querySelector('.App')
    const bounds = parent.getBoundingClientRect()
    const x = event.clientX - bounds.left
    const y = event.clientY - bounds.top
    setSelectionCoords([x, y])
  }
  // start the game
  function startGame() {
    setGameState('play')
    setTimerStart(Date.now())
  }
  // check local character array to see if the character has been found yet
  // if not found, then cross-check x/y ranges and mutate array if found
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
        characters = tempCharacters
        setSelectionCoords([])
        setFoundCounter(foundCounter + 1)
      } else {
        setSelectionCoords([])
      }
  }
  function checkWin() {
    setTimerEnd(Date.now())
    if(foundCounter === 5) {
      alert('you did it, good job')
      setGameState('end')
    }
  }
  // reset the state of the game
  function resetGame() {
    characters.forEach(character => {
      character.found = false
    })
    setFoundCounter(0)
    setTimerStart('')
    setTimerEnd('')
    setGameState('start')
  }
  useEffect(() => {
    checkWin()
  }, [foundCounter])
  return (
    <div className='App'>
      <Gameboard 
      show={gameState === 'play' ? 'block' : 'none'}
      handleGameboardClick={handleGameboardClick}
      checkCharacter={checkCharacter}
      selectionCoords={selectionCoords}
      characters={characters}
      foundCounter={foundCounter}/>
      <Dropdown 
          characters={characters}
          checkCharacter={checkCharacter}
          coords={selectionCoords}
          display={selectionCoords.length === 0 ? 'none' : 'block'}/>
      <Scorebox 
      show={gameState === 'play' ? 'flex' : 'none'}
      characters={characters}/>
      <Prompt 
      elapsed={timerEnd - timerStart}
      startGame={startGame}
      resetGame={resetGame}
      show={gameState === 'play' ? 'none' : 'block'}
      gameState={gameState}/>
    </div>
  )
}

export default App;
