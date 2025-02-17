"use client";
import {UiButton} from "../ui-kit/UiButton";

// components
import {GameFieldLayout} from "./GameFieldLayout";
import {GameMoveInfo} from "./GameMoveInfo";
import {GameGrid} from "./GameGrid";
import {GameCell} from "./GameCell";
import {GameSymbol} from "./GameSymbol";

export const GameField = ({winnerSequence,winnerSymbol ,cells, currentMove, nextMove, handleCellClick}) => {
	return (
		<GameFieldLayout>
			<GameMoveInfo
				actions={
					<div className="flex items-center gap-3">
						<UiButton children="Ничья" variant="primary" size="md" />
						<UiButton children="Сдаться" variant="outline" size="md" />
					</div>
				}
				currentMove={currentMove}
				nextMove={nextMove}
			/>
			<GameGrid>
				{cells.map((symbol, index) => (
					<GameCell key={index} onClick={() => handleCellClick(index)} isWinner={winnerSequence?.includes(index)} disabled={!!winnerSymbol}>
						{symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
					</GameCell>
				))}
			</GameGrid>
		</GameFieldLayout>
	);
};
