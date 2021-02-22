// import { useState } from 'react'
import './CellUI.css'

export default function CellUI (props) {
  return (<div className={'Cell ' + (props.cell.alive ? 'alive' : 'dead')} onClick={() => props.onChangeCell(props.cell)}>{props.num}</div>)
}
