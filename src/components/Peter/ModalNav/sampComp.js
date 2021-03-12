import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

const sampComp = () => {
  const history = useHistory;
  return (
    <div>
      <center>Sample Component</center>
      <Button
        onClick={() => {
          history.push("/");
        }}
      >
        Go back
      </Button>
    </div>
  );
};

export default sampComp;
