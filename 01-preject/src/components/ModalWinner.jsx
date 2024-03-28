import { Square } from './Square'
import { GameContext } from '../context/GameContext'
import { useContext } from 'react'

export const ModalWinner = () => {
  const { winner, playAgain } = useContext(GameContext)
  if (winner == null) return
  const text = winner === false ? 'TIE' : 'Winner'
  return (
    <div className='winner'>
      <header className='text'>
        <h1>{text}</h1>
        <Square>{winner ? winner : ':('}</Square>
      </header>
      <footer>
        <button onClick={playAgain}>Play Again</button>
      </footer>
    </div>
  )
}
