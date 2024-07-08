import { Header } from './components/header'
import {GameTitle} from './components/game'

const Home = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
			<Header />
			<main className='max-w-[616px] mx-auto'>
				<GameTitle/>
			</main>
    </div>
  );
};

export default Home;
