import React from "react";

const NumberButton = ({ value }) => {
  return (
    <button 
      className={Number(value) === 0 ? 'bigButton' : null}
      >
      {value}
    </button>
  );
};

export default NumberButton
