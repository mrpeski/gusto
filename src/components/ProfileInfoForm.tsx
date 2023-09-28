import React, { FormEventHandler } from "react";
import SimpleField from "./SimpleField";
import Section from "./Section";
import withQuestions from "./withQuestions";
import Question from "./Question";
import useProfileInfo from "../hooks/useProfileInfo";

interface Props {
  onSave: (arg: QuestionConfig) => void;
}

const Questions = withQuestions<Props>(Question);

const ProfileInfoForm = () => {
  const { profileInfo, handleQuestion, toggleMandatory, toggleShow } =
    useProfileInfo();
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
        <div
          data-target={"profileQuestions"}
          className="Field-wrapper last Flex-col"
        >
          {profileInfo["profileQuestions"].map(({ question }) => (
            <p>{question}</p>
          ))}
        </div>
      </ul>
      <Questions onSave={handleQuestion} />
    </Section>
  );
};

export default ProfileInfoForm;
