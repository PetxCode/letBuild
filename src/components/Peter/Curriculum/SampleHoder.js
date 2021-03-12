import React from "react";
import Measure from "./Measure";
import "./Sample.css";
import pic1 from "../../Peter/image/pick4.jpeg";
import pic11 from "../../Peter/image/lap.jpeg";

import pic111 from "../../Peter/image/craft.jpg";
import pic1111 from "../../Peter/image/pick3.jpg";

import pic11111 from "../../Peter/image/srt.png";
import pic111111 from "../../Peter/image/pick2.jpg";

const SampleHoder = () => {
  return (
    <div>
      <center>
        <h2>Proven Path To Coding Confidence and Learning</h2>
        <p>Measurable results, assessments and parent dashboard</p>
      </center>

      <center>
        <div className="sample">
          <div
            className="cardSample"
            onClick={() => {
              console.log("I am");
            }}
          >
            <Measure
              pix1={pic11111}
              pix11={pic111111}
              colr="#62B14C"
              bgColor="yellow"
              age="Ages 5-7"
              details="Tap to Code with Voice Instruction"
              text1="Get started with code! "
              text2="Solve logic problems"
              text3="Create simple apps"
              text4="Master coding basics"
            />
          </div>

          <div
            className="cardSample"
            onClick={() => {
              console.log("I am");
            }}
          >
            <Measure
              pix1={pic111}
              pix11={pic1111}
              colr="#DE6F46"
              bbclr="lightgray"
              age="Ages 8-13"
              details="Drag and Drop code Blocks"
              text1="Build apps and games "
              text2="Explore STEM subjects"
              text3="Design Minecraft mods"
              text4="Controlrobots and drone"
            />
          </div>

          <div
            className="cardSample"
            onClick={() => {
              console.log("I am");
            }}
          >
            <Measure
              pix1={pic11}
              pix11={pic1}
              colr="#7561A7"
              age="Ages 14+"
              details="Learn real-world coding!"
              text1=" JavaScript and Python"
              text2="Web dev with HTML/CSS"
              text3="Learn data structures"
              text4=" Prep for Comp sci"
            />
          </div>
        </div>
      </center>
    </div>
  );
};

export default SampleHoder;
