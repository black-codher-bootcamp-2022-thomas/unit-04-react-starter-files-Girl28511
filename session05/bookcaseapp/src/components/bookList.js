import React from "react";
import Book from "./Book";

const BookList =(props) => {
  return (
    <>
      {props.fullbookdata.map((currentBook) => (
        <Book
          key={currentBook.id}
          picture={currentBook.volumeInfo.imageLinks.thumbnail}
          title={currentBook.volumeInfo.title}
          author={currentBook.volumeInfo.authors}
          costs={currentBook.saleInfo.listPrice?.amount ?? "Price not available"}
          fullInfo={currentBook.volumeInfo.description}
        />
      ))}
    </>
  );
}

export default BookList;