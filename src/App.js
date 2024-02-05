import logo from './logo.svg';
import './css/App.css';
import Home from './components/Home';
import WhatIDo from './components/WhatIDo';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
      <main>
        <WhatIDo />
        <Projects />
      </main>
    </div>
  );
}

export default App;
