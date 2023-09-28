type FieldConfig = {
    "internalUse": boolean,
    "show": boolean
  }
type ProfileFieldConfig = {
    "mandatory": boolean,
    "show": boolean
  }

type QuestionType =  "Paragraph"| "ShortAnswer" | "YesNo" | "Dropdown" | "MultipleChoice" | "Date" | "Number" | "FileUpload"

type QuestionConfig = {
    "id": string,
    "type": QuestionType,
    "question": string,
    "choices": string[],
    "maxChoice": number,
    "disqualify": boolean,
    "other": boolean
  }

  type PersonalInfoConfig = {
    "firstName": FieldConfig,
    "lastName": FieldConfig,
    "emailId": FieldConfig,
    "phoneNumber": FieldConfig,
    "nationality": FieldConfig,
    "currentResidence": FieldConfig,
    "idNumber": FieldConfig,
    "dateOfBirth": FieldConfig,
    "gender": FieldConfig,
    "personalQuestions": QuestionConfig[]
  }
  type ProfileConfig = {
    "education": ProfileFieldConfig,
    "experience": ProfileFieldConfig,
    "resume": ProfileFieldConfig,
    "profileQuestions": QuestionConfig[]
  }
type ApplicationFormConfig = {
      "id": string,
      "type": "applicationForm",
      "attributes": {
        "coverImage": string,
        "personalInformation": PersonalInfoConfig,
        "profile": ProfileConfig,
        "customisedQuestions": QuestionConfig[]
      }
  }

  type BasicAction = {
    type: string, 
    config: keyof FieldConfig, 
    field: keyof PersonalInfoConfig
  }
  type ProfileAction = {
    type: string, 
    config: keyof ProfileFieldConfig, 
    field: keyof ProfileConfig
  }

  type QuestionAction = {
    type: string, 
    payload: any
  }