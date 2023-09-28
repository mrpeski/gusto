import React, { FC } from "react";

function withToggle<T>(Component): FC<T & { show?: boolean }> {
  return ({ show: isShowing, ...rest }) => {
    const [show, setShow] = React.useState(isShowing);
    const toggle = () => setShow(!show);
    return (
      <>
        <button onClick={toggle} className="Button add">
          <img src="/icons/add_icon.svg" alt="" />
          Add a question
        </button>
        {show ? <Component {...rest} /> : null}
      </>
    );
  };
}

export default withToggle;
