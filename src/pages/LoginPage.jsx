import React,{useContext} from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import  firebase, { uiConfig } from "../config/firebaseConfig";
import AppTheme from "../Colors";
import {ThemeContext} from "../contexts/ThemeContext";

const LoginPage = () => {  
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <>
    <div className="container-fluid" style={{
       backgroundColor: `${currentTheme.backgroundColor}`,
       color: `${currentTheme.textColor}` }}>
      <section className="login">
        <h3 className="sign_up">Sign up  </h3>
        <small> with </small> 
        <p className="brand">iNote </p>
        <StyledFirebaseAuth  uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </section>
      </div>
    </>
  );
};

export default LoginPage;
