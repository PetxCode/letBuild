import { Button, Input } from "antd";
import React, { useState, useEffect, useContext } from "react";
import { app } from "../firebase";
import { AppContext } from "../SignUp/Auth";

const regCourse = app.firestore().collection("user");

const ReportPage = () => {
  const [attention, setAttention] = useState("");
  const [wellUnderstood, setWellUnderstood] = useState("");
  const [interesting, setInteresting] = useState("");

  const [attention2, setAttention2] = useState("");
  const [wellUnderstood2, setWellUnderstood2] = useState("");
  const [interesting2, setInteresting2] = useState("");

  const [attention3, setAttention3] = useState("");
  const [wellUnderstood3, setWellUnderstood3] = useState("");
  const [interesting3, setInteresting3] = useState("");

  const [attention4, setAttention4] = useState("");
  const [wellUnderstood4, setWellUnderstood4] = useState("");
  const [interesting4, setInteresting4] = useState("");

  const [attention5, setAttention5] = useState("");
  const [wellUnderstood5, setWellUnderstood5] = useState("");
  const [interesting5, setInteresting5] = useState("");

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

  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(true);
  };

  const postRating5 = async () => {
    const userPresent = await app.auth().currentUser;

    if (userPresent) {
      regCourse
        .doc(userPresent.uid)
        .collection("rating5")
        .doc()
        .set({
          attention: parseInt(attention5),
          wellUnderstood: parseInt(wellUnderstood5),
          interesting: parseInt(interesting5),
        });
    }
  };

  const postRating4 = async () => {
    const userPresent = await app.auth().currentUser;

    if (userPresent) {
      regCourse
        .doc(userPresent.uid)
        .collection("rating4")
        .doc()
        .set({
          attention: parseInt(attention4),
          wellUnderstood: parseInt(wellUnderstood4),
          interesting: parseInt(interesting4),
        });
    }
  };

  const postRating3 = async () => {
    const userPresent = await app.auth().currentUser;

    if (userPresent) {
      regCourse
        .doc(userPresent.uid)
        .collection("rating3")
        .doc()
        .set({
          attention: parseInt(attention3),
          wellUnderstood: parseInt(wellUnderstood3),
          interesting: parseInt(interesting3),
        });
    }
  };

  const postRating2 = async () => {
    const userPresent = await app.auth().currentUser;

    if (userPresent) {
      regCourse
        .doc(userPresent.uid)
        .collection("rating2")
        .doc()
        .set({
          attention: parseInt(attention2),
          wellUnderstood: parseInt(wellUnderstood2),
          interesting: parseInt(interesting2),
        });
    }
  };

  const postRating1 = async () => {
    const userPresent = await app.auth().currentUser;

    if (userPresent) {
      regCourse
        .doc(userPresent.uid)
        .collection("rating1")
        .doc()
        .set({
          attention: parseInt(attention),
          wellUnderstood: parseInt(wellUnderstood),
          interesting: parseInt(interesting),
        });
    }
  };

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
      <center>The Report Page</center>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          textWeight: "bold",
          marginBottom: "30px",
          marginLeft: "10px",
        }}
      >
        <div
          style={{
            width: "20%",
          }}
        >
          week
        </div>
        <div
          style={{
            width: "20%",
          }}
        >
          Topic
        </div>
        <div
          style={{
            width: "60%",
          }}
        >
          Cast a rating
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          textWeight: "bold",
          marginLeft: "10px",
        }}
      >
        <div
          style={{
            width: "10%",
          }}
        >
          {myCourse6.map(({ id, subj }) => (
            <div key={id}> week1</div>
          ))}
        </div>
        <div
          style={{
            width: "80%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              // backgroundColor: "red",
              margin: "20px 0px",
            }}
          >
            {myCourse9.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
              <div key={id}>
                <h3
                  style={{
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    margin: "40px, 0",
                    marginTop: "40px",
                    marginBottom: "40px",
                    width: "150%",
                  }}
                >
                  {" "}
                  {subj1}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginRight: "20px",
                      marginLeft: "20px",
                    }}
                  ></div>
                </h3>

                <h3
                  style={{
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    margin: "40px, 0",
                    marginTop: "40px",
                    marginBottom: "40px",
                  }}
                >
                  {" "}
                  {subj2}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginRight: "20px",
                      marginLeft: "20px",
                    }}
                  ></div>
                </h3>

                <h3
                  style={{
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    margin: "40px, 0",
                    marginTop: "40px",
                    marginBottom: "40px",
                  }}
                >
                  {" "}
                  {subj3}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginRight: "20px",
                      marginLeft: "20px",
                    }}
                  ></div>
                </h3>

                <h3
                  style={{
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    margin: "40px, 0",
                    marginTop: "40px",
                    marginBottom: "40px",
                  }}
                >
                  {" "}
                  {subj4}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginRight: "20px",
                      marginLeft: "20px",
                    }}
                  ></div>
                </h3>

                <h3
                  style={{
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    margin: "40px, 0",
                    marginTop: "40px",
                    marginBottom: "40px",
                  }}
                >
                  {" "}
                  {subj5}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginRight: "20px",
                      marginLeft: "20px",
                    }}
                  ></div>
                </h3>
              </div>
            ))}

            <div>
              <div
                style={{
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  margin: "40px, 0",
                  marginTop: "40px",
                  marginBottom: "40px",
                  marginRight: "40px",
                }}
              >
                <Input
                  disabled={toggle}
                  style={{ margin: "0 5px", width: "80px" }}
                  type="number"
                  placeholder="Attention: 0 - 5"
                  value={attention}
                  onChange={(e) => {
                    setAttention(e.target.value);
                  }}
                />
                <Input
                  disabled={toggle}
                  style={{ margin: "0 5px", width: "80px" }}
                  type="number"
                  placeholder="Well Understood: 0 - 5"
                  value={wellUnderstood}
                  onChange={(e) => {
                    setWellUnderstood(e.target.value);
                  }}
                />
                <Input
                  disabled={toggle}
                  style={{ margin: "0 5px", width: "80px" }}
                  type="number"
                  placeholder="Interesting: 0 - 5"
                  value={interesting}
                  onChange={(e) => {
                    setInteresting(e.target.value);
                  }}
                />
                <Button
                  type="primary"
                  onClick={() => {
                    postRating1();
                    onToggle();
                    console.log("this is one");
                  }}
                >
                  Submit
                </Button>
              </div>

              <div
                style={{
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  margin: "40px, 0",
                  marginTop: "40px",
                  marginBottom: "40px",
                  marginRight: "40px",
                }}
              >
                <Input
                  disabled={toggle}
                  style={{ margin: "0 5px", width: "80px" }}
                  type="number"
                  placeholder="Attention: 0 - 5"
                  value={attention2}
                  onChange={(e) => {
                    setAttention2(e.target.value);
                  }}
                />
                <Input
                  disabled={toggle}
                  style={{ margin: "0 5px", width: "80px" }}
                  type="number"
                  placeholder="Well Understood: 0 - 5"
                  value={wellUnderstood2}
                  onChange={(e) => {
                    setWellUnderstood2(e.target.value);
                  }}
                />
                <Input
                  disabled={toggle}
                  style={{ margin: "0 5px", width: "80px" }}
                  type="number"
                  placeholder="Interesting: 0 - 5"
                  value={interesting2}
                  onChange={(e) => {
                    setInteresting2(e.target.value);
                  }}
                />
                <Button
                  type="primary"
                  onClick={() => {
                    postRating2();
                    onToggle();
                    console.log("this is one");
                  }}
                >
                  Submit
                </Button>
              </div>

              <div
                style={{
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  margin: "40px, 0",
                  marginTop: "40px",
                  marginBottom: "40px",
                  marginRight: "40px",
                }}
              >
                <Input
                  disabled={toggle}
                  style={{ margin: "0 5px", width: "80px" }}
                  type="number"
                  placeholder="Attention: 0 - 5"
                  value={attention3}
                  onChange={(e) => {
                    setAttention3(e.target.value);
                  }}
                />
                <Input
                  disabled={toggle}
                  style={{ margin: "0 5px", width: "80px" }}
                  type="number"
                  placeholder="Well Understood: 0 - 5"
                  value={wellUnderstood3}
                  onChange={(e) => {
                    setWellUnderstood3(e.target.value);
                  }}
                />
                <Input
                  disabled={toggle}
                  style={{ margin: "0 5px", width: "80px" }}
                  type="number"
                  placeholder="Interesting: 0 - 5"
                  value={interesting3}
                  onChange={(e) => {
                    setInteresting3(e.target.value);
                  }}
                />
                <Button
                  type="primary"
                  onClick={() => {
                    postRating3();
                    onToggle();
                    console.log("this is one");
                  }}
                >
                  Submit
                </Button>
              </div>

              <div
                style={{
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  margin: "40px, 0",
                  marginTop: "40px",
                  marginBottom: "40px",
                  marginRight: "40px",
                }}
              >
                <Input
                  disabled={toggle}
                  style={{ margin: "0 5px", width: "80px" }}
                  type="number"
                  placeholder="Attention: 0 - 5"
                  value={attention4}
                  onChange={(e) => {
                    setAttention4(e.target.value);
                  }}
                />
                <Input
                  disabled={toggle}
                  style={{ margin: "0 5px", width: "80px" }}
                  type="number"
                  placeholder="Well Understood: 0 - 5"
                  value={wellUnderstood4}
                  onChange={(e) => {
                    setWellUnderstood4(e.target.value);
                  }}
                />
                <Input
                  disabled={toggle}
                  style={{ margin: "0 5px", width: "80px" }}
                  type="number"
                  placeholder="Interesting: 0 - 5"
                  value={interesting4}
                  onChange={(e) => {
                    setInteresting4(e.target.value);
                  }}
                />
                <Button
                  type="primary"
                  onClick={() => {
                    postRating4();
                    onToggle();
                    console.log("this is one");
                  }}
                >
                  Submit
                </Button>
              </div>

              <div
                style={{
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  margin: "40px, 0",
                  marginTop: "40px",
                  marginBottom: "40px",
                  marginRight: "40px",
                }}
              >
                <Input
                  disabled={toggle}
                  style={{ margin: "0 5px", width: "80px" }}
                  type="number"
                  placeholder="Attention: 0 - 5"
                  value={attention5}
                  onChange={(e) => {
                    setAttention5(e.target.value);
                  }}
                />
                <Input
                  disabled={toggle}
                  style={{ margin: "0 5px", width: "80px" }}
                  type="number"
                  placeholder="Well Understood: 0 - 5"
                  value={wellUnderstood5}
                  onChange={(e) => {
                    setWellUnderstood5(e.target.value);
                  }}
                />
                <Input
                  disabled={toggle}
                  style={{ margin: "0 5px", width: "80px" }}
                  type="number"
                  placeholder="Interesting: 0 - 5"
                  value={interesting5}
                  onChange={(e) => {
                    setInteresting5(e.target.value);
                  }}
                />
                <Button
                  type="primary"
                  disabled={toggle}
                  onClick={() => {
                    postRating5();
                    onToggle();
                    console.log("I am Pressed");
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;

// {myCourse2.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj1}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj2}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj3}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj4}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj5}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>
//   </div>
// ))}

// {myCourse3.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj1}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj2}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj3}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj4}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj5}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>
//   </div>
// ))}

// {myCourse4.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj1}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj2}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj3}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj4}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj5}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>
//   </div>
// ))}

// {myCourse5.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj1}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj2}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj3}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj4}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj5}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>
//   </div>
// ))}

// {myCourse6.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {subj1}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj2}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj3}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj4}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj5}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       >
//         <Input
//           style={{ margin: "0 5px", width: "80px" }}
//           type="number"
//           placeholder="Attention: 0 - 5"
//           value={attention}
//           onChange={(e) => {
//             setAttention(e.target.value);
//           }}
//         />
//         <Input
//           style={{ margin: "0 5px", width: "80px" }}
//           type="number"
//           placeholder="Well Understood: 0 - 5"
//           value={wellUnderstood}
//           onChange={(e) => {
//             setWellUnderstood(e.target.value);
//           }}
//         />
//         <Input
//           style={{ margin: "0 5px", width: "80px" }}
//           type="number"
//           placeholder="Interesting: 0 - 5"
//           value={interesting}
//           onChange={(e) => {
//             setInteresting(e.target.value);
//           }}
//         />
//         <Button
//           type="primary"
//           onClick={(id) => {
//             console.log(id);
//             console.log("I am pressed");
//           }}
//         >
//           Submit
//         </Button>
//       </div>
//     </h3>
//   </div>
// ))}

// {myCourse7.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj1}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj2}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj3}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj4}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj5}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>
//   </div>
// ))}

// {myCourse8.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj1}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj2}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj3}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj4}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>

//     <h3
//       style={{
//         height: "40px",
//         display: "flex",
//         alignItems: "center",
//         margin: "40px, 0",
//         marginTop: "40px",
//         marginBottom: "40px",
//       }}
//     >
//       {" "}
//       {subj5}
//       <div
//         style={{
//           width: "60%",
//           display: "flex",
//           flexDirection: "row",
//           marginRight: "20px",
//           marginLeft: "20px",
//         }}
//       ></div>
//     </h3>
//   </div>
// ))}

// <center>
// {myCourse1.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3> {subj1} </h3>
//     <h3> {subj2} </h3>
//     <h3> {subj3} </h3>
//     <h3> {subj4} </h3>
//     <h3> {subj5} </h3>
//   </div>
// ))}

// {myCourse2.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3> {subj1} </h3>
//     <h3> {subj2} </h3>
//     <h3> {subj3} </h3>
//     <h3> {subj4} </h3>
//     <h3> {subj5} </h3>
//   </div>
// ))}

// {myCourse3.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3> {subj1} </h3>
//     <h3> {subj2} </h3>
//     <h3> {subj3} </h3>
//     <h3> {subj4} </h3>
//     <h3> {subj5} </h3>
//   </div>
// ))}

// {myCourse4.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3> {subj1} </h3>
//     <h3> {subj2} </h3>
//     <h3> {subj3} </h3>
//     <h3> {subj4} </h3>
//     <h3> {subj5} </h3>
//   </div>
// ))}

// {myCourse5.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3> {subj1} </h3>
//     <h3> {subj2} </h3>
//     <h3> {subj3} </h3>
//     <h3> {subj4} </h3>
//     <h3> {subj5} </h3>
//   </div>
// ))}

// {myCourse6.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3> {subj1} </h3>
//     <h3> {subj2} </h3>
//     <h3> {subj3} </h3>
//     <h3> {subj4} </h3>
//     <h3> {subj5} </h3>
//   </div>
// ))}

// {myCourse7.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3> {subj1} </h3>
//     <h3> {subj2} </h3>
//     <h3> {subj3} </h3>
//     <h3> {subj4} </h3>
//     <h3> {subj5} </h3>
//   </div>
// ))}

// {myCourse8.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3> {subj1} </h3>
//     <h3> {subj2} </h3>
//     <h3> {subj3} </h3>
//     <h3> {subj4} </h3>
//     <h3> {subj5} </h3>
//   </div>
// ))}

// {myCourse9.map(({ id, subj1, subj2, subj3, subj4, subj5 }) => (
//   <div key={id}>
//     <h3> {subj1} </h3>
//     <h3> {subj2} </h3>
//     <h3> {subj3} </h3>
//     <h3> {subj4} </h3>
//     <h3> {subj5} </h3>
//   </div>
// ))}
// </center>

// <Input
// style={{ margin: "0 5px", width: "80px" }}
// type="number"
// placeholder="Attention: 0 - 5"
// value={attention}
// onChange={(e) => {
//   setAttention(e.target.value);
// }}
// />
// <Input
// style={{ margin: "0 5px", width: "80px" }}
// type="number"
// placeholder="Well Understood: 0 - 5"
// value={wellUnderstood}
// onChange={(e) => {
//   setWellUnderstood(e.target.value);
// }}
// />
// <Input
// style={{ margin: "0 5px", width: "80px" }}
// type="number"
// placeholder="Interesting: 0 - 5"
// value={interesting}
// onChange={(e) => {
//   setInteresting(e.target.value);
// }}
// />
// <Button type="primary">Submit</Button>
