import './App.css';
import React from 'react';
import Autocomplete from './components/Autocomplete';
import {countries, music} from './data.js';

function App() {  
  const countries = [
    {
      id: 1,
      name: "Poland"
    },
    {
        id: 2,
        name: "England"
    },
    {
        id: 3,
        name: "Croatia"
    },
    {
        id: 4,
        name: "Germany"
  }]

  const [array, setArray] = React.useState(countries);

  const addItem = name => {
    const id = array.length + 1;
    setArray([...array, {id, name}]);
  } 
  return (
    <div className="App">
      <Autocomplete array={array} addItem={addItem} />
      {/* <Autocomplete array={music} /> */}
    </div>
  );
}

export default App;
