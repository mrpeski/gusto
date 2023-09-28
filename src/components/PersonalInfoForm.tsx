import React, { FormEventHandler } from "react";
import SimpleField from './SimpleField';
import Section from './Section';
import withQuestions from './withQuestions';
import Question from './Question';
import usePersonalInfo from '../hooks/usePersonalInfo';

interface Props {
    onSave: (arg: QuestionConfig) => void
  }
  
const Questions = withQuestions<Props>(Question)

const PersonalInfo = () => {
    const { personalInfo, delegateChangeHandler, handleQuestion  } = usePersonalInfo()
    const fieldsArr = Object.keys(personalInfo).filter(field => field !== 'profileQuestions')

    return  <Section title={'Personal Information'}>
    <ul onChange={delegateChangeHandler as FormEventHandler}>
      { fieldsArr.map(field => <SimpleField detail={personalInfo[field]} label={field} key={field} />)}
      <li data-target={'pesonalQuestions'} className='Field-wrapper last Flex-col'>
        {personalInfo["personalQuestions"].map(({ question }) => <p>{question}</p>)}
      </li>
    </ul>
    <Questions onSave={handleQuestion} />
  </Section>
}

export default PersonalInfo