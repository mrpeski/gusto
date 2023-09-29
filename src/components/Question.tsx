import React, { FC, FormEventHandler } from "react";
import withChoices from "./withChoices";
import Choice from "./Choice";

interface Props {
  question: QuestionConfig;
  onDelete: (arg: string) => void;
  onSave: (arg: Omit<QuestionConfig, "id">) => void;
  className: string;
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

const Choices = withChoices(Choice);

const Question: FC<Props> = ({
  onSave,
  question: item,
  onDelete,
  className,
}) => {
  const [config, setConfig] = React.useState<QuestionConfig>(item);
  const [mode, setMode] = React.useState<"create" | "update">("create");
  const [show, setShow] = React.useState<boolean>(true);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    onSave(config);
    setShow(false);
    setMode("update");
  };
  const handleDelete = () => {
    onDelete(config.id);
  };
  const handleChange = ({ target: { name, value } }) => {
    setConfig({ ...config, [name]: name === 'maxChoice' ?  Number(value) : value });
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
    <section className={className}>
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
        <label htmlFor="" className="Question-title">
          Type
        </label>
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
        {hasMultipleChoice ? (
          <div className="Choices-wrapper">
            <label htmlFor="" className="Choices-title">
              Choice
            </label>
            <Choices
              onAdd={(choices) => {
                setConfig({ ...config, choices });
              }}
            />
          </div>
        ) : null}

        {hasMultipleChoice ? (
          <label>
            <input
              className="Input"
              name="other"
              value={""}
              type="checkbox"
              checked={other}
              onChange={handleCheck}
            />
            <span>Enable “Other” option </span>
          </label>
        ) : null}

        {hasMultipleChoice ? (
          <>
            <label htmlFor="" className="Question-title">
              Max choice allowed
            </label>
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
    </section>
  );
};

export default Question;
