import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Catalogue from './components/Catalogue/Catalogue'
import MuiCard from './components/MuiCard/MuiCard';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Catalogue/>
      <MuiCard/>
    </div>
  );
}

export default App;
