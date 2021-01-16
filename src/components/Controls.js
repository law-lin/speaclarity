import React, { useState } from "react";
// Recording
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";
import { ReactMic } from "react-mic";
// Icons
import { Row, Col, Space } from "antd";
import { FaMicrophone, FaStopCircle } from "react-icons/fa";
import { BiReset } from "react-icons/bi";
// Components
import Transcript from "components/Transcript";
import PieChart from "components/PieChart";
import WordCounts from "components/WordCounts";

const Controls = () => {
  const [listening, setListening] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState();
  const { transcript, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  const handleStartListening = () => {
    setListening(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleStopListening = () => {
    setListening(false);
    SpeechRecognition.stopListening();
  };

  const onStop = (recordedBlob) => {
    setRecordedBlob(recordedBlob);
  };

  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            className="button"
            onClick={handleStartListening}
            style={{ borderColor: listening ? "red" : "none" }}
          >
            <FaMicrophone size="25" />
          </button>
          <button className="button stop" onClick={handleStopListening}>
            <FaStopCircle size="25" />
          </button>
          <button className="button" onClick={resetTranscript}>
            <BiReset size="25" />
          </button>
        </div>
        <div>
          <ReactMic
            record={listening}
            visualSetting="frequencyBars"
            className="visualizer"
            onStop={onStop}
            strokeColor="#ff00c3"
            backgroundColor="#222032"
          />
        </div>
        <Space
          direction="vertical"
          style={{ display: "flex", alignItems: "center" }}
        >
          <h2 style={{ color: "#FFFFFF" }}>Recorded Audio</h2>
          <audio
            className="audio"
            controls="controls"
            src={recordedBlob ? recordedBlob.blobURL : ""}
          />
        </Space>
        <Row gutter={16}>
          <Col span={11}>
            <Transcript transcript={transcript} />
          </Col>
          <Col span={2} style={{ display: "flex", justifyContent: "center" }}>
            <div className="divider" />
          </Col>
          <Col span={11}>
            <PieChart transcript={transcript} />
          </Col>
        </Row>
        <div>
          <WordCounts transcript={transcript} />
        </div>
      </Space>
    </>
  );
};

export default Controls;
