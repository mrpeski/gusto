import { FC } from "react";

const QuestionCollapsed: FC<{ config: any; show: () => void }> = ({
  config,
  show,
}) => {
  return (
    <header className="Question-header">
      <div>
        <span className="Question-type">{config.type}</span>
        <h3 className="Question-title">{config.question} </h3>
      </div>
      <button className="Button edit" onClick={show}>
        <img className="Edit-icon" src="/icons/edit_icon.png" alt="Edit" />
      </button>
    </header>
  );
};

export default QuestionCollapsed;
