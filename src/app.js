import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <div>Rendering app.js</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
