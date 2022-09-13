import React from "react";
import { useState } from "react";

const Search = (props) => {
  const [keyword,setKeyword] = useState('');
  return (
    <div>
      <form>
      <input type="text" value={keyword} onChange={(e) =>setKeyword(e.target.value)}/>
      </form>
    </div>
  );
};

export default Search;