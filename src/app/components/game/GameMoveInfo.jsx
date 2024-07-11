// icons
import { GameSymbol } from "./GameSymbol"

export const GameMoveInfo = ({actions, currentMove, nextMove}) => {
  return (
    <div className='mb-4 flex justify-between items-center'>
    {/* info */}
    <div >
        <div className='flex gap-1  items-center '>
            Ход:  
            <GameSymbol symbol={currentMove} className= "w-5 h-5"/>
        </div>
        <div className='flex gap-1 items-center'>
            Следующий: 
            <GameSymbol symbol={nextMove} className= "w-3 h-3"/>
        </div>
    </div>
    {/* buttons */}
    {actions}
</div>
  )
}


