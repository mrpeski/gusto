import React, { useEffect } from "react";
import SimpleField from "./SimpleField";
import Section from "./Section";
import withQuestions from "./withQuestions";
import Question from "./Question";
import useProfileInfo from "../hooks/useProfileInfo";
import useFormContext from "../hooks/useFormContext";

interface Props {
  onSave: (arg: QuestionConfig) => void;
}

const Questions = withQuestions<Props>(Question);

const ProfileInfoForm = () => {
  const { profileInfo, handleQuestion, toggleMandatory, toggleShow } =
    useProfileInfo();

    const {updateOrInsert} = useFormContext()
    
    const updateEffect = () => {
      async function doUpdate() {
        const resp = await updateOrInsert('profile', profileInfo);
      }
      doUpdate()
    }

    useEffect(updateEffect, [JSON.stringify(profileInfo)])

  const fieldsArr = Object.keys(profileInfo).filter(
    (field) => field !== "profileQuestions",
  );

  return (
    <Section title={"Profile Information"}>
      <ul>
        {fieldsArr.map((field) => (
          <SimpleField
            detail={profileInfo[field]}
            toggleShow={toggleShow}
            toggleMandatory={toggleMandatory}
            label={field}
            key={field}
          />
        ))}
      </ul>
      <Questions onSave={handleQuestion} />
    </Section>
  );
};

export default ProfileInfoForm;
