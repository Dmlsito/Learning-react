import { WINNER_COMBOS } from '../constants'

// To check the winner //
export const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    // Desestructuracion //
    const [a, b, c] = combo
    if (boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]) {
      return boardToCheck[a] // x o y
    }
  }
  return null
}
// To Check endGame //
export const checkEndGame = (newBoard) => {
  // If all cells aren't empty return true //
  return newBoard.every(square => square !== null)
}
