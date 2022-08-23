import React from "react";
import { useState } from "react";

const Search = (props) => {
  return (
    <div>
      <form>
        <input
          type="text"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        /> 
         {/* <p style={{color:"red"}}><em>{keyword && 'Keywords Typed: ' + keyword}</em></p>  */}

        {/* <input type="text" value={keyword} onChange ={(event)=>console.log(event.target.value)}/> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Search;

// [new text]

//    event = {
//        ...
//        target: {
//            value: 'l' //the text data that is a input field
//        }
//    }
