"use client"
import { Header } from './components/header'
import { GameTitle, GameInfo, GameField } from './components/game'
import { useState } from 'react';


const Home = () => {

	const [playersCount] = useState(2)

  return (
    <div className="bg-slate-50 min-h-screen">
			<Header />
			<main className='w-max mx-auto'>
				<GameTitle className="mb-4" playersCount={playersCount } />
				<GameInfo className="mb-6" playersCount={playersCount }/>
				<GameField playersCount={playersCount }/>
			</main>
    </div>
  );
};

export default Home;
