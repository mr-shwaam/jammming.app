import pressplay from './pressplay.svg';
import './App.css';
import './SearchBar.js';
import SearchBar from './SearchBar.js';
import AppTitle from './AppTitle.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pressplay} className="App-logo" alt="logo" />
        <div>
          <AppTitle />
        </div>
       <img src={pressplay} className="App-logo" alt="logo" />
        
      </header>

      <div>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
