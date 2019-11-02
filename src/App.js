import React from 'react';
import './App.css' 

function App() {
  return(
    <div className={"main"}>
      <div className={"title"}>
        <h1>Hello</h1>
        <span role="img">🤙🏻</span>
      </div>

      <ul className={"worlds"}>
        <li><span role="img">🌎</span></li>
        <li><span role="img">🌎</span></li>
        <li><span role="img">🌎</span></li>
        <li><span role="img">🌎</span></li>
        <li><span role="img">🌎</span></li>      
      </ul>
    </div>
  );
}

export default App;
