import React from "react";
import Curriculum from "../components/Peter/Curriculum/Curriculum";
import CurriculumFiles from "../components/Peter/Curriculum/CurriculumFiles";
import SampleHoder from "../components/Peter/Curriculum/SampleHoder";
import HeaderViewer from "../HeaderViewer";

const CoursesPaage = () => {
  return (
    <div
      style={{
        backgroundColor: "#EDF8FF",
      }}
    >
      <br />

      <Curriculum />
      <br />
      <CurriculumFiles />
      <br />

      <br />
      <br />
    </div>
  );
};

export default CoursesPaage;
