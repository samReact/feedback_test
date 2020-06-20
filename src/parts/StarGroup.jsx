import React from "react";
import StarIcon from "../components/StarIcon";

let n = 5;

const StarGroup = () => {
  return (
    <div>
      {[...Array(5)].map(() => (
        <StarIcon />
      ))}
    </div>
  );
};

export default StarGroup;
