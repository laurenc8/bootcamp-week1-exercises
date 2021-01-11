import React from 'react';
import { Search } from '../styles';

function SearchBar() {
  return (
    <div>
      <Search>
        <input type="text" name="item" />
        <input type="submit" value="Search" />
      </Search>
    </div>
  );
}

export default SearchBar;