import { Header } from './components/header'
import { GameTitle,GameInfo, GameField} from './components/game'

const Home = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
			<Header />
			<main className='w-max mx-auto'>
				<GameTitle className="mb-4"/>
				<GameInfo className="mb-6"/>
				<GameField/>
			</main>
    </div>
  );
};

export default Home;
