import './App.css'
import CellUI from './Components/CellUI'
import Grid from './Classes/Grid'

const grid = new Grid()

function App () {
  function play () {
    console.log('play')
  }

  function changeCell (cell) {
    console.log(cell)
  }
  console.log(grid)
  return (
    <div className='App'>
      <button onClick={play}>Play</button>
      <div className='grid'>
        {grid.cells.flat().map((cell, i) => <CellUI onChangeCell={changeCell} cell={cell} key={i} num={i} />)}
      </div>
    </div>
  )
}

export default App
