import React, { useState } from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Button, Layout, Menu, Breadcrumb } from "antd";
import Controls from "components/Controls";

const { Header, Content, Sider } = Layout;

export default function App() {
  const [showHistory, setShowHistory] = useState(false);
  return (
    <Layout className="app">
      <Header className="head">
        <span style={{ color: "white", fontSize: "36px", fontWeight: 800 }}>
          Speaclarity
        </span>
        <Button onClick={() => setShowHistory(true)}>View History</Button>
      </Header>
      <Content className="main">
        <Controls />
      </Content>
    </Layout>
  );
}
