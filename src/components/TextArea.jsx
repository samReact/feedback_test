import React from "react";

const TextArea = ({ placeholder, name }) => {
  return (
    <textarea
      name={name}
      id=""
      cols="20"
      rows="8"
      placeholder={placeholder}
      className="custom-textarea"
    ></textarea>
  );
};

export default TextArea;
