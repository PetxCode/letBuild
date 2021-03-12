import React from "react";
import Curriculum from "./Curriculum/Curriculum";
import CurriculumFiles from "./Curriculum/CurriculumFiles";
import SampleHoder from "./Curriculum/SampleHoder";
import HeaderView from "./Header/HeaderView";
import Reverse from "./Reverse/Reverse";
// import code from "../Peter/image/code.png";
import ReverseHolder from "./Reverse/ReverseHolder";
import Trusted from "./Trusted/Trusted";

const CurriculumHolder = () => {
  return (
    <div
      style={{
        background: "#edf8ff",
      }}
    >
      <HeaderView />
      <Curriculum />
      <br />
      <CurriculumFiles />
      <br />
      <SampleHoder />
      <br />
      <br />

      <Trusted />
      <br />
      <br />
      <ReverseHolder />
      <br />
      <br />
    </div>
  );
};

export default CurriculumHolder;
