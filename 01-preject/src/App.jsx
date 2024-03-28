import './App.css'
import { Game } from './components/Game'
import { Turns } from './components/Turns'
import { ModalWinner } from './components/ModalWinner'
import { Points } from './components/Points'
import { useContext } from 'react'
import { GameContext } from './context/GameContext'
export function App() {
  const { resetGame } = useContext(GameContext)
  return (
    <div className='board'>
      <button onClick={resetGame}>Reset Game</button>
      <h1>TIC TAC TOE</h1>
      <Game />
      <Turns />
      <Points />
      <ModalWinner />
    </div>
  )
}

export default App
