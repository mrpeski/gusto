import React from "react";
import "./App.css";
import CoverImage from "./components/CoverImage";
import Layout from "./components/Layout";
import PersonalInfoForm from "./components/PersonalInfoForm";
import ProfileInfoForm from "./components/ProfileInfoForm";
import AdditionalQuestionsForm from "./components/AdditionalInfoForm";

function App() {
  return (
    <Layout>
      <CoverImage />
      <PersonalInfoForm />
      <ProfileInfoForm />
      <AdditionalQuestionsForm />
    </Layout>
  );
}

export default App;
