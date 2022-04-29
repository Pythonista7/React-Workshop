import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div>
        {/* <header>
          <h1>Welcome to React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Incredible.dev</p>
          <small>2022</small>
        </header> */}
      </div>
    </div>
  );
}

export default App;

/*
  // const style: React.CSSProperties = {
  //   backgroundColor: "red",
  //   border: "2px solid orange",
  //   color: "black",
  //   fontSize: "18px",
  // };
  */
