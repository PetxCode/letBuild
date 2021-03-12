import React from "react";
import { Holder, ImageContainer, Container, Content } from "./ReverseStyle.js";
import code from "../../Peter/image/code.png";
import "./Revserve.css";

const Reverse = ({
  chng,
  title1,
  title2,
  title3,
  detail1,
  detail2,
  detail3,
  img,
  headerLine,
  detailLine,
}) => {
  return (
    <div>
      <center>
        <h2> {headerLine} </h2>
        <p>{detailLine}</p>
      </center>
      <center>
        <Container chng={chng}>
          <ImageContainer>
            <img
              src={img}
              alt="code"
              style={{
                width: "100%",
                objectFit: "contain",
              }}
            />
          </ImageContainer>
          <Content>
            <Holder>
              <h2> {title1} </h2>
              <p>{detail1}</p>
              <h2> {title2} </h2>
              <p>{detail2}</p>
              <h2>{title3}</h2>
              <p>{detail3}</p>
            </Holder>
          </Content>
        </Container>
      </center>
    </div>
  );
};

export default Reverse;
