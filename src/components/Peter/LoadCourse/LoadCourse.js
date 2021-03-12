import { Button } from "antd";
import React, { useState, useEffect } from "react";
import HeaderView from "../Header/HeaderView";
import { useHistory } from "react-router-dom";
import { app } from "../../../firebase";
import { v4 as uuid } from "uuid";

const db = app.firestore().collection("peter");
const LoadCourse = () => {
  const hist = useHistory();
  const [level, setLevel] = useState("");
  const [course, setCourse] = useState("");
  const [description, setDescription] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const [data, setData] = useState([]);

  // const CourseUpload = async (e) => {
  //   const file = e.target.files[0];
  //   const storageRef = app.storage().ref();
  //   const fileRef = storageRef.child(file.name);
  //   await fileRef.put(file);
  //   setFileUrl(await fileRef.getDownloadURL());
  // };

  const AvatarCourseUpload = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    avatarUrl(await fileRef.getDownloadURL());
  };

  const UploadCourseToFirebase = async () => {
    await db.doc().set({
      date: Date.now(),
      course,
      level,
      description,
      icon: await fileUrl,
      avatar: await avatarUrl,
      id: uuid(),
    });
  };

  return (
    <div>
      <HeaderView />
      <center>UpLoad Courses</center>
      <br />
      <center>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "400px",
          }}
        >
          <div
            style={{
              display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              // height: "60px",
            }}
          >
            <label>Avatar</label>
            <input
              style={{
                width: "100%",
                paddingLeft: "10px",
                marginBottom: "10px",
              }}
              type="file"
              placeholder="Course avatar"
              value={avatarUrl}
              onChange={(e) => {
                setAvatarUrl(e.target.value);
              }}
              onClick={() => {
                AvatarCourseUpload();
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              // height: "60px",
            }}
          >
            <br />
          </div>
          <input
            style={{
              width: "100%",
              paddingLeft: "10px",
              marginBottom: "10px",
            }}
            placeholder="Course Title"
            value={course}
            onChange={(e) => {
              setCourse(e.target.value);
            }}
          />
          <input
            style={{
              width: "100%",
              paddingLeft: "10px",
              marginBottom: "10px",
            }}
            placeholder="Course description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <input
            style={{
              width: "100%",
              paddingLeft: "10px",
              marginBottom: "10px",
            }}
            placeholder="Course level"
            value={level}
            onChange={(e) => {
              setLevel(e.target.value);
            }}
          />
          <div
            style={{
              width: "300px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button
              style={{
                width: "80px",
                backgroundColor: "green",
                color: "white",
              }}
              onClick={(e) => {
                UploadCourseToFirebase();
                hist.push("/");
              }}
            >
              Submit
            </Button>
            <Button
              style={{
                width: "80px",
                backgroundColor: "red",
                color: "white",
              }}
              onClick={(e) => {
                hist.push("/");
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
      </center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default LoadCourse;
