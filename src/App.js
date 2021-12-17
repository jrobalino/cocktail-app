import React, {useState} from 'react';
import './App.css';
import Search from './components/search/search.js';
import Table from './components/table/table.js';

const searchAPI = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  const makeRequest = () => {
    fetch(searchAPI + searchTerm)
    .then(response => response.json())
    .then(data => setData(data["drinks"]));
  };

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    makeRequest();
  };

  

  return (
    <div className="App">
      <Search handleSearchSubmit={handleSearchSubmit} searchTerm={searchTerm} handleSearchInput={handleSearchInput} />
      <Table data={data} />
    </div>
  );
}

export default App;
