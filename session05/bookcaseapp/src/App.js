// Grandma

import bookData from "./models/books.json";
import { useState } from "react";
import Search from "./components/Search";
import BookList from "./components/BookList";

function App() {
  const [allBookData, setAllBookData] = useState(bookData);
  const [keyword, setKeyword] = useState("");

  function findbooks() {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&filter=paid-ebook
    s&print-type=books&projection=lite`

    fetch(url, {method: 'get'});
    
  }
  // const [name,setName]=useState("Annabel")
  // return <input value={name} onChange={event=>setName(event.target.value)}/>
  return (
    <>
    <h2>Welcome to Annabel's Bookcase App</h2>
      <Search findbooks={findbooks}/>
      <BookList fullbookdata={bookData} />
     
    </>
  );
}

export default App;
