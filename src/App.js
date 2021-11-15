import { useState } from 'react'
import Gameboard from './components/Gameboard'
import Dropdown from './components/Dropdown'
import StartPrompt from './components/StartPrompt'

import charsLevel1 from './charsLevel1'


import './App.css'

const App = ()=> {
  const [selectionCoords, setSelectionCoords] = useState([])

  const handleGameboardClick = (event) => {
    const parent = document.querySelector('#play-area')
    const bounds = parent.getBoundingClientRect()
    const x = event.clientX - bounds.left
    const y = event.clientY - bounds.top

    setSelectionCoords([x, y])
  }

  function checkCharacter(name) {
    alert(`clicked ${name}`)
    setSelectionCoords([])
}
  return (
    <div className='App'>
      <StartPrompt />
      <div id='play-area'>
        <Gameboard 
        handleGameboardClick={handleGameboardClick}
        checkCharacter={checkCharacter}
        selectionCoords={selectionCoords}/>
        <Dropdown 
            characters={charsLevel1}
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
