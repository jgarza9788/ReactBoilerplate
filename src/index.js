import React from "react";
import ReactDOM from "react-dom";

// import "./styles.css";

function App() {
  return (
    // <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    //   <p>something</p>
    // </div>

    <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">little Demo</span>
          <p>basic demo to show how react and materialize css can be used at the same time</p>
        </div>
        <div className="card-action">
          <a href='https://materializecss.com/'>Materializecss.com</a>
          <a href='https://reactjs.org/'>ReactJS</a>
        </div>
      </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
