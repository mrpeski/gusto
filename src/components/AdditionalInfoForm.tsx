import React, { FormEventHandler } from "react";
import Section from "./Section";
import withQuestions from "./withQuestions";
import Question from "./Question";

interface Props {
  onSave: (arg: QuestionConfig) => void;
}

const Questions = withQuestions<Props>(Question);

const AdditionalQuestionsForm = () => {
  const [customisedQuestions, setCustomisedQuestions] = React.useState([]);

  const handleAddAdditionalQuestion = (payload) => {
    setCustomisedQuestions(payload);
  };

  

  return (
    <Section title={"Additional questions"}>
      <Questions onSave={handleAddAdditionalQuestion} />
    </Section>
  );
};

export default AdditionalQuestionsForm;
