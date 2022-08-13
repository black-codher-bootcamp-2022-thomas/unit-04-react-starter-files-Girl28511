import { render, screen } from '@testing-library/react'; // render is an inbuilt function "build what I have created e.g 
//component or page" 
import App from './App'; // Linking to APP.js showcasing the component on the page 
import ReactDOM from 'react-dom';

 it('renders without crashing', () =>
 {
   const div =
 document.createElement('div');
  ReactDOM.render(<App />,div);
});

test('renders learn react link', () => {
  render(<App />); // this is an instruction to render the component within APP to the HTML
  // if no import has been done, an error message will say 'reference error'  
  const linkElement = screen.getByText(/28 July/i); // checking what I have made, my components in my APP is behaving 
  //how i expect it to be in the DOM  - saving expected DOM element in a variable 
  expect(linkElement).toBeInTheDocument(); //if the expectation is not met, this is the true / false element 
}); // tests can be written in blocks. 

// line 12 when we run the test it will say 'passed'
// Tests are necessary before deployment in the development stage to ensure that your component / quality of code is working as 
// it should. 
// so you can manually import react scripts 