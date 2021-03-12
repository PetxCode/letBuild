import { Button } from "antd";
import React from "react";
import "./HeaderView.css";

const HeaderView = () => {
  return (
    <div className="bg">
      <div className="bg__lay">
        <section>
          <h2>Accelerate your Child's Learning With a Paid Plan</h2>
          <p>Self-paced learning for ages 5-18+</p>
          <Button
            className="sectionButton"
            style={{
              color: "red",
              fontSize: "20px",
              height: "50px",
              // backgroundColor:
            }}
          >
            Get your School involve
          </Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="wave"
          >
            <path
              fill="#edf8ff"
              fill-opacity="1"
              d="M0,128L48,138.7C96,149,192,171,288,176C384,181,480,171,576,181.3C672,192,768,224,864,208C960,192,1056,128,1152,101.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </section>
      </div>
    </div>
  );
};

export default HeaderView;
