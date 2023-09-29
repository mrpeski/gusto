import React, { FC, useRef } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {v4} from "uuid"

function withQuestions<T>(
  Component,
): FC<T & { onSave: (arg: QuestionConfig[]) => void }> {
  return ({ onSave, ...rest }) => {
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
    const handleSave = (item) => {
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
