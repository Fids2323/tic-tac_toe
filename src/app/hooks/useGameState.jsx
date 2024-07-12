import {useState} from "react";
import {GAME_SYMBOL, MOVE_ORDER} from "../components/game/constants";

export const useGameState = (playersCount) => {
	const [{cells, currentMove}, setGameState] = useState(() => ({
		cells: new Array(19 * 19).fill(null),
		currentMove: GAME_SYMBOL.CROSS,
	}));

	const getNextMove = (currentMove, playersCount) => {
		const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount);

		const indexMove = slicedMoveOrder.indexOf(currentMove) + 1;
		return slicedMoveOrder[indexMove] ?? slicedMoveOrder[0];
	};

	const nextMove = getNextMove(currentMove, playersCount);

	const handleCellClick = (id) => {
		setGameState((prevState) => {
			if (prevState.cells[id]) return prevState;
			return {
				...prevState,
				currentMove: getNextMove(prevState.currentMove, playersCount),
				cells: prevState.cells.map((cell, i) => (id === i ? prevState.currentMove : cell)),
			};
		});
	};
	return {cells, currentMove, nextMove, handleCellClick};
};
