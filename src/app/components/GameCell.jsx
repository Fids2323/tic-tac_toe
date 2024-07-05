import React from "react";
import GameSymbol from "./gameSymbol";
import clsx from "clsx";

const GameCell = ({isWinner, onClick, symbol}) => {
	return (
		<button className={clsx("border border-gray-400 flex items-center justify-center", isWinner && "bg-red-400")} onClick={onClick}>
			{symbol ? <GameSymbol symbol={symbol} /> : null}
		</button>
	);
};

export default GameCell;
