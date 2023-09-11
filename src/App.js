import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Catalogue from './components/Catalogue/Catalogue'
import Questions from './components/Questions/Questions'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';
import SuitableFootwear from './components/SuitableFootwear/SuitableFootwear';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Catalogue/>
      <SuitableFootwear/>
      <Questions/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
