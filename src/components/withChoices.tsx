import React, { FC, useRef } from "react";

function withChoices<T>(
  Component,
): FC<T & { onAdd: (arg: {id: number, choice: string}[]) => void }> {
  return ({ onAdd, ...rest }) => {
    const stable_id = useRef(1);

    const [choices, setChoices] = React.useState<{id: number, choice: string}[]>([{
        id: stable_id.current,
        choice: ""
      }]);

    const newChoice = () => {
      setChoices(
        choices.concat({
          id: stable_id.current,
          choice: ""
        }),
      );
      stable_id.current += 1;
    };
    const handleSave = (id: string) => {
      onAdd(choices);
    };

    const handleDelete = (id: string) => {
      setChoices(choices.filter((choice) => choice.id !== +id));
    };
    return (
      <>
        {choices.map((choice,idx, arr) => {
              const isLastItem = (idx === arr.length - 1)

return            <div className="Choice-wrapper Flex">
                <button type="button" className="Button">
         <img src="/icons/re-sort_icon.svg" alt="" />
        </button>
          <Component
            question={choice}
            key={choice.id}
            onDelete={handleDelete}
            onSave={handleSave}
          />
          {isLastItem ? <button onClick={newChoice} type="button" className="Button add">
          <img src="/icons/add_icon.svg" alt="" className="Choice-add-icon"/>
        </button> : null}
        </div>
        })}
        
      </>
    );
  };
}

export default withChoices;
