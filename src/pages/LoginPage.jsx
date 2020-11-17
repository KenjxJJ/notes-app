import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import  firebase, { uiConfig } from "../config/firebaseConfig";

const LoginPage = () => {
  return (
    <>
      <section className="login">
        <h3 className="sign_up">Sign up  </h3>
        <small> with </small> 
        <p className="brand">iNote </p>
        <StyledFirebaseAuth  uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </section>
    </>
  );
};

export default LoginPage;
