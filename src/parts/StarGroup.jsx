import React, { useState } from "react";
import StarIcon from "../components/StarIcon";

const StarGroup = ({ size, rate }) => {
  const [activeTabs, setActiveTabs] = useState();

  const toggleActiveTab = (i) => {
    if (activeTabs === 0 && i === 0) {
      return setActiveTabs();
    }
    setActiveTabs(i);
  };
  return (
    <div>
      {[...Array(5)].map((elt, i) => (
        <StarIcon
          key={i}
          active={i <= activeTabs || i < rate}
          onClick={() => toggleActiveTab(i)}
          size={size}
        />
      ))}
    </div>
  );
};

export default StarGroup;
