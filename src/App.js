import React, { useState } from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);

  const handleSearch = async (endpoint) => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log('Fetched data:', data); // Log the response data
      setBooks(data || []);
      console.log('Books state:', data || []);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div className="app">
      <h1>Shelfwise</h1>
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
};

export default App;
