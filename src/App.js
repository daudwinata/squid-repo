import './App.css';
import MainBackground from './components/main-background/main-background.component';
import About from './components/about/about.component';
import Games from './components/games/games.component';
import Event from './components/event/event.component';
import MainBottom from './components/main-bottom/main-bottom.component';
// import Rules from './components/rules/rules.component';

function App() {
  return (
    <div className="App">
      <MainBackground />
      <About />
      <Games />
      <Event />
      <MainBottom />
    </div>
  );
}

export default App;
