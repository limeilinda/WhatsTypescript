import { React , userState } from 'react';
import Axios from 'axios';
import './App.css';

// Set up the initial states using react hook 'useState'
function App() {

  const [data, setData] = userState ('');
  const [searchWord, setSearchWord] = useState('');

}

// Set up function to get information on click and set the data accordingly
function getMeaning() {
  Axios.get(
    'https://dictionaryapi.dev/'

  ).then((response) => {
    setData(response.data[0]);
  });
}

// Function to play and listen to the phonetics of each searched word
function playAudio() {
  let audio = new Audio(data.phonetics[0].audio);
  audio.play();
}
// Taking user input
return (
  <div className="App">
    <h1>Dictionary</h1>
    <div className="searchBox">

      <input
      type = "text"
      placeholder = "Search..."
      onChange={(e) => {
        setSearchWord(e.target.value);
      }}
      />
      <button
        onClick={() => {
          getMeaning();
        }}
        >
          <FaSearch size="20px" />
        </button>
    </div>
    {}
  </div>
)


export default App;
