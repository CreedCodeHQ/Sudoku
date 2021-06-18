/**
 * Props
 *
 *  - take value as prop (optional)
 *  - Default can be empty
 */

import React, { useState, useEffect } from "react";

/** @refactor */
const NumberInput = ({
  value,
  isEditable = true,
  updateValue,
  i,
  j,
  setFocusedCell,
  focusedCell,
}) => {
  const [text, setText] = useState(value || "");
  useEffect(() => {
    if (!value) {
      setText("");
    }
  }, [value]);
  return (
    <input
      onFocus={() => setFocusedCell([i, j])}
      style={{
        caretColor: "transparent",
      }}
      type="text"
      className={`p-4 border h-14 w-14 text-2xl text-center border border-gray-200 focus:outline-none focus:bg-pink-200
      ${!isEditable ? "text-black bg-white" : "text-pink-500"}
      ${j === 2 || j === 5 ? "border-r-4" : null}

      ${i === 2 || i === 5 ? "border-b-4" : null}
      ${i == 0 && j === 0 && "rounded-tl-xl"}
      ${i == 0 && j === 8 && "rounded-tr-xl"}
      ${i == 8 && j === 0 && "rounded-bl-xl"}
      ${i == 8 && j === 8 && "rounded-br-xl"}
      ${(focusedCell[0] === i || focusedCell[1] === j) && "bg-pink-100"}
      `}
      value={text}
      disabled={!isEditable}
      onChange={(event) => {
        const { value } = event.target;
        if (value === "") {
          updateValue(null);
          return setText("");
        } else if (Number(value) && value[value.length - 1] !== "0") {
          updateValue(value[value.length - 1]);
          return setText(value[value.length - 1]);
        }
      }}
    />
  );
};

export default NumberInput;
