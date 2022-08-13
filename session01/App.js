//APP FILE 
// react component - adding different 

// react component 

function Dapp() {
    return <h1>Andrews app</h1>;
}

export default App;

function Dapp(props) {
    console.log(props) //all the properties that are getting passed to this component 
    console.log(props);
    console.log(props.age);
    console.log(props.name)
    // return <h1>Andrews app</h1>;
    //re-writing above
    return <h1>{props.name}'s React Page</h1> // concatenate with the rest of the string
}

return <p>{props.age} is how old i am</p> // concatenate with the rest of the string

// JSX elements need to be wrapped in one parent element so we need to put the h1 and p as they are siblings e.g in a div. In react you can only return one parent 

// react element 
function Dapp(props) {
    console.log(props) //all the properties that are getting passed to this component 
    console.log(props);
    console.log(props.age);
    console.log(props.name)
    
    // actually add it to the page
    return {
        <div>
        <h1>{props.name}'s react page </h1>
        <p>My age is {props.age}</p>
        </div>

        // you can also wrap in empty tags <></> wrap your elements in a shadow parent 
    };
}

export default Dapp;


// FUNCTIONAL COMPONENT - Adding if statements // at last components? Easier way to create a react components (16 - 18). In contrast, this is much simpler when dealing with the state

function Dapp(props) {
    console.log(props);


    if (props.name === "Andrew") {
        return (
            <>
                <h1>{props.name}'s react page </h1>
                <p>My age is {props.age}</p>
            </>
        );
    } else {
        return <h1>the name props doesn't include Andrew</h1>;
    }
}

export default App; 

// how to write CLASS COMPONENT - this is the older version for creating a react components. In class you have to implement multiple methods render, states 

class Dapp extends React.Component {
    render() {
        if (props.name === "Andrew") {
            return (
                <>
                    <h1>{props.name}'s react page </h1>
                    <p>My age is {props.age}</p>
                </>
            );
        } else {
            return <h1>the name props doesn't include Andrew</h1>;
        }
    }
}

export default App; 

// CONCEPT OF SEPERATIONS OF CONCERNS - SEPERATE AND RE-USE 

// import profile 

function Dapp(props) {
    console.log(props);


    if (props.name === "Andrew") {
        return (
            <>
                <h1>{props.name}'s react page </h1>
                <Profile/>
            </>
        );
    } else {
        return <h1>the name props doesn't include Andrew</h1>;
    }
}

export default App; 


// Profile is the layout 
// Props is the values 
// Passing data from one component to another 

<Profile name={props.name}/> 
