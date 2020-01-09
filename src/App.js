import React from "react";
import "./App.css";
import Card from "./Card.jsx";

let arr = ["J", "K", "3", "9", "10", "Q"];

///a functional component in react
function App() {
  return (
    <div className="App">
      <div className="cardContainer">
        {arr.map(val => {
          return <Card value={val} />;
        })}
      </div>
    </div>
  );
}

export default App;
