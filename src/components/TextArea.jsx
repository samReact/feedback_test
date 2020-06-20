import React from "react";

const TextArea = ({ placeholder, name }) => {
  return (
    <textarea
      name={name}
      id=""
      cols="30"
      rows="10"
      placeholder={placeholder}
      className="custom-textarea"
    ></textarea>
  );
};

export default TextArea;
