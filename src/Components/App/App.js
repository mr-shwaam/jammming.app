import pressplay from '../../Images/pressplay.svg'
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import AppTitle from '../AppTitle/AppTitle.js';
import SearchResults from '../SearchResults/SearchResults.js';  
import Playlist from '../Playlist/Playlist.js';
import Track from '../Track/Track.js';
import Tracklist from '../Tracklist/Tracklist.js';

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

      <main className='App-main'>
        <h2>Welcome to Ja<span className="highlight">mmm</span>ing!</h2>
        <p>Jammming is a web application that allows users to search for songs, create playlists, and save them to their Spotify account. Start by searching for a song or artist above.</p> 

        <div>
          <SearchBar />
        </div> 
      </main>
      
    </div>
  );
}

export default App;
