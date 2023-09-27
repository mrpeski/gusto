import React, { ChangeEvent, FormEventHandler } from 'react';
import './App.css'
import {
  initialState,
  personalInfoReducer,
  toggleInternalUse,
  toggleShow
} from './reducers/personalInfo'
import SimpleField from './components/SimpleField';
import Question from './components/Question';
import withToggle from './components/withToggle';
import Section from './components/Section';
import CoverImage from './components/CoverImage';

interface Props {
  onSave: (arg: QuestionConfig) => void
}
const QuestionToggle = withToggle<Props>(Question)

function App() {
  const [personalInfo, dispatch] = React.useReducer(personalInfoReducer, initialState)

  const delegateChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const field = target.getAttribute("data-target")
    const name = target.name
    if (field) {
      if (name === "internalUse") {
        dispatch(toggleInternalUse(field as keyof PersonalInfoConfig))
      } else if (name === "show") {
        dispatch(toggleShow(field as keyof PersonalInfoConfig))
      }
    }
  }

  const handleQuestion = (payload) => {
    dispatch({
      type: 'add_question',
      payload
    })
  }

  const fieldsArr = Object.keys(personalInfo).filter(field => field !== 'personalQuestions')
  // console.log(personalInfo)
  return (
    <div className="App">
      <CoverImage />
      <Section title={'Personal Information'}>
        <ul onChange={delegateChangeHandler as FormEventHandler}>
          {
            fieldsArr.map(field => <SimpleField
              detail={personalInfo[field]}
              label={field}
              key={field}
            />
            )
          }
          <li
            data-target={'pesonalQuestions'}
            className='Field-wrapper last Flex-col'>
            {personalInfo["personalQuestions"].map(({ question }) => <p>{question}</p>)}
          </li>
        </ul>
        <QuestionToggle onSave={handleQuestion} />
      </Section>
      <Section title={'Profile'}>

      </Section>
      <Section title={'Additional questions'}>

      </Section>
    </div>
  );
}

export default App;
