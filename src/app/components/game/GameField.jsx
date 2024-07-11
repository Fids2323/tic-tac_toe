"use client"
import {UiButton} from '../ui-kit/UiButton'
import { useState } from 'react'
import {GAME_SYMBOL, MOVE_ORDER} from './constants.js'



// components
import { GameFieldLayout } from './GameFieldLayout'
import { GameMoveInfo } from './GameMoveInfo'
import { GameGrid } from './GameGrid'
import { GameCell } from './GameCell'


const getNextMove = (currentMove) => {
  const indexMove = MOVE_ORDER.indexOf(currentMove) + 1;
  return MOVE_ORDER[indexMove] ||  MOVE_ORDER[0];
}

export const GameField = () => {
  const [{cells,currentMove},setGameState] = useState(() => ({
    cells: new Array(19*19).fill(null),
    currentMove: GAME_SYMBOL.CROSS,
  }))

  const nextMove = getNextMove(currentMove)
  const handleCellClick = (id) => {
    console.log(id);
  }
  

  return (
    <GameFieldLayout>
        <GameMoveInfo actions={<div className='flex items-center gap-3'>
            <UiButton children="Ничья" variant='primary' size='md'/>
            <UiButton children="Сдаться" variant='outline' size='md'/></div>}
        currentMove={currentMove} 
        nextMove = {nextMove}/>
        <GameGrid>
            {cells.map((_,index)=>(
                <GameCell key={index} onClick={handleCellClick}>
                  <GAME_SYMBOL  className='w-5 h-5'/>
                </GameCell>
             ))}           
        </GameGrid>
    </GameFieldLayout>
  )
}


