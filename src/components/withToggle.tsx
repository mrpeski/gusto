import React, { FC } from "react"

function withToggle<T>(Component): FC<T & {show?: boolean}> {
    return ({show: isShowing, ...rest}) => {
      const [show, setShow] = React.useState(isShowing)
      const toggle = () => setShow(!show)
      return <> 
      <button onClick={toggle}>Toggle</button>
      {show ? <Component {...rest} /> : null}
      </>
    }
  }

  export default withToggle