import React from "react";
import { ErrorBoundary } from "react-error-boundary";
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
      <ErrorBoundary fallback={<p>⚠️ Something went wrong</p>}>
        <Questions onSave={handleAddAdditionalQuestion} />
      </ErrorBoundary>
    </Section>
  );
};

export default AdditionalQuestionsForm;
