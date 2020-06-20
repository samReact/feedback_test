import React from "react";
import "./styles/styles.scss";
import Input from "./components/Input";
import TextArea from "./components/TextArea";
import StarGroup from "./parts/StarGroup";

function App() {
  return (
    <div className="">
      <form>
        <Input placeholder="name" />
        <Input placeholder="email" />
        <StarGroup />
        <TextArea placeholder="Please tell us your feedback" />
      </form>
    </div>
  );
}

export default App;
