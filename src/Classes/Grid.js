import Cell from './Cell'

export default class Grid {
  constructor () {
    this.cells = Array(10).fill(Array(10).fill())
    this.cells.forEach((arr, y) => {
      arr.forEach((_cell, x) => {
        arr[x] = new Cell(false, x, y)
      })
    })
  }
}
