import React, { FormEventHandler } from "react";
import SimpleField from './SimpleField';
import Section from './Section';
import withQuestions from './withQuestions';
import Question from './Question';
import useProfileInfo from "../hooks/useProfileInfo";

interface Props {
    onSave: (arg: QuestionConfig) => void
  }
  
const Questions = withQuestions<Props>(Question)

const ProfileInfoForm = () => {


    const { profileInfo, delegateChangeHandler, handleQuestion  } = useProfileInfo()
    const fieldsArr = Object.keys(profileInfo).filter(field => field !== 'profileQuestions')

    return  <Section title={'Profile Information'}>
    <ul onChange={delegateChangeHandler as FormEventHandler}>
      { fieldsArr?.map(field => <SimpleField detail={profileInfo[field]} label={field} key={field} />)}
      <li data-target={'profileQuestions'} className='Field-wrapper last Flex-col'>
        {profileInfo["profileQuestions"].map(({ question }) => <p>{question}</p>)}
      </li>
    </ul>
    <Questions onSave={handleQuestion} />
  </Section>
}

export default ProfileInfoForm