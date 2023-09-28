import React, { FC, useRef } from "react"

function withQuestions<T>(Component): FC<T & {onSave: (arg: QuestionConfig[]) => void}> {
    return ({onSave, ...rest}) => {
        const [questions, setQuestions] = React.useState<QuestionConfig[]>([])
        const stable_id = useRef(1)

        const newQuestion = () => {
            setQuestions(questions.concat({
                "id": stable_id.current,
                "type": "Paragraph",
                "question": "",
                "choices": [],
                "maxChoice": 0,
                "disqualify": false,
                "other": false
            }))
            stable_id.current += 1;
        }
        const handleSave = (id: string) => {
            onSave(questions)
        }

        const handleDelete = (id: string) => {
            // console.log("delete", id)
            setQuestions(questions.filter(question => question.id !== id))
        }
      return <> 
        {questions.map((question) => <Component question={question} key={question.id} onDelete={handleDelete} onSave={handleSave} />)}
        <button onClick={newQuestion} className="Button add">
            <img src="/icons/add_icon.svg" alt="" />
            Add a question
        </button>
      </>
    }
  }

  export default withQuestions