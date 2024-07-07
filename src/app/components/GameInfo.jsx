import React from "react";
import GameSymbol from "./gameSymbol";

const GameInfo = ({ isDraw, winnerSymbol, currentStep }) => {
  if (isDraw) {
    return <div className="mb-[10px]">Ничья</div>;
  }

  if (winnerSymbol) {
    return (
      <div className="mb-[10px]">
        Победитель: <GameSymbol symbol={currentStep} />
      </div>
    );
  }

  return (
    <div className="mb-[10px]">
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
};

export default GameInfo;
