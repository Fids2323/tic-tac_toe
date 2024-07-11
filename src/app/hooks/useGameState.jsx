import {useState} from "react";
import {GAME_SYMBOL, MOVE_ORDER} from "../components/game/constants";

export const useGameState = () => {
	const [{cells, currentMove}, setGameState] = useState(() => ({
		cells: new Array(19 * 19).fill(null),
		currentMove: GAME_SYMBOL.CROSS,
	}));

	const getNextMove = (currentMove) => {
		const indexMove = MOVE_ORDER.indexOf(currentMove) + 1;
		return MOVE_ORDER[indexMove] ?? MOVE_ORDER[0];
	};

	const nextMove = getNextMove(currentMove);

	const handleCellClick = (id) => {
		setGameState((prevState) => {
			if (prevState.cells[id]) return prevState;
			return {
				...prevState,
				currentMove: getNextMove(prevState.currentMove),
				cells: prevState.cells.map((cell, i) => (id === i ? prevState.currentMove : cell)),
			};
		});
	};
	return {cells, currentMove, nextMove, handleCellClick};
};
