import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Catalogue from './components/Catalogue/Catalogue'
import Questions from './components/Questions/Questions'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Catalogue/>
      <Questions/>
      <Contact/>
    </div>
  );
}

export default App;
