import React, {useState} from 'react';
import './App.css';
import Search from './components/search/search.js';
import Table from './components/table/table.js';

const searchAPI = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const randomAPI = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(null);

  const makeRequest = (isRandom) => {
   
   if (isRandom) {
    fetch(randomAPI)
      .then(response => response.json())
      .then(data => setData(data["drinks"]));
   } else {
    fetch(searchAPI + searchTerm)
      .then(response => response.json())
      .then(data => setData(data["drinks"]));
   } 
    
  };

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    makeRequest();
  };

  const handleBoozy = () => {
    makeRequest(true);
  };
  

  return (
    <div className="App">
      <Search handleSearchSubmit={handleSearchSubmit} searchTerm={searchTerm} handleSearchInput={handleSearchInput} handleBoozy={handleBoozy} />
      {data != null && <Table data={data} />}
    </div>
  );
}

export default App;
