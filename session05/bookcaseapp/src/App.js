// Grandma

import bookData from "./models/books.json";
import { useState } from "react";
import Book from "./components/Book";
function App() {
  // const [mybookList] = useState(bookList);
  // const books = bookList;
  return (
    <>
      <Book title="Normal People" author="Sally Rooney" />
      <Book title="Girl Woman Other" author="Bernardine Evaristo"/>
    </>
  );
  // mybookList.map((bookItem) => <Book book={bookItem} />);
}

export default App;

// const BookCounter = (props) => {

//    return (
//   <div className="booklist">
//    <h1>Annabel's Books ({
//    <button onClick={() =>  /button>
//    <ul>......</ul>
//    </div>
//     );
//   }
