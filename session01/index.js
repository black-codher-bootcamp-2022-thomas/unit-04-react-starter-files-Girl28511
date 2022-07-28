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

  
  