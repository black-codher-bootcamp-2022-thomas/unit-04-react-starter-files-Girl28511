// Grandma

import bookData from "./models/books.json";
import { useState } from "react";
import BookList from "./components/BookList";


function App() {
  // const [mybookList] = useState(bookList);
  const books = bookData;
  console.log(books[0]);
  return < BookList fullbookdata={books}/>
}

export default App;
