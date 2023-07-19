import './App.css';
import AboutMe from './modules/About Me';
import CarouselComponent from './modules/Carousel';
import Galeria from './modules/Galeria';
import Header from './modules/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <CarouselComponent/>
      <Galeria/>
    </div>
  );
}

export default App;
