import logo from './logo.svg';
import './css/App.css';
import Home from './components/Home';
import WhatIDo from './components/WhatIDo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <WhatIDo />
      </header>
    </div>
  );
}

export default App;
