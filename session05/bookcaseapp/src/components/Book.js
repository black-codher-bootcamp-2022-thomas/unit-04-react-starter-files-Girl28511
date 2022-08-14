import React from "react";

const Book = (props) => {
  return (
    <div style={{ border: "4px solid pink" }}>
      <h1>{`Title: ${props.title}`}</h1>
      <p>{`Author: ${props.author}`}</p>
      <p>{`Cost: ${props.costs}`}</p>
      <p>{`Full description: ${props.fullInfo}`}</p>
    </div>
  );
};

export default Book;
