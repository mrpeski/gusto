import React from "react"
import { FormContext } from "../contexts"

const useFormContext =  () => {
    return React.useContext(FormContext)
}

export default useFormContext