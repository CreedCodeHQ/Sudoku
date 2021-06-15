/**
 * Props
 *
 *  - take value as prop (optional)
 *  - Default can be empty
 */

import React, { useState , useEffect} from "react";

/** @refactor */
const NumberInput = ({ value, isEditable = true, updateValue }) => {
  const [text, setText] = useState(value || "");
  useEffect(() => {
    if (!value) {
      setText("");
    }
  }, [value]);
  return (
    <input
      style={{
        height: "10px",
        width: "10px",
        margin: "0 2px",
      }}
      type="text"
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
