import React, { useEffect, useState } from "react";
import "./App.css";
import CoverImage from "./components/CoverImage";
import Layout from "./components/Layout";
import PersonalInfoForm from "./components/PersonalInfoForm";
import ProfileInfoForm from "./components/ProfileInfoForm";
import AdditionalQuestionsForm from "./components/AdditionalInfoForm";
import { getProgramApplicationForm, updateProgramApplicationForm } from "./apiClient";
import { FormContext, initialState } from "./contexts";
import { message } from "antd";

const PROGRAM_ID_FROM_SEARCH_PARAM = 'minsk'

function App() {
  const [form, setForm] = useState<ApplicationFormConfig>({...initialState})
  const [messageApi, msgContextHolder] = message.useMessage();

  const getProgramEffect = async () =>{
      const resp = await getProgramApplicationForm(PROGRAM_ID_FROM_SEARCH_PARAM)
      if(resp !== "error") setForm(resp)
  }
  useEffect(() => { getProgramEffect() }, [])

  const updateOrInsert = async (path: string, payload: UpdatePayload): Promise<void | "error"> => {
    try{
      const body = {
        ...form, 
        attributes: {
          ...form.attributes,
          [path]: payload
        }
      };
      const resp = await updateProgramApplicationForm(PROGRAM_ID_FROM_SEARCH_PARAM, body)
      if(resp === 'error') throw new Error('could not update program application')
      setForm(resp)
    } catch (err) {
      messageApi.error("Error updating... Please try again")
      console.log(err.message)
      return 'error'
    }
    
  }


  return (
    <Layout>
      {msgContextHolder}
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
