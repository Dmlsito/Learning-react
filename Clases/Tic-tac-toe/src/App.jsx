import "./App.css"
import {useState} from "react"

//
const TURNS = {
  X: "x",
  O: "o"
}

const WINNER_COMBOS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const Square = ({children, updateBoard, index, isSelected}) => {
  const className =  isSelected ? "square selected": "square"; 
  
  const handleClick = () => {
    updateBoard(index)
  }
 
  return (
    <div className= {className} onClick = {handleClick}>
      {children}
    </div>
  )
}


const App = () => {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null);// null -> no hay ganador true -> ganador false -> tie
  
  //To check the winner
  const checkWinner = (boardToCheck) => {
    for(const combo of WINNER_COMBOS) {
      //Desestructuracion
      const [a, b, c] = combo;
      if(boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]){
          return boardToCheck[a] // x o y
        }
    }
    return null;
  }

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
      setWinner(newWinner);
    }
  }
  
  return (
    <main className = "board">
      <h1>Tic tac toe</h1>
      <button onClick = {resetGame}> Volver a empezar</button>
      <section className = "game">
       {
        board.map((square, index) => {
          return <Square key = {index} index = {index} updateBoard = {updateBoard}>{square}</Square>
        })
       }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      
       {
        // When all boxes are covered check who has won
        winner !== null && (
          <section className = "winner">
            <div className = "text">
              <h2>{
                winner === false ? "Empate": "Gano"
              }</h2>
              <header className = "win">
                {
                  winner && <Square>{winner}</Square>
                }
              </header>
              <footer>
                <button onClick = {resetGame}> Volver a empezar</button>
              </footer>
            </div>
          </section>
        )
       }
      
    </main>
    
  )
}

export default App