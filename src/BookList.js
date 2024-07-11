import React from 'react';
import './BookList.css';

const BookList = ({ books }) => {
  if (books.length === 0) {
    return <div className="book-list">No books available</div>;
  }

  return (
    <div className="book-list">
      <table>
        <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th>Publisher</th>
          <th>No of Pages</th>
          <th>Language</th>
          <th>Format</th>
          <th>Genre</th>
          <th>Edition</th>
          <th>Publishing Year</th>
          <th>Shelf-ID</th>
          <th>Shelf-Row</th>
        </tr>
        </thead>
        <tbody>
          {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.publisher}</td>
                <td>{book.noOfPages}</td>
                <td>{book.language}</td>
                <td>{book.format}</td>
                <td>{book.genre}</td>
                <td>{book.edition}</td>
                <td>{book.publishingYear}</td>
                <td>{book.shelf}</td>
                <td>{book.shelfrow}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
