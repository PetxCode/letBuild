import React, { useState, useEffect, createContext } from "react";
import { app } from "../firebase";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [newCurrentUser, setNewCurrentUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);

      if (user) {
        app
          .firestore()
          .collection("user")
          .doc(user.uid)
          .get()
          .then((doc) => {
            setNewCurrentUser(doc.data());
          });
      }
    });
  }, []);

  return (
    <AppContext.Provider value={{ currentUser, newCurrentUser }}>
      {children}
    </AppContext.Provider>
  );
};
