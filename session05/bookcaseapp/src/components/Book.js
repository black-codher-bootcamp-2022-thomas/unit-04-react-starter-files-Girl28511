import React from "react";

const Book = ({title,author,costs,fullInfo}) => {
  return (
    <div style={{ border: "4px solid pink" }}>
      <h1>{`Title: ${title}`}</h1>
      <p>{`Author: ${author}`}</p>
      <p>{`Cost: ${costs}`}</p>
      <p>{`Full description: ${fullInfo}`}</p>
    </div>
  );
};

export default Book;
