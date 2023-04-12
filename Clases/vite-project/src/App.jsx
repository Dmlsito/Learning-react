import "./app.css"
import {useState} from "react" 
import confetti from "canvas-confetti";
import Square from "./components/Square"
import {TURNS, WINNER_COMBOS } from "./constants"


const App = () => {
    //Dibujamos el tablero, el estado del tablero inicial sera v
    const [board, setBoard] =  useState(Array(9).fill(null))
    const [turn, setTurn] = useState(TURNS.X);
    const [winner, setWinner] = useState(null) 

    const checkWinner = (boardToCheck) => {
        //Check all posible winner combinations
        for(const combo of WINNER_COMBOS) {
            const [a,b,c] = combo;
            if (boardToCheck[a] && 
                boardToCheck[a] === boardToCheck[b] &&
                boardToCheck[a] === boardToCheck[c]
                ){            
                    return boardToCheck[a]
            } // x or o
        }
        //There's not winner
        return null;
    }

    const checkEndGame = (newBoard) => {
        //If all cells are busy return true
        return newBoard.every(square => square !== null)
    }
    
    const updateBoard = (index) => {
        if(board[index] || winner) return

        const newBoard = [...board]
        newBoard[index] = turn; // x o y
        //Render the board
        setBoard(newBoard)

        //We check wich turn it is
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn); 

        const newWinner = checkWinner(newBoard)
        if(newWinner) {
           setWinner(newWinner);
           confetti();
        }
        // To do: check if game is over 
        else if(checkEndGame(newBoard)){
            //False -> tie
            setWinner(false)
        }
    }
    const resetGame = () =>{
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null)
    }
    
    return (
        <main className = "board">
            <h1>Tic tac toe</h1>
            <button onClick = {resetGame}>Reset del juego</button>
            <section className = "game">
                {
                    board.map((square,index) => {
                        return (
                            <Square key = {index} index = {index} updateBoard = {updateBoard}>
                             {square}
                            </Square>
                        )
                    })
                }
            </section>
            <section className = "turn">
                <Square isSelected = {turn === TURNS.X}>{TURNS.X}</Square>
                <Square isSelected = {turn === TURNS.O}>{TURNS.O}</Square>
            </section>
            {
                /*Esto funciona porque en JavaScript, true && expresión siempre evalúa la expresión, y false && expresión siempre evalúa a false.
                Por eso, si la condición es true, el elemento justo después de && aparecerá en el resultado. Si es false, React lo ignorará. */
                winner !== null &&(
                    <section className = "winner">
                        <div className = "text">
                            <h2>
                                {
                                    winner === false ? "Empate": "Gano" 
                                }
                            </h2>
                            <header className = "win">
                                {winner && <Square>{winner}</Square>}
                            </header> 

                            <footer>
                                <button onClick = {resetGame}>Empezar de nuevo</button>
                            </footer>
                        </div>
                    </section>
                )
            }
        </main>
    )
}

export default App