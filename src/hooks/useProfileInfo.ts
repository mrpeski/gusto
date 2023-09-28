import React, { ChangeEvent } from 'react'
import {
    initialState,
    profileInfoReducer,
    toggleMandatory,
    toggleShow
  } from '../reducers/profileInfo'

  const useProfileInfo =  () : {profileInfo: any, toggleShow: any, toggleMandatory: any, handleQuestion: any} => {
    const [profileInfo, dispatch] = React.useReducer(profileInfoReducer, initialState)

      const handleQuestion = (payload) => {
        dispatch({
          type: 'add_question',
          payload
        })
      }
      const handleMandatory = (field: keyof ProfileConfig) => {
        dispatch(toggleMandatory(field))
      }

      const handleShow = (field: keyof ProfileConfig) => {
        dispatch(toggleShow(field))
      }

      return {profileInfo, handleQuestion, toggleMandatory: handleMandatory, toggleShow: handleShow}
  }

  export default useProfileInfo