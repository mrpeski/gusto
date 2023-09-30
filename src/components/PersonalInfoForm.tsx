import React, { useEffect, useState } from "react";
import SimpleField from "./SimpleField";
import Section from "./Section";
import withQuestions from "./withQuestions";
import Question from "./Question";
import usePersonalInfo from "../hooks/usePersonalInfo";
import useFormContext from "../hooks/useFormContext";
import { personalInfoSchema } from "../formSchema";

const Questions = withQuestions(Question);

const PersonalInfoForm = () => {
  const { personalInfo, handleQuestion, toggleInternalUse, toggleShow } =
    usePersonalInfo();

  const { updateOrInsert } = useFormContext();

  const [skipUpdate, setSkipUpdate] = useState(true);
  const personalInfoStr = JSON.stringify(personalInfo);

  const updateEffect = () => {
    async function doUpdate() {
      await updateOrInsert("personalInformation", JSON.parse(personalInfoStr));
    }
    try {
      const isValid = personalInfoSchema.isValidSync(JSON.parse(personalInfoStr));
      if (isValid && !skipUpdate) {
        doUpdate();
      }
    } catch (err: any) {
      console.log(err);
    }
    
  };
  useEffect(updateEffect, [personalInfoStr]);

  useEffect(() => {
    setSkipUpdate(false);
  }, []);

  const fieldsArr = Object.keys(personalInfo).filter(
    (field) => field !== "personalQuestions",
  );

  return (
    <Section title={"Personal Information"}>
      <ul>
        {fieldsArr.map((field) => (
          <SimpleField
            detail={personalInfo[field as keyof PersonalInfoConfig]}
            toggleShow={toggleShow}
            toggleInternalUse={toggleInternalUse}
            label={field}
            key={field}
          />
        ))}
      </ul>
      <Questions onSave={handleQuestion} />
    </Section>
  );
};

export default PersonalInfoForm;
