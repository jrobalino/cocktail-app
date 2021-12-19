import React from 'react';
import PropTypes from 'prop-types';
import FeelingBoozy from './feelingBoozy/feelingBoozy.js';

const Search = ({
  searchTerm,
  handleSearchSubmit,
  handleSearchInput,
  handleBoozy
}) => {

  return(
    <div>
      <h2>Search for a cocktail by name.</h2>
      <form onSubmit={handleSearchSubmit}>
      <input value={searchTerm} onChange={handleSearchInput} />
      <button>Search</button>
      </form>
      <FeelingBoozy handleBoozy={handleBoozy} />
    </div>
    );

};

Search.propTypes = {
  searcTerm: PropTypes.string,
  handleSearchSubmit: PropTypes.func,
  handleSearchInput: PropTypes.func
};

export default Search;