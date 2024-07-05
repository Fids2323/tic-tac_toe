import React from "react";

const SYMBOL_X = "X";
const SYMBOL_O = "O";

const getSymbolClassName = (symbol) => {
	if (symbol === SYMBOL_O) return "text-green-500";
	if (symbol === SYMBOL_X) return "text-red-500";
	return "";
};

const renderSymbol = (symbol) => <span className={`text-xl leading-6  ${getSymbolClassName(symbol)}`}>{symbol}</span>;

const GameSymbol = ({symbol}) => {
	return renderSymbol(symbol);
};

export default GameSymbol;
