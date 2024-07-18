"use client"
import { Header } from './components/header'
import { GameTitle, GameInfo, GameField } from './components/game'
import { useState } from 'react';
import { useGameState } from './hooks/useGameState';


const Home = () => {
	const [playersCount] = useState(2)
	const {cells, currentMove, nextMove,winnerSequence, handleCellClick} = useGameState(playersCount)

  return (
    <div className="bg-slate-50 min-h-screen">
			<Header />
			<main className='w-max mx-auto'>
				<GameTitle className="mb-4" playersCount={playersCount } />
				<GameInfo className="mb-6" playersCount={playersCount} currentMove={ currentMove} />
				<GameField
					cells={cells} winnerSequence={winnerSequence} currentMove={currentMove} nextMove={nextMove} handleCellClick={ handleCellClick}/>
			</main>
    </div>
  );
};

export default Home;
