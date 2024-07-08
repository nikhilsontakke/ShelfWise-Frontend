import React, { useState } from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query) => {
    if (query) {
      try {
        const response = await fetch(`http://localhost:8080/search/title/${encodeURIComponent(query)}`);
        const data = await response.json();
        console.log('Fetched data:', data); // Log the response data
        setBooks(data || []);
        console.log('Books state:', data || []);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    }
  };

  return (
    <div className="app">
      <h1>Book Search Engine</h1>
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
};

export default App;
