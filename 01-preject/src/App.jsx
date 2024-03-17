import "./App.css";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { Game } from "./components/Game";
import { Turns } from "./components/Turns";
import { TURNS } from "./consts";
import { checkWinner, endGame } from "./logic/logic";
import { ModalWinner } from "./components/ModalWinner";
import { Points } from "./components/Points";
import { clearStorege, saveStorage } from "./storage";

export function App() {
  const [board, setBoard] = useState(() => {
    const boardStorage = window.localStorage.getItem("board");
    return boardStorage ? JSON.parse(boardStorage) : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnStorage = localStorage.getItem("turn");
    return turnStorage ?? TURNS.x;
  });
  const [winner, setWinner] = useState(null);
  const [pointsX, setPointsX] = useState(() => {
    const pointsXStorage = localStorage.getItem("pointsX");
    return pointsXStorage ? parseInt(pointsXStorage) : 0;
  });
  const [pointsO, setPointsO] = useState(() => {
    const pointsOStorage = localStorage.getItem("pointsO");
    return pointsOStorage ? parseInt(pointsOStorage) : 0;
  });
  function updateBoard(i) {
    //
    if (board[i] || winner) {
      playAgain();
      return;
    }

    // turns
    const newTrun = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTrun);

    //board
    const newBoard = [...board];
    newBoard[i] = turn;
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
      newWinner === TURNS.x
        ? setPointsX((p) => p + 1)
        : setPointsO((p) => p + 1);
    } else if (endGame(newBoard)) {
      setWinner(false);
    }
  }
  useEffect(() => {
    saveStorage(board, turn, pointsX, pointsO);
  }, [board, turn, pointsX, pointsO]);
  function resetGame() {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);
    setPointsX(0);
    setPointsO(0);
    clearStorege();
  }
  function playAgain() {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);
  }
  return (
    <div className="board">
      <button onClick={resetGame}>Reset Game</button>
      <h1>TIC TAC TOE</h1>
      <Game board={board} updateBoard={updateBoard} />
      <Turns turn={turn} />
      <Points pointsX={pointsX} pointsO={pointsO} />
      <ModalWinner winner={winner} resetGame={playAgain} />
    </div>
  );
}

export default App;
