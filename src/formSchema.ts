import { object, boolean, string, array, number } from "yup";

export const fields = object({
    internalUse: boolean().required(),
    show: boolean().required(),
  })
  export const questionSchema = object({
    id: string().required(),
    type: string().required(),
    question: string().required(),
    choices: array().of(string()),
    maxChoice: number(),
    disqualify: boolean(),
    other: boolean()
  })
  
  export const personalInfoSchema = object({
    firstName: fields,
    lastName: fields,
    emailId: fields,
    phoneNumber: fields,
    nationality: fields,
    currentResidence: fields,
    idNumber: fields,
    dateOfBirth: fields,
    gender: fields,
    personalQuestions: array().of(questionSchema).notRequired()
  });
  export const profileFields = object({
    internalUse: boolean().required(),
    show: boolean().required(),
  })

  export const profileSchema = object({
    education: profileFields,
    experience: profileFields,
    resume: profileFields,
    profileQuestions: array().of(questionSchema).notRequired()
  });

  export const customisedQuestionSchema = array().of(questionSchema).notRequired()