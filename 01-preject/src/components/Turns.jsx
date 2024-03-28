import { Square } from './Square'
import { TURNS } from '../consts'
import { useContext } from 'react'
import { GameContext } from '../context/GameContext'
export const Turns = () => {
  const { turn } = useContext(GameContext)
  return (
    <div className='turn'>
      <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
      <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
    </div>
  )
}
