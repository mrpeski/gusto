import React, { ChangeEvent } from 'react'
import {
    initialState,
    personalInfoReducer,
    toggleInternalUse,
    toggleShow
  } from '../reducers/personalInfo'

  const usePersonalInfo =  () : {personalInfo: any, delegateChangeHandler: any, handleQuestion: any} => {
    const [personalInfo, dispatch] = React.useReducer(personalInfoReducer, initialState)
    const delegateChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const field = target.getAttribute("data-target")
        const name = target.name
        if (field) {
          if (name === "internalUse") {
            dispatch(toggleInternalUse(field as keyof PersonalInfoConfig))
          } else if (name === "show") {
            dispatch(toggleShow(field as keyof PersonalInfoConfig))
          }
        }
      }
    
      const handleQuestion = (payload) => {
        dispatch({
          type: 'add_question',
          payload
        })
      }

      return {personalInfo, delegateChangeHandler, handleQuestion}
  }

  export default usePersonalInfo