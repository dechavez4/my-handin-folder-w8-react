import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'
import App5 from './App5'
import App6 from './App6'
import ListDemoApp from './ListDemoApp'
import FormDemo from './onsdag/FormDemo'
import FormDemoMultiple from './onsdag/FormDemoMultiple'
let app = <App />

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
            <a href="/" className="x" id="app1">import and export</a> &nbsp;
         <a href="/" className="x" id="app2">Object and Array Destructuring</a> &nbsp;
         <a href="/" className="x" id="app3">Array</a> &nbsp;
         <a href="/" className="x" id="app4">IncreAndDecreButton</a> &nbsp;
         <a href="/" className="x" id="app5">dateDisplay</a> &nbsp;
         <a href="/" className="x" id="app6">ChuckAndDadJokes</a> &nbsp;
         <a href="/" className="x" id="app7">ListDemoApp</a> &nbsp;
         <a href="/" className="x" id="app8">FormDemo</a> &nbsp;
         <a href="/" className="x" id="app9">FormDemoMultiple</a> &nbsp;
   
         {/* Add as many as you have exercises, but remember className="x" */}
            {app}
        </div>
    )
}

function handleSelect(event) {
    event.preventDefault();
    if (event.target.className !== "x") {
        return
    }
    const id = event.target.id;
    switch (id) {
        case "app1": app = <App />; break;
        case "app2": app = <App2 />; break;
        case "app3": app = <App3 />; break;
        case "app4": app = <App4 />; break;
        case "app5": app = <App5 />; break;
        case "app6": app = <App6 />; break;
        case "app7": app = <ListDemoApp />; break;
        case "app8": app = <FormDemo />; break;
        case "app9": app = <FormDemoMultiple />; break;
        
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));