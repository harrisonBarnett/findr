import { useState } from 'react'
import Gameboard from './components/Gameboard'
import Dropdown from './components/Dropdown'
import StartPrompt from './components/StartPrompt'

import charsLevel1 from './charsLevel1'


import './App.css'

const App = ()=> {
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

  function checkCharacter(name) {
    const toCheck = characters.filter(character => character.name === name)[0]
    if(
      (selectionCoords[0] >= toCheck.rangeX[0] && selectionCoords[0] <= toCheck.rangeX[1]) &&
      (selectionCoords[1] >= toCheck.rangeY[0] && selectionCoords[1] <= toCheck.rangeY[1])){
        const tempCharacters = characters.filter(character => character.name !== name)
        toCheck.found = true
        tempCharacters.push(toCheck)
        setCharacters(tempCharacters)
        setSelectionCoords([])
      } else {
        alert('nope')
        setSelectionCoords([])
      }
}
  return (
    <div className='App'>
      <StartPrompt />
      <div id='play-area'>
        <Gameboard 
        handleGameboardClick={handleGameboardClick}
        checkCharacter={checkCharacter}
        selectionCoords={selectionCoords}
        characters={characters}/>
        <Dropdown 
            characters={characters}
            checkCharacter={checkCharacter}
            coords={selectionCoords}
            display={selectionCoords.length === 0 ? 'none' : 'block'}
            offsetX={selectionCoords[0]}
            offsetY={selectionCoords[1]}/>
      </div>
    </div>
  )
}

export default App;
