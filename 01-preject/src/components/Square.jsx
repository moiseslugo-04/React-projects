import { useContext } from 'react'
import { GameContext } from '../context/GameContext'

export const Square = ({ children, index, isSelected }) => {
  const { updateBoard } = useContext(GameContext)
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => updateBoard(index)
  return (
    <div className={className} onClick={handleClick}>
      {' '}
      {children}
    </div>
  )
}
