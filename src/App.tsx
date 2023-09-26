import React, { ChangeEvent, FormEventHandler } from 'react';
import './App.css';
import {
  initialState,
  personalInfoReducer,
  toggleInternalUse,
  toggleShow
} from './reducers/personalInfo'
import SimpleField from './components/SimpleField';
import Question from './components/Question';
import withToggle from './components/withToggle';

interface  Props {
  onSave: (arg: QuestionConfig) => void
}
const QuestionToggle = withToggle<Props>(Question)

function App() {
  const [personalInfo, dispatch] = React.useReducer(personalInfoReducer, initialState)

  const delegateChangeHandler = ({ target: { name, parentElement } }: ChangeEvent<HTMLInputElement>) => {
    if (!parentElement) return;
    const field = parentElement.getAttribute("data-target")

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

  const fieldsArr = Object.keys(personalInfo)
  // console.log(personalInfo)
  return (
    <div className="App">
      <ul onChange={delegateChangeHandler as FormEventHandler}>
        {
          fieldsArr.map(field => <li key={field} data-target={field}>
            {
              field === "personalQuestions" ?
                personalInfo[field].map(({question}) => <span>{question}</span>)
                :
                <SimpleField
                  label={field}
                  internalUse={personalInfo[field].internalUse}
                  show={personalInfo[field].show}
                />
            }
          </li>)
        }
      </ul>
      <QuestionToggle onSave={handleQuestion}/>
    </div>
  );
}

export default App;
