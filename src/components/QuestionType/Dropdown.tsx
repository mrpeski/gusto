import useQuestionContext from "../../hooks/useQuestionContext";
import Choice from "../Choice";
import withChoices from "../withChoices";


const Choices = withChoices(Choice);

const Dropdown = () => {
    const { config, handleChange, handleCheck, handleChoices } = useQuestionContext()
    const { maxChoice, other } = config;
    return <>
        <div className="Choices-wrapper">
          <label htmlFor="" className="Choices-title">
            Choice
          </label>
          <Choices onChange={handleChoices} />
        </div>
    
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
</>
 
}

export default Dropdown