import React from "react";
import "antd/dist/antd.css";

import Controls from "components/Controls";

import "./styles.css";

export default function App() {
  return (
    <div>
      <div className="head">
        <h1>Speeclarity</h1>
      </div>
      <div>
        <Controls />
      </div>
    </div>
  );
}
