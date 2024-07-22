"use client"
import { Header } from './components/header'
import { GameTitle, GameInfo, GameField,GameSymbol } from './components/game'
import { useState } from 'react';
import { useGameState } from './hooks/useGameState';


const Home = () => {
	const [playersCount] = useState(2)
	const {cells, currentMove, nextMove,winnerSequence,winnerSymbol, handleCellClick, handlePlayerTimeOver} = useGameState(playersCount)

  return (
    <div className="bg-slate-50 min-h-screen">
			<Header />
			<main className='w-max mx-auto'>
				<GameTitle className="mb-4" playersCount={playersCount } />
				<GameInfo className="mb-6" winnerSymbol={winnerSymbol} playersCount={playersCount} 
				currentMove={ currentMove} isWinner={!!winnerSymbol} 
				onPlayerTimeOver={handlePlayerTimeOver}/>
				{winnerSymbol && (
				<div className='my-4'>
					<GameSymbol symbol={winnerSymbol} className=''/>
				</div>
				)}

				<GameField
					cells={cells} winnerSymbol={winnerSymbol} winnerSequence={winnerSequence} currentMove={currentMove} nextMove={nextMove} handleCellClick={ handleCellClick}/>
			</main>
    </div>
  );
};

export default Home;
