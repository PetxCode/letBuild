import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ chng }) => (chng ? "row-reverse" : "row")};
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 200px;
  /* background-color: dodgerblue; */
  display: flex;
  align-items: center;
  margin: 20px 20px;
`;

export const Content = styled.div`
  margin-top: 20px;
`;

export const Holder = styled.div`
  margin-top: 20px;
  width: 300px;
  height: 400px;
  /* background-color: red; */
  display: flex;
  justify-content: flex-start;
  text-align: left;
  flex-direction: column;
`;
