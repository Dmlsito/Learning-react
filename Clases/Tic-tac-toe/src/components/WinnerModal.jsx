import { Square } from './Square'
export const WinnerModal = ({ winner, resetGame }) => {
  if (winner !== null) {
    const winnerText = winner === false ? 'Empate' : 'Gano'
    return (
      // When all boxes are covered check who has won //
      <section className='winner'>
        <div className='text'>
          <h2>{winnerText}</h2>
          <header className='win'>{winner && <Square>{winner}</Square>}</header>
          <footer>
            <button onClick={resetGame}> Volver a empezar</button>
          </footer>
        </div>
      </section>
    )
  }
}
