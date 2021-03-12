import { Button } from "antd";
import React, { useState, useEffect } from "react";
import { app } from "../../firebase";
import firebase from "firebase";

const AppAuth = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const provider = new firebase.auth.GoogleAuthProvider();

  const Googleprovider = new firebase.auth.GoogleAuthProvider();
  const GoogleSign = async () => {
    firebase.auth().signInWithPopup(Googleprovider);
  };

  const FBprovider = new firebase.auth.FacebookAuthProvider();
  const FacebookSign = async () => {
    firebase.auth().signInWithPopup(FBprovider);
  };

  const GitHubProvider = new firebase.auth.GithubAuthProvider();
  const GithubSign = async () => {
    firebase.auth().signInWithPopup(GitHubProvider);
  };

  const SignOut = () => {
    app.auth().signOut();
  };

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <center>Login page</center>
      <br />
      <br />
      <br />
      <center
        style={{
          display: "flex",
          width: "400px",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          onClick={() => {
            GoogleSign();
          }}
        >
          SignIn
        </Button>

        <Button
          onClick={() => {
            FacebookSign();
          }}
        >
          FBSignIn
        </Button>

        <Button
          onClick={() => {
            GithubSign();
          }}
        >
          GitHub SignIn
        </Button>

        <Button onClick={SignOut}>SignOut</Button>

        <br />
        <br />
        <br />
      </center>
      {currentUser && (
        <>
          <div>{currentUser.displayName}</div>
          <div>{currentUser.email}</div>
          <img
            src={currentUser.photoURL}
            alt={currentUser.displayName}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </>
      )}
    </div>
  );
};

export default AppAuth;
