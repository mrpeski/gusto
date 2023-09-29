import React, { useEffect } from "react";
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
    
    const updateEffect = () => {
      async function doUpdate() {
        const resp = await updateOrInsert('personalInformation', personalInfo);
      }
      doUpdate()
      // if(resp !== "error") setImage(reader.result as string);
    }

    useEffect(updateEffect, [JSON.stringify(personalInfo)])

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
        <div
          data-target={"personalQuestions"}
          className="Field-wrapper last Flex-col"
        >
          {personalInfo["personalQuestions"].map(({ question }) => (
            <p>{question}</p>
          ))}
        </div>
      </ul>
      <Questions onSave={handleQuestion}/>
    </Section>
  );
};

export default PersonalInfoForm;
