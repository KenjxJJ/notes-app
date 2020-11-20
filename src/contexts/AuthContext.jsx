import React, { createContext, useState, useEffect } from "react";
import firebase from "firebase";

// Create our context
export const AuthContext = createContext();

// Context Provider

const AuthContextProvider = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setLoggedIn(!!user);
      setUser(user);

      console.log("====================================");
      console.log("AuthContextProvider -> isLoggedIn", isLoggedIn);
      console.log("====================================");
    });
  }, [user, isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{ firebase: firebase, user: user, isLoggedIn: isLoggedIn }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
