import React from "react";
import "./Trusted.css";
import logo from "../../Peter/image/apple.png";
import mc from "../../Peter/image/mc.png";
import fc from "../../Peter/image/fc.png";
import google from "../../Peter/image/google.png";
import bbc from "../../Peter/image/bbc.png";
import bd from "../../Peter/image/bd.png";

const Trusted = () => {
  return (
    <div className="bgColr">
      <center>
        <h2>Trusted by leading brands</h2>
      </center>
      <center>
        <div className="trust">
          <img className="brands" alt="logo" src={logo} />
          <img className="brands" alt="logo" src={google} />
          <img className="brands" alt="logo" src={fc} />
          <img className="brands" alt="logo" src={mc} />
          <img className="brands" alt="logo" src={bd} />
          <img className="brands" alt="logo" src={bbc} />
        </div>
      </center>
    </div>
  );
};

export default Trusted;
