import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './Profile'

// const name = 'Annabel';


// if the name is empty 



// role can be submit/ different signals  https://www.w3schools.com/accessibility/accessibility_role_name_value.php 

// const element = <main id="content"
//   role="main" class="base"> 
//   <h1>{name}'s React Page</h1>
//     <p>[Your short bio goes here]</p>
//   </main>

// console.log(element);

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Profile name="Sarah"/>);




