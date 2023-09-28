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

const AdditionalQuestionsForm = () => {
    const [additionalQuestions, setAdditionalQuestions] = React.useState([])
  
    const handleAddAdditionalQuestion = (payload) => {
      setAdditionalQuestions(payload)
    }

    return  <Section title={'Additional questions'}>
    <Questions onSave={handleAddAdditionalQuestion} />
  </Section>
}

export default AdditionalQuestionsForm