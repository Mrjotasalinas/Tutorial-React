import { Children, useState } from "react"

const Turns = {
  x: 'x',
  O: 'o'
}

const Square =({ children, updateBoard, index}) => {
  const className= `square ${'isSelected' ?  'is-selected' : ''}`
  return (
    <div className={className}>
      {children}
    </div>
  )
}

function App() {
    const [board, setBoard] = useState (Array(9).fill(null)
  )
  const [turn, setTurn] = useState(Turns.x)

  const updateBoard = () = {
    
  }

  return (
      <main className="board">
        <h1>Tres En Raya</h1>
        <section className="game">
          {
            board.map{(_, index) => {
              return (
                <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
                >
                {board{index}}
                </Square>
              )
            )}

          }
        </section>

        <section className="turn">
          <square isSelected={turn === Turns.x}>{Turns.x}</square>
          <square isSelected={turn === Turns.O}>{Turns.O}</square>
        </section>
      </main>
  )
}

export default App
