import React from "react";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const Redesign = () => {
  return (
    <div>
      <>
        <Sider>Sider</Sider>

        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </>
      ,
    </div>
  );
};

export default Redesign;
