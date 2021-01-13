import React from 'react';
import { Search, SearchBox } from '../styles';

function SearchBar(props) {
  function handleChange(event) {
    event.preventDefault();
    props.searchTodos(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <Search onChange={handleChange} onSubmit={handleSubmit}>
        <SearchBox type="text" placeholder="search"/>
      </Search>
    </div>
  );
}

export default SearchBar;