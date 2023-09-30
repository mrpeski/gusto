import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import SimpleField from "./SimpleField";
import Section from "./Section";
import withQuestions from "./withQuestions";
import Question from "./Question";
import usePersonalInfo from "../hooks/usePersonalInfo";
import useFormContext from "../hooks/useFormContext";

interface Props {
  onSave: (arg: QuestionConfig) => void;
}

const Questions = withQuestions<Props>(Question);

const PersonalInfoForm = () => {
  const { personalInfo, handleQuestion, toggleInternalUse, toggleShow } =
    usePersonalInfo();

    const {updateOrInsert} = useFormContext()

    const [skipUpdate, setSkipUpdate] = useState(true)
    
    const updateEffect = () => {
      async function doUpdate() {
        const resp = await updateOrInsert('personalInformation', personalInfo);
      }
      if(!skipUpdate) doUpdate()
    }
    useEffect(updateEffect, [JSON.stringify(personalInfo)])

    useEffect(() => {
      setSkipUpdate(false)
    }, [])

  const fieldsArr = Object.keys(personalInfo).filter(
    (field) => field !== "personalQuestions",
  );

  return (
    <Section title={"Personal Information"}>
      <ul>
        {fieldsArr.map((field) => (
          <SimpleField
            detail={personalInfo[field]}
            toggleShow={toggleShow}
            toggleInternalUse={toggleInternalUse}
            label={field}
            key={field}
          />
        ))}
      
      </ul>
      <Questions onSave={handleQuestion}/>
    </Section>
  );
};

export default PersonalInfoForm;
