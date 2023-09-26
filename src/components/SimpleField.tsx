import React from "react"

const SimpleField = ({ label, internalUse, show }) => {
    return <>
      <span>{label}</span>
      <input
        type='checkbox'
        key={"internalUse_" + internalUse}
        name="internalUse"
        defaultChecked={internalUse}
      />
      <input
        type='checkbox'
        key={"show_" + show}
        name="show"
        defaultChecked={show}
      />
    </>
  }

  export default SimpleField