
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Bsection from './components/BlogSection/Bsection';
import Collection from './components/Collection/Collection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Newsletter from './components/Newsletter/Newsletter';
import Popular from './components/Popular/Popular';
import Pro from './components/Products/Pro';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <>
  <Header/>
  <Slider/>
  <Collection/>
  <Pro/>
  <Blog/>
  <Bsection/>
  <About/>
  <Popular/>
  <Newsletter/>
  <Footer/>
    </>
  );
}

export default App;
