import { Button } from "antd";
import React, { useContext } from "react";
// import HeaderView from "../../HeaderView";

// import HeaderFile from "./HeaderFile";
// import { app } from "../../base";
import { useHistory } from "react-router-dom";
import { app } from "../firebase";
import { AppContext } from "../SignUp/Auth";

const courseSelected = app.firestore().collection("user");

const SelectACourse = () => {
  const hist = useHistory();
  const { current } = useContext(AppContext);

  const pry4 = async () => {
    const addedCourse = await app.auth().currentUser;
    if (addedCourse) {
      await courseSelected.doc(addedCourse.uid).collection("pry4").doc().set({
        subj1: "intro to Drag and Drop",
        subj2: "intro to Block Identification",
        subj3: "intro to Block Coding 1",
        subj4: "intro to Block Coding 2",
        subj5: "intro to Block Coding 3",
      });
    }
    hist.push("/showCourse");
  };

  const pry5 = async () => {
    const addedCourse = await app.auth().currentUser;
    if (addedCourse) {
      await courseSelected.doc(addedCourse.uid).collection("pry5").doc().set({
        subj1: "intro to Directional Coding",
        subj2: "intro to Rules in Coding",
        subj3: "intro to Baby steps in Coding",
        subj4: "intro to Building Simple Codes",
        subj5: "intro to Scratch Junior",
      });
    }
    hist.push("/showCourse");
  };

  const pry6 = async () => {
    const addedCourse = await app.auth().currentUser;
    if (addedCourse) {
      await courseSelected.doc(addedCourse.uid).collection("pry6").doc().set({
        subj1: "intro to the Web",
        subj2: "intro to Advance Drag and Drop",
        subj3: "intro to Color Coding",
        subj4: "intro to Robotics",
        subj5: "intro to Lego Building",
      });
    }
    hist.push("/showCourse");
  };

  const js1 = async () => {
    const addedCourse = await app.auth().currentUser;
    if (addedCourse) {
      await courseSelected.doc(addedCourse.uid).collection("js1").doc().set({
        subj1: "intro to HTML",
        subj2: "intro to CSS",
        subj3: "intro to Web Programming",
        subj4: "intro to Design in Web",
        subj5: "intro to JavaScript",
      });
    }
    hist.push("/showCourse");
  };

  const js2 = async () => {
    const addedCourse = await app.auth().currentUser;
    if (addedCourse) {
      await courseSelected.doc(addedCourse.uid).collection("js2").doc().set({
        subj1: "intro to JavaScript 2",
        subj2: "intro to JavaScript 3",
        subj3: "intro to Scratch",
        subj4: "intro to Scratch 2",
        subj5: "intro to Scratch 3",
      });
    }
    hist.push("/showCourse");
  };

  const js3 = async () => {
    const addedCourse = await app.auth().currentUser;
    if (addedCourse) {
      await courseSelected.doc(addedCourse.uid).collection("js3").doc().set({
        subj1: "intro to BuildBox",
        subj2: "intro to Minecraft",
        subj3: "intro to Javascript revision",
        subj4: "intro to Javascript revision 2",
        subj5: "intro to Javascript revision 3",
      });
    }
    hist.push("/showCourse");
  };

  const ss1 = async () => {
    const addedCourse = await app.auth().currentUser;
    if (addedCourse) {
      await courseSelected.doc(addedCourse.uid).collection("ss1").doc().set({
        subj1: "intro to App Inventor",
        subj2: "intro to  App Inventor",
        subj3: "intro to Minecraft",
        subj4: "intro to Minecraft 2",
        subj5: "intro to Minecraft 3",
      });
    }
    hist.push("/showCourse");
  };

  const ss2 = async () => {
    const addedCourse = await app.auth().currentUser;
    if (addedCourse) {
      await courseSelected.doc(addedCourse.uid).collection("ss2").doc().set({
        subj1: "intro to BuildBox",
        subj2: "intro to Game Dev",
        subj3: "intro to DataTypes in Python",
        subj4: "intro to Pyhton",
        subj5: "intro to Pyhton 2",
      });
    }
    hist.push("/showCourse");
  };

  const ss3 = async () => {
    const addedCourse = await app.auth().currentUser;
    if (addedCourse) {
      await courseSelected.doc(addedCourse.uid).collection("ss3").doc().set({
        subj1: "intro to Python Advance",
        subj2: "intro to Machine Learning",
        subj3: "intro to Machine Learning 2",
        subj4: "intro to Machine Learning 3",
        subj5: "intro to Pyhton Advance",
      });
    }
    hist.push("/showCourse");
  };

  const { newCurrent } = useContext(AppContext);
  return (
    <div>
      <br />
      <br />
      <br />
      <center>Here is our Studied Courses</center>
      <center
        style={{
          width: "400px",
          display: "flex",
          justifyContent: "center",
          textAlign: "left",
          marginLeft: "100px",
          marginTop: "100px",
        }}
      >
        {newCurrent && newCurrent.profile}
      </center>
      <br />
      <center>
        <h2>choose a course</h2>
      </center>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div>
          <Button
            onClick={() => {
              pry4();
              hist.push("/stu");
            }}
          >
            PRY 4
          </Button>
          <br />
          <br />
          <Button
            onClick={() => {
              pry5();
              hist.push("/stu");
            }}
          >
            PRY 5
          </Button>
          <br />
          <br />

          <Button
            onClick={() => {
              pry6();
              hist.push("/stu");
            }}
          >
            PRY 6
          </Button>
        </div>

        <div>
          <Button
            onClick={() => {
              js1();
              hist.push("/stu");
            }}
          >
            JS 1
          </Button>
          <br />
          <br />
          <Button
            onClick={() => {
              js2();
              hist.push("/stu");
            }}
          >
            JS 2
          </Button>
          <br />
          <br />

          <Button
            onClick={() => {
              js3();
              hist.push("/stu");
            }}
          >
            JS 3
          </Button>
        </div>

        <div>
          <Button
            onClick={() => {
              ss1();
              hist.push("/stu");
            }}
          >
            SS 1
          </Button>
          <br />
          <br />
          <Button
            onClick={() => {
              ss2();
              hist.push("/stu");
            }}
          >
            SS 2{" "}
          </Button>
          <br />
          <br />

          <Button
            onClick={() => {
              ss3();
              hist.push("/stu");
            }}
          >
            SS 3
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectACourse;
