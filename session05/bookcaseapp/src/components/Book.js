import React from 'react';

function Book(props) {
  return <div style={{border:"4px solid pink"}}>
  <p>{`Hello, I am a book! ${props.title} :)`}</p>
  <p>{`Hello, I the author ${props.author} :)`}</p>
  </div>
}

export default Book;

