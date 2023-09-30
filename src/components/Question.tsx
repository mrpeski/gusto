import React, { ChangeEventHandler, FC, FormEventHandler } from "react";
import { QuestionContext } from "../contexts";
import QuestionType from "./QuestionType";
import QuestionCollapsed from "./QuestionCollapsed";

interface Props {
  question: QuestionConfig;
  onDelete: (arg: string) => void;
  onSave: (arg: QuestionConfig) => void;
  className: string;
}

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
  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = ({ target: { name, value } }) => {
    setConfig({ ...config, [name]: name === 'maxChoice' ?  Number(value) : value });
  };
  const handleCheck: ChangeEventHandler<HTMLInputElement> = (event) => {
    setConfig({ ...config, [event.target.name]: !config[event.target.name as keyof QuestionConfig] });
  };

  const handleChoices = (choices: string[]) => setConfig({ ...config, choices});

  const handleShow = () => setShow(true)

  return (
  <section className={className}>
      {mode === "update" ?  <QuestionCollapsed config={config} show={handleShow} /> : null}

      <form
        onSubmit={handleSubmit}
        className={"Flex Flex-col Question-form " + `${show ? "show" : "hide"}`}
      >
        <QuestionContext.Provider value={{config, handleChange, handleCheck, handleChoices}}>
          <QuestionType />
        </QuestionContext.Provider>

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
