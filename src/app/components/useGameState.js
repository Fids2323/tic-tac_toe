"use client";

import {useState} from "react";
import {SYMBOL_O, SYMBOL_X} from "../assets/constants";

const computeWinner = (cells) => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
			return [a, b, c];
		}
	}
};

const useGameState = () => {
	const [cells, setCells] = useState([null, null, null, null, null, null, null, null, null]);
	const [currentStep, setCurrentStep] = useState(SYMBOL_X);
	const [winnerSequence, setWinnerSequence] = useState([]);

	const handleCellClick = (index) => {
		if (winnerSymbol) return;
		if (cells[index]) return;

		const cellsCopy = cells.slice();
		cellsCopy[index] = currentStep;
		const winnerSequence = computeWinner(cellsCopy);

		setCells(cellsCopy);
		setCurrentStep(currentStep === SYMBOL_X ? SYMBOL_O : SYMBOL_X);
		setWinnerSequence(winnerSequence);
	};

	const handleReset = () => {
		setCells(Array.from({length: 9}, () => null));
		setCurrentStep(SYMBOL_X);
		setWinnerSequence([]);
	};

	const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;
	const isDraw = !winnerSequence && cells.filter((value) => value).length === 9;

	return {
		cells,
		currentStep,
		winnerSequence,
		handleCellClick,
		handleReset,
		winnerSymbol,
		isDraw,
	};
};

export default useGameState;
