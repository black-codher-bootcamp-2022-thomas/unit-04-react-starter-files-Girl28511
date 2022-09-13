import React from 'react';

const BookCounter = (props) => {

  return (
    <main>
      <h2>{props.library.name}'s Books</h2>
      <button onClick={() => props.refreshbooks
      }
      {props.library.books.map((book) => (<div>{book.title}</div>))}
    </main>
  );
}

export default BookCounter;
