import {useState} from "react";
import {GAME_SYMBOL} from "../components/game/constants";
import {computeWinner, getNextMove} from '../components/game/model.js'

export const useGameState = (playersCount) => {
	const [{cells, currentMove, playersTimeOver}, setGameState] = useState(() => ({
		cells: new Array(19 * 19).fill(null),
		currentMove: GAME_SYMBOL.CROSS,
		playersTimeOver:[],
	}));

	const winnerSequence =computeWinner(cells);
	const nextMove = getNextMove(currentMove, playersCount,playersTimeOver);
	const winnerSymbol = nextMove === currentMove ? currentMove : winnerSequence?.[0]

	const handleCellClick = (id) => {
		setGameState((prevState) => {
			if (prevState.cells[id]) return prevState;
			return {
				...prevState,
				currentMove: getNextMove(prevState.currentMove, playersCount,playersTimeOver),
				cells: prevState.cells.map((cell, i) => (id === i ? prevState.currentMove : cell)),
			};
		});
	};


	const handlePlayerTimeOver = (symbol) => {
		setGameState((prevState) => {

			return {
				...prevState,
				playersTimeOver:[...prevState.playersTimeOver, symbol],
				currentMove:getNextMove(prevState.currentMove, playersCount,playersTimeOver),
			};
		});	  
	}
	


	return {winnerSequence,winnerSymbol , cells, currentMove, nextMove, handleCellClick,handlePlayerTimeOver};
};
