import React, { FC, FormEventHandler } from "react";

interface Props {
  question: QuestionConfig;
  onDelete: (arg: string) => void;
  onSave: (arg: Omit<QuestionConfig, "id">) => void;
}
const QUESTION_TYPES: QuestionType[] = [
  "Paragraph",
  "Date",
  "Dropdown",
  "FileUpload",
  "MultipleChoice",
  "Number",
  "ShortAnswer",
  "YesNo",
];

const Question: FC<Props> = ({ onSave, question: item, onDelete }) => {
  const [config, setConfig] = React.useState<QuestionConfig>(item);
  const [mode, setMode] = React.useState<"create" | "update">("create");
  const [show, setShow] = React.useState<boolean>(true);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    onSave(config.id);
    setShow(false);
    setMode("update");
  };
  const handleDelete = () => {
    onDelete(config.id);
  };
  const handleChange = ({ target: { name, value } }) => {
    setConfig({ ...config, [name]: value });
  };
  const handleCheck = (event) => {
    setConfig({ ...config, [event.target.name]: !config[event.target.name] });
  };

  const hasMultipleChoice = ["Dropdown", "MultipleChoice"].includes(
    config.type,
  );
  const canDisqualify = ["YesNo"].includes(config.type);

  const { type, question, choices, maxChoice, disqualify, other } = config;

  return (
    <>
      {mode === "update" ? (
        <header className="Question-header">
          <div>
            <span className="Question-type">{type}</span>
            <h3 className="Question-title">{question} </h3>
          </div>
          <button className="Button edit" onClick={() => setShow(true)}>
            <img className="Edit-icon" src="/icons/edit_icon.png" alt="Edit" />
          </button>
        </header>
      ) : null}

      <form
        onSubmit={handleSubmit}
        className={"Flex Flex-col Question-form " + `${show ? "show" : "hide"}`}
      >
        <label htmlFor="">Type</label>
        <select
          name="type"
          value={type}
          onChange={handleChange}
          className="Input"
        >
          {QUESTION_TYPES.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </select>
        <label htmlFor="">Question</label>
        <input
          type="text"
          name="question"
          key={type}
          placeholder="Question"
          value={question}
          onChange={handleChange}
          className="Input"
        />
        {hasMultipleChoice ? (
          <>
            {" "}
            <label htmlFor="">Choice</label>
            <input
              className="Input"
              type="text"
              placeholder="Add Choice"
              name="choices[]"
              onChange={handleChange}
            />
          </>
        ) : null}

        {hasMultipleChoice ? (
          <>
            <label htmlFor="">Max choice allowed</label>
            <input
              type="number"
              name="maxChoice"
              placeholder=""
              value={maxChoice}
              onChange={handleChange}
              className="Input"
            />{" "}
          </>
        ) : null}
        {canDisqualify ? (
          <label>
            <input
              className="Input"
              name="disqualify"
              value={"Disqualify"}
              type="checkbox"
              checked={disqualify}
              onChange={handleCheck}
            />
            <span>Disqualify candidate if the answer is no</span>
          </label>
        ) : null}
        <div className="Flex Space-between">
          <button className="Button red" type="button" onClick={handleDelete}>
            <img src="/icons/delete_icon.svg" className="" />
            <span>Delete question</span>
          </button>
          <button className="Button green">Save</button>
        </div>
      </form>
    </>
  );
};

export default Question;
