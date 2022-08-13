import React from 'react';

function Book(props) {
  return <>
  <p>{`Hello, I am a book! ${props.title} :)`}</p>
  <p>{`Hello, I the author ${props.author} :)`}</p>
  </>
}

export default Book;

