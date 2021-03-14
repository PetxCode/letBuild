import React, { useContext } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { AppContext } from "../SignUp/Auth";
import { app } from "../firebase";

const regCourse = app.firestore().collection("user");
const ShowTheCourse = () => {
  const { newCurrent } = useContext(AppContext);

  const [myCourse1, setMyCourse1] = React.useState([]);
  const [myCourse2, setMyCourse2] = React.useState([]);
  const [myCourse3, setMyCourse3] = React.useState([]);
  const [myCourse4, setMyCourse4] = React.useState([]);
  const [myCourse5, setMyCourse5] = React.useState([]);
  const [myCourse6, setMyCourse6] = React.useState([]);
  const [myCourse7, setMyCourse7] = React.useState([]);
  const [myCourse8, setMyCourse8] = React.useState([]);
  const [myCourse9, setMyCourse9] = React.useState([]);

  const myRegCourse1 = async () => {
    const course = await app.auth().currentUser;

    if (course) {
      await regCourse
        .doc(course.uid)
        .collection("pry4")
        .onSnapshot((snapshot) => {
          const i = [];
          snapshot.forEach((doc) => {
            i.push(doc.data());
          });
          setMyCourse1(i);
        });
    }
  };

  const myRegCourse2 = async () => {
    const course = await app.auth().currentUser;

    if (course) {
      await regCourse
        .doc(course.uid)
        .collection("pry5")
        .onSnapshot((snapshot) => {
          const i = [];
          snapshot.forEach((doc) => {
            i.push(doc.data());
          });
          setMyCourse2(i);
        });
    }
  };

  const myRegCourse3 = async () => {
    const course = await app.auth().currentUser;

    if (course) {
      await regCourse
        .doc(course.uid)
        .collection("pry6")
        .onSnapshot((snapshot) => {
          const i = [];
          snapshot.forEach((doc) => {
            i.push(doc.data());
          });
          setMyCourse3(i);
        });
    }
  };

  const myRegCourse4 = async () => {
    const course = await app.auth().currentUser;

    if (course) {
      await regCourse
        .doc(course.uid)
        .collection("js1")
        .onSnapshot((snapshot) => {
          const i = [];
          snapshot.forEach((doc) => {
            i.push(doc.data());
          });
          setMyCourse4(i);
        });
    }
  };

  const myRegCourse5 = async () => {
    const course = await app.auth().currentUser;

    if (course) {
      await regCourse
        .doc(course.uid)
        .collection("js2")
        .onSnapshot((snapshot) => {
          const i = [];
          snapshot.forEach((doc) => {
            i.push(doc.data());
          });
          setMyCourse5(i);
        });
    }
  };

  const myRegCourse6 = async () => {
    const course = await app.auth().currentUser;

    if (course) {
      await regCourse
        .doc(course.uid)
        .collection("js3")
        .onSnapshot((snapshot) => {
          const i = [];
          snapshot.forEach((doc) => {
            i.push(doc.data());
          });
          setMyCourse6(i);
        });
    }
  };

  const myRegCourse7 = async () => {
    const course = await app.auth().currentUser;

    if (course) {
      await regCourse
        .doc(course.uid)
        .collection("ss1")
        .onSnapshot((snapshot) => {
          const i = [];
          snapshot.forEach((doc) => {
            i.push(doc.data());
          });
          setMyCourse7(i);
        });
    }
  };

  const myRegCourse8 = async () => {
    const course = await app.auth().currentUser;

    if (course) {
      await regCourse
        .doc(course.uid)
        .collection("ss2")
        .onSnapshot((snapshot) => {
          const i = [];
          snapshot.forEach((doc) => {
            i.push(doc.data());
          });
          setMyCourse8(i);
        });
    }
  };

  const myRegCourse9 = async () => {
    const course = await app.auth().currentUser;

    if (course) {
      await regCourse
        .doc(course.uid)
        .collection("ss3")
        .onSnapshot((snapshot) => {
          const i = [];
          snapshot.forEach((doc) => {
            i.push(doc.data());
          });
          setMyCourse9(i);
        });
    }
  };

  React.useEffect(() => {
    myRegCourse1();
    myRegCourse2();
    myRegCourse3();
    myRegCourse4();
    myRegCourse5();
    myRegCourse6();
    myRegCourse7();
    myRegCourse8();
    myRegCourse9();
  }, []);
  return (
    <div>
      <br />
      <br />
      <br />
      <center>Here is our Study Screen Courses page</center>
      <br />
      <center>
        <Button>
          <Link to="report">View Report</Link>
        </Button>
      </center>
      <br />
      <br />
      <center>
        <h1 style={{ textTransform: "uppercase" }}>
          {newCurrent && newCurrent.name}
        </h1>
      </center>

      <center>
        {myCourse1.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
          <div key={id}>
            <h3> {subj1} </h3>
            <h3> {subj2} </h3>
            <h3> {subj3} </h3>
            <h3> {subj4} </h3>
            <h3> {subj5} </h3>
          </div>
        ))}

        {myCourse2.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
          <div key={id}>
            <h3> {subj1} </h3>
            <h3> {subj2} </h3>
            <h3> {subj3} </h3>
            <h3> {subj4} </h3>
            <h3> {subj5} </h3>
          </div>
        ))}

        {myCourse3.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
          <div key={id}>
            <h3> {subj1} </h3>
            <h3> {subj2} </h3>
            <h3> {subj3} </h3>
            <h3> {subj4} </h3>
            <h3> {subj5} </h3>
          </div>
        ))}

        {myCourse4.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
          <div key={id}>
            <h3> {subj1} </h3>
            <h3> {subj2} </h3>
            <h3> {subj3} </h3>
            <h3> {subj4} </h3>
            <h3> {subj5} </h3>
          </div>
        ))}

        {myCourse5.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
          <div key={id}>
            <h3> {subj1} </h3>
            <h3> {subj2} </h3>
            <h3> {subj3} </h3>
            <h3> {subj4} </h3>
            <h3> {subj5} </h3>
          </div>
        ))}

        {myCourse6.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
          <div key={id}>
            <h3> {subj1} </h3>
            <h3> {subj2} </h3>
            <h3> {subj3} </h3>
            <h3> {subj4} </h3>
            <h3> {subj5} </h3>
          </div>
        ))}

        {myCourse7.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
          <div key={id}>
            <h3> {subj1} </h3>
            <h3> {subj2} </h3>
            <h3> {subj3} </h3>
            <h3> {subj4} </h3>
            <h3> {subj5} </h3>
          </div>
        ))}

        {myCourse8.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
          <div key={id}>
            <h3> {subj1} </h3>
            <h3> {subj2} </h3>
            <h3> {subj3} </h3>
            <h3> {subj4} </h3>
            <h3> {subj5} </h3>
          </div>
        ))}

        {myCourse9.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
          <div key={id}>
            <h3> {subj1} </h3>
            <h3> {subj2} </h3>
            <h3> {subj3} </h3>
            <h3> {subj4} </h3>
            <h3> {subj5} </h3>
          </div>
        ))}
      </center>
    </div>
  );
};

export default ShowTheCourse;
