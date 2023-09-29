import React from "react";
import { initialState as personalInfoInit } from "./reducers/personalInfo";
import { initialState as profileInfoInit } from "./reducers/profileInfo";

interface Props {
    form: ApplicationFormConfig,
    updateOrInsert: any
}
export const FormContext = React.createContext<Props>({
    form: {
        "id": "xdrsdf",
        "type": "applicationForm",
        "attributes": {
          "coverImage": "",
          "personalInformation": {...personalInfoInit},
          "profile": {...profileInfoInit},
          "customisedQuestions": []
        }
      },
    updateOrInsert: () => null
})
