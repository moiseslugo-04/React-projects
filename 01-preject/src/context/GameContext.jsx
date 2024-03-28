import confetti from 'canvas-confetti'
import { createContext, useState, useEffect, useMemo } from 'react'
import { TURNS } from '../consts'
import { checkWinner, endGame, handlePoints } from '../logic/logic'
export const GameContext = createContext()
export const GameContextProvider = (props) => {
  const initialState = {
    board: Array(9).fill(null),
    turn: TURNS.x,
    winner: null,
    pointsO: 0,
    pointsX: 0,
  }
  const [gameState, setGameState] = useState(() => {
    initialState
    // save value at the local Storage
    const storageState = JSON.parse(localStorage.getItem('gameState'))
    //checks which one is no undefine or null and return it
    return storageState || initialState
  })
  useEffect(() => {
    // save game state to local storage
    localStorage.setItem('gameState', JSON.stringify(gameState))
  }, [gameState])

  // update board
  const updateBoard = useMemo(
    () => (index) => {
      const { turn, board, winner } = gameState
      if (board[index] || winner) {
        return
      }

      // update turn
      const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
      setGameState((prevState) => ({ ...prevState, turn: newTurn }))

      // update board
      const newBoard = [...board]
      newBoard[index] = turn
      setGameState((prevState) => ({ ...prevState, board: newBoard }))

      // check if the board is full
      if (endGame(newBoard)) {
        setGameState((prevState) => ({ ...prevState, winner: false }))
      } else if (checkWinner(newBoard)) {
        // check if there's a  winner
        const newWinner = checkWinner(newBoard)
        setGameState((prevState) => ({ ...prevState, winner: newWinner }))
        handlePoints(newWinner)
      }
    },
    [gameState]
  )
  function handlePoints(winner) {
    console.log('first')
    setGameState((prevState) => {
      const newPointsX = prevState.pointsX + (winner == 'x' ? 1 : 0)
      const newPointsO = prevState.pointsO + (winner == 'o' ? 1 : 0)
      return {
        ...prevState,
        pointsX: newPointsX,
        pointsO: newPointsO,
      }
    })
  }
  const playAgain = useMemo(
    () => () => {
      setGameState((prevState) => ({
        ...prevState,
        board: Array(9).fill(null),
        turn: TURNS.x,
        winner: null,
      }))
    },
    []
  )
  const resetGame = useMemo(
    () => () => {
      setGameState(initialState)
      localStorage.removeItem('gameState')
    },
    []
  )

  return (
    <GameContext.Provider
      value={{
        updateBoard,
        resetGame,
        playAgain,
        ...gameState,
      }}
    >
      {props.children}
    </GameContext.Provider>
  )
}
