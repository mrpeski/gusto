import { Reducer } from "react";

const defaultFieldConfig: ProfileFieldConfig = {
  mandatory: true,
  show: true,
};
export const initialState: ProfileConfig = {
  education: { ...defaultFieldConfig },
  experience: { ...defaultFieldConfig },
  resume: { ...defaultFieldConfig },
  profileQuestions: [],
};
export const profileInfoReducer: Reducer<
  ProfileConfig,
  ProfileAction | QuestionAction
> = (state, action) => {
  function toggle<T, K extends keyof T>(obj: T, key: K) {
    return { ...obj, [key]: !obj[key] };
  }
  switch (action.type) {
    case "toggle":
      const { field, config } = action as ProfileAction;
      const objPath = state[field] as ProfileFieldConfig;
      return {
        ...state,
        [field]: toggle<ProfileFieldConfig, typeof config>(objPath, config),
      };
    case "add_question":
      const { payload } = action as QuestionAction;
      return {
        ...state,
        profileQuestions: [...payload],
      };
    default:
      return state;
  }
};

export function toggleMandatory(field: keyof ProfileConfig): ProfileAction {
  return {
    type: "toggle",
    config: "mandatory",
    field,
  };
}

export function toggleShow(field: keyof ProfileConfig): ProfileAction {
  return {
    type: "toggle",
    config: "show",
    field,
  };
}
