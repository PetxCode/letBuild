import React, { createContext, useEffect, useReducer, useState } from "react";
import firebase from "firebase";
import { app } from "../../../firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrrentUser] = useState([]);

  const GoogleProvider = new firebase.auth.GoogleAuthProvider();
  const GoogleSignIn = () => {
    firebase.auth().signInWithPopup(GoogleProvider);
  };

  const FacebookProvider = new firebase.auth.GoogleAuthProvider();
  const FacebookSignIn = () => {
    firebase.auth().signInWithPopup(GoogleProvider);
  };

  const GitHubProvider = new firebase.auth.GoogleAuthProvider(FacebookProvider);
  const GitHubSignIn = () => {
    firebase.auth().signInWithPopup(GitHubProvider);
  };

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
