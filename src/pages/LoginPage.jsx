import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import  firebase, { uiConfig } from "../config/firebaseConfig";

const LoginPage = () => {
  return (
    <>
      <section className="login">
        <h3>Login Page</h3>
        <StyledFirebaseAuth  uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </section>
    </>
  );
};

export default LoginPage;
