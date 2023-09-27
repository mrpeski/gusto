import React from "react"

const SimpleField = ({ label, detail: {internalUse, show }}) => {
  // if(label === 'gender') console.log(show)
    return <li className='Field-wrapper'>
      <span className="Field">{label}</span>
      <label htmlFor="internalUse">
        <input
          data-target={label}
          type='checkbox'
          name="internalUse"
          defaultChecked={internalUse}
        />
        Internal
      </label>

      <label htmlFor="" key={"show_" + show}>
        <input
          data-target={label}
          type='checkbox'
          name="show"
          defaultChecked={show}
        />
        {show ? 'Show' : 'Hide'}
      </label>
    </li>
  }

  export default SimpleField