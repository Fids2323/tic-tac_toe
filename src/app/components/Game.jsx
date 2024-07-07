"use client";
import GameInfo from "./GameInfo";
import GameCell from "./GameCell";
import useGameState from "./useGameState";

export default function Game() {
  const {
    cells,
    currentStep,
    winnerSequence,
    handleCellClick,
    handleReset,
    winnerSymbol,
    isDraw,
  } = useGameState();
  return (
    <div className="flex flex-col items-center w-40 mx-auto my-24 border border-black p-5">
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />

      <div className="grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]">
        {cells.map((symbol, index) => {
          const isWinner = winnerSequence?.includes(index);
          return (
            <GameCell
              isWinner={isWinner}
              onClick={() => handleCellClick(index)}
              symbol={symbol}
              key={index}
            />
          );
        })}
      </div>
      <button
        className="cursor-pointer mt-2.5 bg-transparent border border-gray-400 py-1 px-3 rounded"
        onClick={handleReset}
      >
        Сбросить
      </button>
    </div>
  );
}
