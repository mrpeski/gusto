import React from "react"
import { PERSONAL_INFO_LABELS } from "../constants";


const SimpleField = ({ label, detail: {internalUse, show }}) => {
  // if(label === 'gender') console.log(show)
  const title = PERSONAL_INFO_LABELS[label]?.title || label;
  const subtitle = PERSONAL_INFO_LABELS[label]?.subtitle;

    return <li className='Field-wrapper'>
      <span className="Field">
        {title}
        {subtitle ? <span className="Field-subtitle"> ({subtitle})</span> : null}
        </span>
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