import React from "react";
import StarIcon from "../components/StarIcon";

const StarGroup = ({ size, rate, toggleActiveTab, rating }) => {
  return (
    <div>
      {[...Array(5)].map((elt, i) => (
        <StarIcon
          key={i}
          active={i + 1 <= rating || i < rate}
          onClick={() => toggleActiveTab(i)}
          size={size}
        />
      ))}
    </div>
  );
};

export default StarGroup;
