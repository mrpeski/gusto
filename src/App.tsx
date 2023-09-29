import React, { useEffect, useState } from "react";
import "./App.css";
import CoverImage from "./components/CoverImage";
import Layout from "./components/Layout";
import PersonalInfoForm from "./components/PersonalInfoForm";
import ProfileInfoForm from "./components/ProfileInfoForm";
import AdditionalQuestionsForm from "./components/AdditionalInfoForm";
import { getProgramApplicationForm, updateProgramApplicationForm } from "./apiClient";
import { FormContext } from "./contexts";
import { initialState as personalInfoInit } from "./reducers/personalInfo";
import { initialState as profileInfoInit } from "./reducers/profileInfo";


function App() {

  const [form, setForm] = useState<ApplicationFormConfig>({
    "id": "xdrsdf",
    "type": "applicationForm",
    "attributes": {
      "coverImage": "",
      "personalInformation": {...personalInfoInit},
      "profile": {...profileInfoInit},
      "customisedQuestions": []
    }
  })

  const PROGRAM_ID_FROM_SEARCH_PARAM = 'minsk'
  const getProgramEffect = async () => {
    const {data: applicationForm} = await getProgramApplicationForm(PROGRAM_ID_FROM_SEARCH_PARAM)
    setForm(applicationForm)
  }
  useEffect(() => { getProgramEffect() }, [])

  const updateOrInsert = async (path, payload) => {
    const body = {
      ...form, 
      attributes: {
        ...form.attributes,
        [path]: payload
      }
    };
    console.log('payload', body);
    const applicationForm = await updateProgramApplicationForm(PROGRAM_ID_FROM_SEARCH_PARAM, body)
    setForm(applicationForm)
  }

  console.log(form)

  return (
    <Layout>
      <FormContext.Provider value={{form, updateOrInsert}}>
        <CoverImage /> 
        <PersonalInfoForm />
        <ProfileInfoForm />
        <AdditionalQuestionsForm />
      </FormContext.Provider>
    </Layout>
  );
}



export default App;
