import React from "react";
import "./styles/styles.scss";
import Form from "./parts/Form";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="App-form">
          <Form />
        </div>
      </div>
      <div>chart</div>
      <div>Comments</div>
    </div>
  );
}

export default App;
