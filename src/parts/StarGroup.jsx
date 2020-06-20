import React, { useState } from "react";
import StarIcon from "../components/StarIcon";

const StarGroup = () => {
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
          active={i <= activeTabs}
          onClick={() => toggleActiveTab(i)}
        />
      ))}
    </div>
  );
};

export default StarGroup;
