import { Reducer } from "react";

const defaultFieldConfig = {
  internalUse: false,
  show: true,
};
export const initialState = {
  firstName: { ...defaultFieldConfig },
  lastName: { ...defaultFieldConfig },
  emailId: { ...defaultFieldConfig },
  phoneNumber: { ...defaultFieldConfig },
  nationality: { ...defaultFieldConfig },
  currentResidence: { ...defaultFieldConfig },
  idNumber: { ...defaultFieldConfig },
  dateOfBirth: { ...defaultFieldConfig },
  gender: { ...defaultFieldConfig },
  personalQuestions: [],
};
export const personalInfoReducer: Reducer<
  PersonalInfoConfig,
  BasicAction | QuestionAction
> = (state, action) => {
  function toggle<T, K extends keyof T>(obj: T, key: K) {
    return { ...obj, [key]: !obj[key] };
  }
  switch (action.type) {
    case "toggle":
      const { field, config } = action as BasicAction;
      const objPath = state[field] as FieldConfig;
      
      return {
        ...state,
        [field]: toggle<FieldConfig, typeof config>(objPath, config),
      };
    case "add_question":
      const { payload } = action as QuestionAction;
      return {
        ...state,
        personalQuestions: [...payload],
      };
    default:
      return state;
  }
};

export function toggleInternalUse(
  field: keyof PersonalInfoConfig,
): BasicAction {
  return {
    type: "toggle",
    config: "internalUse",
    field,
  };
}

export function toggleShow(field: keyof PersonalInfoConfig): BasicAction {
  return {
    type: "toggle",
    config: "show",
    field,
  };
}
