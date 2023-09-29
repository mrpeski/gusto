import React from "react";
import SimpleField from "./SimpleField";
import Section from "./Section";
import withQuestions from "./withQuestions";
import Question from "./Question";
import usePersonalInfo from "../hooks/usePersonalInfo";

interface Props {
  onSave: (arg: QuestionConfig) => void;
}

const Questions = withQuestions<Props>(Question);

const PersonalInfoForm = () => {
  const { personalInfo, handleQuestion, toggleInternalUse, toggleShow } =
    usePersonalInfo();
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
      <Questions onSave={handleQuestion} />
    </Section>
  );
};

export default PersonalInfoForm;
