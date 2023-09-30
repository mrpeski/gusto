import React, { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {v4} from "uuid"

interface Props {
  question: QuestionConfig;
  onDelete: (arg: string) => void;
  onSave: (arg: QuestionConfig) => void;
  className: string;
}

function withQuestions(
  Component: FC<Props>,
): FC<{ onSave: (arg: QuestionConfig[]) => void }> {
  return ({ onSave }) => {
    const [questions, setQuestions] = React.useState<QuestionConfig[]>([]);

    const newQuestion = () => {
      setQuestions(
        questions.concat({
          id: v4(),
          type: "Paragraph",
          question: "",
          choices: [],
          maxChoice: 0,
          disqualify: false,
          other: false,
        }),
      );
    };
    const handleSave = (item: QuestionConfig) => {
      const updateObj = questions.map(question => {
        if(question.id === item.id){
          return item
        }
        return question
      })
      setQuestions(updateObj);
      onSave(updateObj)
    };

    const handleDelete = (id: string) => {
      const updateObj = questions.filter((question) => question.id !== id)
      setQuestions(updateObj);
      onSave(updateObj)
    };
    return (
      <ErrorBoundary fallback={<p>⚠️ Something went wrong. Please refresh.</p>}>
        {questions.map((question, idx, arr) => {
          const isLastItem = idx === arr.length - 1;

          return (
            <Component
              className={"Question " + `${isLastItem ? "last" : ""}`}
              question={question}
              key={question.id}
              onDelete={handleDelete}
              onSave={handleSave}
            />
          );
        })}
        <button onClick={newQuestion} className="Button add">
          <img src="/icons/add_icon.svg" alt="" />
          Add a question
        </button>
      </ErrorBoundary>
    );
  };
}

export default withQuestions;
