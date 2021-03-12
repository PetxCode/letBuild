import { Button, Modal } from "antd";
import React, { useState } from "react";
import { LaptopOutlined } from "@ant-design/icons";
import "./Curriculum.css";
import pix from "../image/9.png";
import SampleHoder from "./SampleHoder";
import { app } from "../../../firebase";
// import ModalNav from "../ModalNav/ModalNav";
import { useHistory } from "react-router-dom";
import sampComp from "../ModalNav/sampComp";
import ModalNav from "../ModalNav/ModalNav";
import MUModal from "../ModalNav/MUmodal";
import { v4 as uuid } from "uuid";

const db = app.firestore().collection("peter");

const CurriculumFiles = () => {
  const hist = useHistory();
  const [visible, setVisible] = useState(true);
  const [beginer, setBeginer] = useState(false);
  const [intermediate, setIntermediate] = useState(false);
  const [advance, setAdvance] = useState(false);

  const [advanceData, setAdvanceData] = useState([]);
  const [intermediateData, setIntermediateData] = useState([]);
  const [beginersData, setBeginersData] = useState([]);

  const [data, setData] = useState([]);

  const getData = async () => {
    await db.onSnapshot((snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: uuid() });
      });
      setData(items);
    });
  };

  const getAdvanceData = async () => {
    await db.orderBy("ALevel").onSnapshot((snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: uuid() });
      });
      setAdvanceData(items);
    });
  };

  const getBeginersData = async () => {
    await db.orderBy("BLevel").onSnapshot((snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: uuid() });
      });
      setBeginersData(items);
    });
  };

  const getIntermediateData = async () => {
    await db.orderBy("ILevel").onSnapshot((snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: uuid() });
      });
      setIntermediateData(items);
    });
  };
  // console.log(advanceData);

  React.useEffect(() => {
    getData();
    getAdvanceData();
    getIntermediateData();
    getBeginersData();
  }, []);

  return (
    <div className="courseData">
      <div className="agesButtons">
        <center className="ages">
          <Button
            onClick={(e) => {
              setBeginer(true);
              setIntermediate(false);
              setAdvance(false);
              console.log("You just Click Beginers");
              console.log("beginer: " + beginer);
              console.log("intermediate: " + intermediate);
              console.log("advance: " + advance);
            }}
            // type="primary"
          >
            Ages 5-7
          </Button>
          <Button
            onClick={(e) => {
              setBeginer(false);
              setIntermediate(true);
              setAdvance(false);
              console.log("You just Click Intermediate");
              console.log("beginer: " + beginer);
              console.log("intermediate: " + intermediate);
              console.log("advance: " + advance);
            }}
            type="primary"
          >
            Ages 8-13
          </Button>
          <Button
            onClick={(e) => {
              setBeginer(false);
              setIntermediate(false);
              setAdvance(true);
              console.log("You just Click Advance");
              console.log("beginer: " + beginer);
              console.log("intermediate: " + intermediate);
              console.log("advance: " + advance);
            }}
            type="primary"
            danger
          >
            Ages 14+
          </Button>
        </center>
      </div>

      {beginer ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {beginersData.map(({ id, course, avatar, level, description }) => (
            <div
              key={id}
              className="card"
              style={{
                background: "white",
                width: "300px",
                height: "390px",
                margin: "0px 10px",
                marginTop: "20px",
                borderRadius: "5px",
              }}
            >
              <div
                className="courseData"
                onClick={(id) => {
                  setVisible(true);
                  // hist.push("/modal");
                }}
              >
                <div className="course__hover">
                  <img src={avatar} alt="pix1" className="image" />
                  <h3>{course} </h3>
                  <div className="course__side">
                    <p> {level}</p>
                    <div className="course__sideInner">
                      <LaptopOutlined />
                      <p>web</p>
                    </div>
                  </div>
                  <p className="course__p">{description}</p>
                </div>
              </div>
              {visible ? (
                <MUModal
                  id={id}
                  level={level}
                  description={description}
                  avatar={avatar}
                  course={course}
                />
              ) : null}
            </div>
          ))}
        </div>
      ) : intermediate ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {intermediateData.map(
            ({ id, course, avatar, level, description }) => (
              <div
                key={id}
                className="card"
                style={{
                  background: "white",
                  width: "300px",
                  height: "390px",
                  margin: "0px 10px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="courseData"
                  onClick={(id) => {
                    setVisible(true);
                    // hist.push("/modal");
                  }}
                >
                  <div className="course__hover">
                    <img src={avatar} alt="pix1" className="image" />
                    <h3>{course} </h3>
                    <div className="course__side">
                      <p> {level}</p>
                      <div className="course__sideInner">
                        <LaptopOutlined />
                        <p>web</p>
                      </div>
                    </div>
                    <p className="course__p">{description}</p>
                  </div>
                </div>
                {visible ? (
                  <MUModal
                    id={id}
                    level={level}
                    description={description}
                    avatar={avatar}
                    course={course}
                  />
                ) : null}
              </div>
            )
          )}
        </div>
      ) : advance ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {advanceData.map(({ id, course, avatar, level, description }) => (
            <div
              key={id}
              className="card"
              style={{
                background: "white",
                width: "300px",
                height: "390px",
                margin: "0px 10px",
                marginTop: "20px",
                borderRadius: "5px",
              }}
            >
              <div
                className="courseData"
                onClick={(id) => {
                  setVisible(true);
                  // hist.push("/modal");
                }}
              >
                <div className="course__hover">
                  <img src={avatar} alt="pix1" className="image" />
                  <h3>{course} </h3>
                  <div className="course__side">
                    <p> {level}</p>
                    <div className="course__sideInner">
                      <LaptopOutlined />
                      <p>web</p>
                    </div>
                  </div>
                  <p className="course__p">{description}</p>
                </div>
              </div>
              {visible ? (
                <MUModal
                  id={id}
                  level={level}
                  description={description}
                  avatar={avatar}
                  course={course}
                />
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {data.map(({ id, course, avatar, level, description }) => (
            <div
              key={id}
              className="card"
              style={{
                background: "white",
                width: "300px",
                height: "390px",
                margin: "0px 10px",
                marginTop: "20px",
                borderRadius: "5px",
              }}
            >
              <div
                className="courseData"
                onClick={(id) => {
                  setVisible(true);
                  // hist.push("/modal");
                }}
              >
                <div className="course__hover">
                  <img src={avatar} alt="pix1" className="image" />
                  <h3>{course} </h3>
                  <div className="course__side">
                    <p> {level}</p>
                    <div className="course__sideInner">
                      <LaptopOutlined />
                      <p>web</p>
                    </div>
                  </div>
                  <p className="course__p">{description}</p>
                </div>
              </div>

              {visible ? (
                <MUModal
                  id={id}
                  level={level}
                  description={description}
                  avatar={avatar}
                  course={course}
                />
              ) : null}
            </div>
          ))}
        </div>
      )}

      <br />
    </div>
  );
};

export default CurriculumFiles;

// <Modal
// title="Modal 1000px width"
// centered
// visible={visible}
// onOk={() => setVisible(false)}
// onCancel={() => setVisible(false)}
// width={1000}
// >
// <p>some contents...</p>
// <p>some contents...</p>
// <p>some contents...</p>
// </Modal>

// <div className="samp">
//                 <SampleHoder />
//                 <SampleHoder />
//               </div>

// <div className="course__container">THe Card</div>

// {data.map(({ id, course, avatar, level, description }) => (
//   <div
//     key={id}
//     className="card"
//     style={{
//       // background: "red",
//       width: "300px",
//       height: "350px",
//       margin: "0px 10px",
//       marginTop: "20px",
//     }}
//   >
//     <div className="courseData">
//       <div className="course__hover">
//         <img src={avatar} alt="pix1" className="image" />
//         <h3>{course} </h3>
//         <div className="course__side">
//           <p> {level}</p>
//           <div className="course__sideInner">
//             <LaptopOutlined />
//             <p>web</p>
//           </div>
//         </div>
//         <p className="course__p">{description}</p>
//       </div>
//     </div>
//   </div>
// ))}

// <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//         }}
//       >
//         {data.map(({ id, course, avatar, level, description }) => (
//           <div
//             key={id}
//             className="card"
//             style={{
//               // background: "red",
//               width: "300px",
//               height: "350px",
//               margin: "0px 10px",
//               marginTop: "20px",
//             }}
//           >
//             <div className="courseData">
//               <div className="course__hover">
//                 <img src={avatar} alt="pix1" className="image" />
//                 <h3>{course} </h3>
//                 <div className="course__side">
//                   <p> {level}</p>
//                   <div className="course__sideInner">
//                     <LaptopOutlined />
//                     <p>web</p>
//                   </div>
//                 </div>
//                 <p className="course__p">{description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

// <Button
//   onClick={(e) => {
//     setBeginer(false);
//     setIntermediate(false);
//     setAdvance(false);
//     console.log("You just Click Advance");
//     console.log("beginer: " + beginer);
//     console.log("intermediate: " + intermediate);
//     console.log("advance: " + advance);
//   }}
// >
//   All
// </Button>
