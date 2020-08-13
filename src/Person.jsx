import React from "react";
import "./styles.css";

export default function App(props) {
  return (
    <div className="App">
      <input type="text" onChange={props.change} value={props.name} />
      <h1 onClick={props.click}>{props.name}</h1>
      <p> Your age : {props.age} </p>
      <p>{props.children}</p>
    </div>
  );
}

//export default App;
