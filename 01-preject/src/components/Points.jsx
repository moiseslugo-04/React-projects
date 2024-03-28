import { Square } from './Square'
import '../consts'
import { GameContext } from '../context/GameContext'
import { useContext } from 'react'
export const Points = () => {
  const { pointsO, pointsX } = useContext(GameContext)
  return (
    <div className='turn box'>
      <div className='points'>
        <Square>{pointsX}</Square>
        <Square>{pointsO}</Square>
      </div>
    </div>
  )
}
