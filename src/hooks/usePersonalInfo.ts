import React from "react";
import {
  initialState,
  personalInfoReducer,
  toggleInternalUse,
  toggleShow,
} from "../reducers/personalInfo";

const usePersonalInfo = (): {
  personalInfo: PersonalInfoConfig;
  toggleShow: (arg: string) => void;
  toggleInternalUse: (arg: string) => void;
  handleQuestion: (arg: QuestionConfig[]) => void;
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

  const handleInternalUse = (field: string) => {
    dispatch(toggleInternalUse(field as keyof PersonalInfoConfig));
  };

  const handleShow = (field: string) => {
    dispatch(toggleShow(field as keyof PersonalInfoConfig));
  };

  return {
    personalInfo,
    handleQuestion,
    toggleInternalUse: handleInternalUse,
    toggleShow: handleShow,
  };
};

export default usePersonalInfo;
