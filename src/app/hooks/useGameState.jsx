import {useState} from "react";
import {GAME_SYMBOL} from "../components/game/constants";
import {computeWinner, getNextMove} from '../components/game/model.js'

export const useGameState = (playersCount) => {
	const [{cells, currentMove}, setGameState] = useState(() => ({
		cells: new Array(19 * 19).fill(null),
		currentMove: GAME_SYMBOL.CROSS,
	}));

	const winnerSequence =computeWinner(cells);
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
	return {winnerSequence , cells, currentMove, nextMove, handleCellClick};
};
