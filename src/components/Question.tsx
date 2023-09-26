import React, { FC, FormEventHandler } from "react";

interface Props {
    onSave: (arg: QuestionConfig) => void
}
const Question: FC<Props> = ({ onSave }) => {
    const [config, setConfig] = React.useState<QuestionConfig>({
        "id": "",
        "type": "Paragraph",
        "question": "",
        "choices": [],
        "maxChoice": 0,
        "disqualify": false,
        "other": false
    })

    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault()
        onSave(config)
    }
    const handleChange = ({ target: { name, value } }) => {
        setConfig({ ...config, [name]: value })
    }
    const handleCheck = (event) => {
        setConfig({ ...config, [event.target.name]: !config[event.target.name]})
    }
    const questionType: QuestionType[] = ['Paragraph', 'Date', 'Dropdown', 'FileUpload', 'MultipleChoice', 'Number', 'ShortAnswer', 'YesNo']
    const hasMultipleChoice = ['Dropdown', 'MultipleChoice'].includes(config.type)
    const canDisqualify = ['YesNo'].includes(config.type)

    const { type, question, choices, maxChoice, disqualify, other } = config
    
    return <form onSubmit={handleSubmit}>
        <select name="type" value={type} onChange={handleChange}>
            {questionType.map(type => <option value={type} key={type}>{type}</option>)}
        </select>
        <input
            type="text" name="question"
            key={type}
            placeholder="Question"
            value={question}
            onChange={handleChange}
        />
        { hasMultipleChoice ? <input type="text" placeholder="Add Choice" name="choices[]" onChange={handleChange} /> : null }
        { hasMultipleChoice ? <input
            type="number" name="maxChoice"
            placeholder=""
            value={maxChoice}
            onChange={handleChange}
        /> : null }
        { canDisqualify ? <input name="disqualify" value={String(disqualify)} type="checkbox" checked={disqualify} onChange={handleCheck}/> : null}
        <button>Save</button>
    </form>
}

export default Question