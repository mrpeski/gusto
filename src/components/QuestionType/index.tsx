import React from "react";
import YesNo from "./YesNo";
import Dropdown from "./Dropdown";
import useQuestionContext from "../../hooks/useQuestionContext";

const noop = () => null;

const QUESTION_TYPES_CONFIG: Record<QuestionType, React.FC> = {
  Dropdown: Dropdown,
  MultipleChoice: Dropdown,
  YesNo: YesNo,
  Paragraph: noop,
  Date: noop,
  FileUpload: noop,
  Number: noop,
  ShortAnswer: noop,
};

const QuestionType = () => {
  const { config, handleChange } = useQuestionContext();
  const { type, question } = config;

  const QuestioComp = QUESTION_TYPES_CONFIG[type as QuestionType];

  return (
    <>
      <label htmlFor="" className="Question-title">
        Type
      </label>
      <select
        name="type"
        value={config.type}
        onChange={handleChange}
        className="Input"
      >
        {Object.keys(QUESTION_TYPES_CONFIG).map((type) => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </select>
      <label htmlFor="" className="Question-title">
        Question
      </label>
      <input
        type="text"
        name="question"
        key={type}
        placeholder="Question"
        value={question}
        onChange={handleChange}
        className="Input"
      />
      <QuestioComp />
    </>
  );
};

export default QuestionType;
