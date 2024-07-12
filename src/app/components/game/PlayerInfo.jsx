
import { GameSymbol } from './GameSymbol';
import {Profile} from "../profile";
import clsx from 'clsx';


export const PlayerInfo = ({player, isRight
}) => {
  return (
    <div className="flex  items-center ">
        <div className={clsx("relative", isRight && isRight, "order-3")}>
            <Profile className="w-44"  avatar={player.avatar} name={player.name} rating={player.rating}/>
            <div className="bg-white absolute -left-1 -top-1 w-5 h-5 rounded-full flex items-center justify-center">
            <GameSymbol  symbol={player.symbol}/>
            </div>
        </div>
        <div className="w-px h-8 bg-slate-400 mx-3" />

        <div className="order-2">
            01:08
        </div>
</div>
  )
}


// {clsx("text-slate-900 text-lg font-semibold", isRight && isRight, "order-1")}