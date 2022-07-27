import React from 'react'
import BoardCell from './BoardCell'
import './BoardRow.css'

const BoardRow = () => {
  return (
    <div className='boardRow'>
        <BoardCell/>
        <BoardCell/>
        <BoardCell/>
        <BoardCell/>
        <BoardCell/>
    </div>
  )
}

export default BoardRow