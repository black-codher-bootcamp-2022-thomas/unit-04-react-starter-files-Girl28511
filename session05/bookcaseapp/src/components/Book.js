import React from 'react';

function Book(props) {
  return <div style={{border:"4px solid pink"}}>
  <p>{`Title: ${props.title}`}</p>
  <p>{`Author: ${props.author}`}</p>
  <p>{`Cost: ${props.cost}`}</p>
  <p>{`Full description: ${props.fullInfo}`}</p>
  </div>
}

export default Book;

