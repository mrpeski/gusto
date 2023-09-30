import React, { ChangeEventHandler, FC, useState } from "react";

interface ChoiceType {
  id: string;
  choice: string;
}
interface Props {
  choice: ChoiceType;
  onChange: (arg: ChoiceType) => void;
}

const Choice: FC<Props> = (props) => {
  const [choice, setChoice] = useState(props.choice.choice);
  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => {
    setChoice(value);
    props.onChange({
      id: props.choice.id,
      choice: value,
    });
  };
  return (
    <input
      className="Input"
      type="text"
      placeholder="Add Choice"
      value={choice}
      onChange={handleChange}
    />
  );
};

export default Choice;
