import './App.css';
import React from 'react';
import Autocomplete from './components/Autocomplete';
import {countries, music} from './data.js';

function App() {   
  return (
    <div className="App">
      <Autocomplete array={countries} />
      {/* <Autocomplete array={music} /> */}
    </div>
  );
}

export default App;
