import React from "react";
import { v4 } from "uuid"
import { initialState as personalInfoInit } from "./reducers/personalInfo";
import { initialState as profileInfoInit } from "./reducers/profileInfo";

interface Props {
  form: ApplicationFormConfig,
  updateOrInsert: any
}

export const initialState = {
  "id": v4(),
  "type": "applicationForm",
  "attributes": {
    "coverImage": "",
    "personalInformation": {...personalInfoInit},
    "profile": {...profileInfoInit},
    "customisedQuestions": []
  }
}

export const FormContext = React.createContext<Props>({
    form: {...initialState},
    updateOrInsert: () => null
})

export const QuestionContext = React.createContext<any>({
  // form: {...initialState},
  handleCheck: () => null,
  handleChange: () => null,
  handleDelete: () => null
})