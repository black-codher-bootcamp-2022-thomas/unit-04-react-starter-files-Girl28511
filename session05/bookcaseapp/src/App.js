// Grandma

import bookData from "./models/books.json";
import { useState } from "react";
import Book from "./components/Book";
function App() {
  // const [mybookList] = useState(bookList);
  const books = bookData;
  console.log(books[0]);
  return (
    <>
      {books.map((currentBook) => (
        <Book
          title={currentBook.volumeInfo.title}
          author={currentBook.volumeInfo.authors}
          cost={currentBook.saleInfo.listPrice?.amount ?? "Price not available"}
          fullInfo={currentBook.volumeInfo.description}
        />
      ))}
    </>
  );
}

export default App;
