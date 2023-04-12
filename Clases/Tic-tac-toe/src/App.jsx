import "./App.css"
import {useState} from "react"
import {Square} from "./components/Square"
import { BoardSize } from "./components/Board"
import { TURNS, WINNER_COMBOS } from "./constants"
import { checkWinner, checkEndGame } from "./logic/board"
import { WinnerModal } from "./components/WinnerModal"


const App = () => {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null);// null -> no hay ganador true -> ganador false -> tie
  
  // To reset the game 
  const resetGame = () => {
    setTurn(TURNS.X);
    setBoard(Array(9).fill(null))
    setWinner(null);

  }
  
  //To update board
  const updateBoard = (index) => {
    if(board[index]) return

    const newBoard = [...board]
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O: TURNS.X
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner); // -> winner
    }else if(checkEndGame(newBoard)){
      setWinner(false) // -> tie
    }
  }
  
  return (
    <main className = "board">
      <h1>Tic tac toe</h1>
      <button onClick = {resetGame}> Volver a empezar</button>
      <BoardSize board = {board} updateBoard = {updateBoard}></BoardSize>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
      </main>
    
  )
}

export default App