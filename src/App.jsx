import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeFooter from './components/HomeFooter';
import Bodi from './components/Bodi';
import Item from './components/Item';

function App() {

	return (
		<>
			<Header />
			<Bodi />
			{/* <Item/> */}
			<Footer />
			<HomeFooter />

		</>
	)
};

export default App
