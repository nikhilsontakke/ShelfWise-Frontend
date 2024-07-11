import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchBy, setSearchBy] = useState({
    title: true,
    author: false,
    genre: false,
    publisher: false,
  });

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSearchBy({
      ...searchBy,
      [name]: checked,
    });
  };

  const handleSearch = () => {
    // Prepare an array of selected search criteria
    const selectedCriteria = Object.keys(searchBy).filter((key) => searchBy[key]);

    // Construct the endpoint based on selected criteria
    const endpoint = `http://localhost:8080/search/${selectedCriteria.join(',')}/${encodeURIComponent(query)}`;

    // Call onSearch with the constructed endpoint
    onSearch(endpoint);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for books..."
      />
      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            name="title"
            checked={searchBy.title}
            onChange={handleCheckboxChange}
          />
          Title
        </label>
        <label>
          <input
            type="checkbox"
            name="author"
            checked={searchBy.author}
            onChange={handleCheckboxChange}
          />
          Author
        </label>
        <label>
          <input
            type="checkbox"
            name="genre"
            checked={searchBy.genre}
            onChange={handleCheckboxChange}
          />
          Genre
        </label>
        <label>
          <input
            type="checkbox"
            name="publisher"
            checked={searchBy.publisher}
            onChange={handleCheckboxChange}
          />
          Publisher
        </label>
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
