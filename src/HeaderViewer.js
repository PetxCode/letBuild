import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { app } from "./firebase";
import { AppContext } from "./SignUp/Auth";

const HeaderViewer = () => {
  const hist = useHistory();
  const { currentUser, newCurrentUser } = useContext(AppContext);
  return (
    <div>
      <Header
        style={{
          display: "flex",
          flexDirection: "row",
          color: "black",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100vw",
          // backgroundColor: "transparent",
          right: "0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "white",
          }}
        >
          {currentUser ? (
            <img
              src={newCurrentUser && newCurrentUser.avatar}
              alt="Avatar"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "cover",
                border: "2px solid white",
                borderRadius: "50%",
                marginTop: "5px",
              }}
            />
          ) : null}
          <div
            style={{
              bottom: "20px",
              fontWeight: "bold",
              color: "white",
              // marginLeft: "10px",
              height: "20px",
              fontSize: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            {newCurrentUser && newCurrentUser.name}{" "}
          </div>
        </div>

        <div>
          <Link
            style={{
              color: "white",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
            to="/"
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "white",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
            to="/dashboard"
          >
            Dashboard
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "white",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
            to="/course"
          >
            Courses
          </Link>
        </div>
        {currentUser ? (
          <Button
            onClick={() => {
              app.auth().signOut();
              window.location.reload(true);
              hist.push("/");
            }}
          >
            Sign Out
          </Button>
        ) : (
          <Button>
            <Link to="/registration">Sign Up</Link>
          </Button>
        )}
      </Header>
    </div>
  );
};

export default HeaderViewer;
