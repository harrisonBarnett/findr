import './App.css'

import Gameboard from './components/Gameboard'
import StartPrompt from './components/StartPrompt'

const App = ()=> {

  return (
    <div className='App'>
      <StartPrompt />
      <div id='play-area'>
        <Gameboard />
      </div>
    </div>
  )
}

export default App;
