
import './App.css';
import PrivacyPolicy from './components/PrivacyPolicy';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Game from './components/Game';
import Congratulations from './components/Congratulations';
import Gameover from './components/Gameover';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="app">
    <Navbar/>
    <Home/>
    <Game/>
    <Congratulations/>
    <Gameover/>
    <Dashboard/>
    <PrivacyPolicy/>
    <Footer/>
    
    </div>
  );
}

export default App;
