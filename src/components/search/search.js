import React from 'react';
import PropTypes from 'prop-types';

const Search = ({
  searchTerm,
  handleSearchSubmit,
  handleSearchInput
}) => {

  return(
    <div>
      <h2>Search for a cocktail by name.</h2>
      <form onSubmit={handleSearchSubmit}>
      <input value={searchTerm} onChange={handleSearchInput} />
      <button>Search</button>
      </form>
    </div>
    );

};

Search.propTypes = {
  searcTerm: PropTypes.string,
  handleSearchSubmit: PropTypes.func,
  handleSearchInput: PropTypes.func
};

export default Search;