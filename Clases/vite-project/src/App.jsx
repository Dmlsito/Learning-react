import "./app.css"
import {useState} from "react" 

//Game's turns
const TURNS = {
    X: "x",
    O: "o",
}
//Square's component
const Square = ({children, updateBoard, index, isSelected}) => {
    const className = `square ${isSelected ? `is-selected`: ``}`;
    
    const handleClick = () => {
        updateBoard(index);
    }
    return(
        <div className = {className} onClick = {handleClick}>
            {children}
        </div>
    )
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
       }
    }
    
    return (
        <main className = "board">
            <h1>Tic tac toe</h1>
            <section className = "game">
                {
                    board.map((_,index) => {
                        return (
                            <Square key = {index} index = {index} updateBoard = {updateBoard}>
                             {board[index]}
                            </Square>
                        )
                    })
                }
            </section>
            <section className = "turn">
                <Square isSelected = {turn === TURNS.X}>{TURNS.X}</Square>
                <Square isSelected = {turn === TURNS.O}>{TURNS.O}</Square>
            </section>
        </main>
    )
}

export default App