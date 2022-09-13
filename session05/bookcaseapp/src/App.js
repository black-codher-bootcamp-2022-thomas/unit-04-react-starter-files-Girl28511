// Gramdma 

import bookData from "./models/books.json";
import Book from "./components/Book";
// import BookList from "./components/BookList";
import Search from "./components/Search";

function App() {
  const books = bookData;
  console.log(books[0]);
  return (
    <>
      {books.map((currentBook) => (
        <>
        <Book
          title={currentBook.volumeInfo.title}
          author={currentBook.volumeInfo.authors}
          cost={currentBook.saleInfo.listPrice?.amount ?? "Price not available"}
          fullInfo={currentBook.volumeInfo.description}
        />
        {/* <Search />  */}
        </>
      ))}
    </>
  
  );
  // return < BookList fullbookdata={books}/>
}

export default App;