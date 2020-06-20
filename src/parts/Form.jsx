import React from "react";
import Input from "../components/Input";
import StarGroup from "./StarGroup";
import TextArea from "../components/TextArea";

const Form = () => {
  return (
    <form className="form">
      <Input placeholder="name" />
      <Input placeholder="email" />
      <StarGroup />
      <TextArea placeholder="Please tell us your feedback" />
    </form>
  );
};

export default Form;
