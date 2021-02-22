export default class Cell {
  constructor (alive = false, x, y) {
    console.log('cell')
    this.alive = alive
    this.x = x
    this.y = y
  }

  switch () {
    this.alive = !this.alive
  }
}
