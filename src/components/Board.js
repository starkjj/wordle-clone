import React from 'react'
import './Board.css'
import BoardRow from './BoardRow'

const Board = () => {
  return (
    <div className='board'>
        <BoardRow/>
        <BoardRow/>
        <BoardRow/>
        <BoardRow/>
        <BoardRow/>
        <BoardRow/>
    </div>
  )
}

export default Board