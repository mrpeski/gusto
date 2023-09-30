import React, { useEffect, useState } from "react";
import SimpleField from "./SimpleField";
import Section from "./Section";
import withQuestions from "./withQuestions";
import Question from "./Question";
import useProfileInfo from "../hooks/useProfileInfo";
import useFormContext from "../hooks/useFormContext";

const Questions = withQuestions(Question);

const ProfileInfoForm = () => {
  const { profileInfo, handleQuestion, toggleMandatory, toggleShow } =
    useProfileInfo();

    const {updateOrInsert} = useFormContext()
    const [skipUpdate, setSkipUpdate] = useState(true)
 
    const updateEffect = () => {
      async function doUpdate() {
        await updateOrInsert('profile', profileInfo);
      }
      if(!skipUpdate) doUpdate()
    }

    const profileInfoStr = JSON.stringify(profileInfo);

    useEffect(updateEffect, [profileInfoStr, profileInfo, skipUpdate, updateOrInsert])

    useEffect(() => {
      setSkipUpdate(false)
    }, [])

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
