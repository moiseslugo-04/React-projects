import { Square } from './Square'
import { GameContext } from '../context/GameContext'
import { useContext } from 'react'

export const Game = () => {
  const { board } = useContext(GameContext)
  return (
    <div className='game'>
      {board.map((value, index) => {
        return (
          <Square key={index} index={index}>
            {value}
          </Square>
        )
      })}
    </div>
  )
}
