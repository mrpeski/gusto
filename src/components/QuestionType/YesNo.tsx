import useQuestionContext from "../../hooks/useQuestionContext";

const YesNo = () => {
    const { config, handleCheck } = useQuestionContext()
    const { disqualify } = config;

    return <>
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
    </>
}

export default YesNo