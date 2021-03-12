import React from "react";
import "./Sample.css";
import { MessageOutlined } from "@ant-design/icons";

import { DivHolder } from "./SampleStyle.js";

const Measure = ({
  bgColor,
  text1,
  img2,
  img1,
  text2,
  age,
  text3,
  text4,
  details,
  pix1,
  pix11,

  colr,
}) => {
  return (
    <div>
      <div className="sample__container">
        <DivHolder
          colr={colr}
          className="sample__container1"
          style={{
            boxShadow: "0 5px 7px -2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <br />
          <h3 style={{ color: "white" }}>{age}</h3>
          <p> {details} </p>
        </DivHolder>

        <div className="imgColor">
          <div className="img1">
            <img
              src={pix11}
              alt="img2"
              className="circle"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="img2">
            <img
              className="circle"
              src={pix1}
              alt="img1"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <div className="bullets">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "100px",
            }}
          >
            <div
              style={{
                marginBottom: "10px",
                display: "flex",
              }}
            >
              <div className="dot" />
              <p>{text1}</p>
            </div>
            <div
              style={{
                marginBottom: "10px",
                display: "flex",
              }}
            >
              <div className="dot" />
              <p>{text2}</p>
            </div>
            <div
              style={{
                marginBottom: "10px",
                display: "flex",
              }}
            >
              <div className="dot" />
              <p>{text3}</p>
            </div>
            <div
              style={{
                marginBottom: "10px",
                display: "flex",
              }}
            >
              <div className="dot" />
              <p>{text4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Measure;
