// Add the code here
'use strict';

function ClickButton() {

    const [clicked, setClick] = React.useState(false);
  
    if (clicked) {
      return 'Nothing here yet! Change this text to add more info.';
    }
  
    return React.createElement(
      'button', {className:"main-button"}, //{
    //   style: {
    //     backgroundColor: "#3392e4",
    //     color: "#fff",
    //     border: "0",
    //     padding: "10px 20px",
    //     fontWeight: "bold",
    //     borderRadius: "5px",
    //     fontSize: "1.1em"
    //   },
      onClick: () => setClick(true)
    //},
      'Click To Reveal'
    );
  }
  
  const domContainer = document.querySelector('#basepage');
  ReactDOM.render(React.createElement(ClickButton), domContainer);



  //tag name is first detail it takes
  //second is property or props - example, style, class name, ID, other things. they all have to be in the curly brackets
  //third is child element - content for example "this is my first react div"


  // React.createElement(tagName,props,children);

  React.createElement('div',{},"This is my first react div");
  ReactDOM.render(reactElement, container);
  


  const parent = document 

  //parent div 
  //first div = has another element which is child button 
  .ATT

  
  // old approach for writing react 

  const h1Element = react.createElement("H1", {style: {color:"red", backgroundColor: DDDD}}, "Hello this is a h1 element");
  const pElement = react.createElement("p", {style: {color:"red", backgroundColor: DDDD}}, "Hello this is a p element");

  //new approach 
  const h1NewElement= <h1 style={{color:"red", backgroundColor: DDDD}}>Hello this is h1 element</h1>;

  reactDom.render({h1Element, secondElement}, NAMEOFCREATEDoriginaltagINHTMLe.gdiv or in homework timeline);

  // start react project at all times - npm run start 

  // adding event listeners within react 

  fucntion handleClick() {
    alert("hey! someone clicked me ")
  }

    // old approach for writing react with an event listener - JSX - javascript extendable market language 

    const h1Element = react.createElement("H1", {style: {color:"red", backgroundColor: DDDD}}, onClick: handleClick,},"Hello this is a h1 element");

    //new approach  for writing react with an event listener
    const h1NewElement= (
    <h1 style={{color:"red", backgroundColor: DDDD}} onClick={handleClick}> 
    Hello this is h1 element 
    </h1>
    );


