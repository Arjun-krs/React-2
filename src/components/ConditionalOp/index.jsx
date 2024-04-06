import { useState } from "react";
import React from "react";
import Button from "../Button";

function Conditional() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Text" : "Show Text"}
      </button>

      {isVisible && <p>This text is rendered conditionally!</p>}
    </div>
  );
}

export default Conditional;
