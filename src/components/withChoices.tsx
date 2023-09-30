import React, { FC } from "react";
import { v4 } from "uuid";

interface Choice {
  id: string;
  choice: string;
}
interface Props {
  choice: Choice;
  onChange: (arg: Choice) => void;
}

function withChoices(
  Component: FC<Props>,
): FC<{ onChange: (arg: string[]) => void }> {
  return ({ onChange }) => {
    const [choices, setChoices] = React.useState<Choice[]>([
      { id: v4(), choice: "" },
    ]);

    const newChoice = () => {
      setChoices(choices.concat({ id: v4(), choice: "" }));
    };
    const handleChange = (item: Choice) => {
      const updateObj = choices.map((choice) => {
        if (choice.id === item.id) {
          return item;
        }
        return choice;
      });
      setChoices(updateObj);
      onChange(updateObj.map((item) => item.choice));
    };

    // console.log('Choices Arr', choices)

    return (
      <>
        {choices.map((choice, idx, arr) => {
          const isLastItem = idx === arr.length - 1;
          return (
            <div className="Choice-wrapper Flex" key={choice.id}>
              <button type="button" className="Button">
                <img src="/icons/re-sort_icon.svg" alt="" />
              </button>
              <Component choice={choice} onChange={handleChange} />
              {isLastItem ? (
                <button
                  onClick={newChoice}
                  type="button"
                  className="Button add"
                >
                  <img
                    src="/icons/add_icon.svg"
                    alt=""
                    className="Choice-add-icon"
                  />
                </button>
              ) : null}
            </div>
          );
        })}
      </>
    );
  };
}

export default withChoices;
