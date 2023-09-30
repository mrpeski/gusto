import React from "react";
import {
  initialState,
  personalInfoReducer,
  toggleInternalUse,
  toggleShow,
} from "../reducers/personalInfo";

const usePersonalInfo = (): {
  personalInfo: any;
  toggleShow: any;
  toggleInternalUse: any;
  handleQuestion: any;
} => {
  const [personalInfo, dispatch] = React.useReducer(
    personalInfoReducer,
    initialState,
  );

  const handleQuestion = (payload: QuestionConfig[]) => {
    dispatch({
      type: "add_question",
      payload,
    });
  };

  const handleInternalUse = (field: keyof PersonalInfoConfig) => {
    dispatch(toggleInternalUse(field));
  };

  const handleShow = (field: keyof PersonalInfoConfig) => {
    dispatch(toggleShow(field));
  };

  return {
    personalInfo,
    handleQuestion,
    toggleInternalUse: handleInternalUse,
    toggleShow: handleShow,
  };
};

export default usePersonalInfo;
