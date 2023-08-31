import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Catalogue from './components/Catalogue/Catalogue'
import Questions from './components/Questions/Questions'

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Catalogue/>
      <Questions/>
    </div>
  );
}

export default App;
