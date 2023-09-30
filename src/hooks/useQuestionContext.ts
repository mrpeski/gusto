import React from "react";
import { QuestionContext } from "../contexts";

const useQuestionContext = () => {
  return React.useContext(QuestionContext);
};

export default useQuestionContext;
