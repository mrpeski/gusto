import React, { ChangeEvent } from 'react'
import {
    initialState,
    profileInfoReducer,
    toggleMandatory,
    toggleShow
  } from '../reducers/profileInfo'

  const useProfileInfo =  () : {profileInfo: any, delegateChangeHandler: any, handleQuestion: any} => {
    const [profileInfo, dispatch] = React.useReducer(profileInfoReducer, initialState)

    const delegateChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const field = target.getAttribute("data-target")
        const name = target.name
        if (field) {
          if (name === "internalUse") {
            dispatch(toggleMandatory(field as keyof ProfileConfig))
          } else if (name === "show") {
            dispatch(toggleShow(field as keyof ProfileConfig))
          }
        }
      }
    
      const handleQuestion = (payload) => {
        dispatch({
          type: 'add_question',
          payload
        })
      }

      return {profileInfo, delegateChangeHandler, handleQuestion}
  }

  export default useProfileInfo