import React, { useState } from "react";

const Choice = () => {
    const [choice, setChoice] = useState("")
    const handleChange = ({ target: { name, value } }) => {
        setChoice(value)
      };
    return <input
      className="Input"
      type="text"
      placeholder="Add Choice"
      value={choice}
      onChange={handleChange}
    />
}

export default Choice