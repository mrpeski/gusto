import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import Section from "./Section";
import withQuestions from "./withQuestions";
import Question from "./Question";
import useFormContext from "../hooks/useFormContext";

interface Props {
  onSave: (arg: QuestionConfig) => void;
}

const Questions = withQuestions<Props>(Question);

const AdditionalQuestionsForm = () => {
  const {updateOrInsert} = useFormContext()
  
  const handleAddAdditionalQuestion = async (payload) => {
    const resp = await updateOrInsert('customisedQuestions', payload);
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
