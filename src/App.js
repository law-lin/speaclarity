import React from "react";
import "antd/dist/antd.css";

import Controls from "components/Controls";

import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <div className="head">
        <h1 style={{ color: "white" }}>Speeclarity</h1>
      </div>
      <div className="main">
        <Controls />
      </div>
    </div>
  );
}
