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
import Result from "components/Result";

const Controls = () => {
  const [listening, setListening] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState(null);
  const [visible, setVisible] = useState(false);
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
    setVisible(true);
    SpeechRecognition.stopListening();
  };

  const onStop = (recordedBlob) => {
    setRecordedBlob(recordedBlob);
  };

  const handleReset = () => {
    resetTranscript();
    setRecordedBlob(null);
  };

  return (
    <>
      <Space direction="vertical" style={{ width: "100%" }} size={20}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {listening ? (
            <div className="pulse">
              <div className="outline" />
              <div className="outline" id="delayed" />
              <button
                onClick={handleStartListening}
                className="button"
                disabled={listening}
              >
                <FaMicrophone size="25" />
              </button>
            </div>
          ) : (
            <button onClick={handleStartListening} className="button">
              <FaMicrophone size="25" />
            </button>
          )}
          <button
            className="button stop"
            onClick={handleStopListening}
            disabled={!listening}
            style={{ cursor: !listening ? "not-allowed" : "pointer" }}
          >
            <FaStopCircle size="25" />
          </button>
          <button
            className="button reset"
            onClick={handleReset}
            disabled={listening}
            style={{ cursor: listening ? "not-allowed" : "pointer" }}
          >
            <BiReset size="25" />
          </button>
          <Result
            transcript={transcript}
            visible={visible}
            onCancel={() => setVisible(false)}
          />
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
          <Col span={11} style={{ maxHeight: "435px" }}>
            <h2 style={{ color: "#ffffff", fontSize: "24px", fontWeight: 700 }}>
              Live Transcript
            </h2>
            <Transcript transcript={transcript} />
          </Col>
          <Col span={2} style={{ display: "flex", justifyContent: "center" }}>
            <div className="divider" />
          </Col>
          <Col span={11}>
            <h2 style={{ color: "#ffffff", fontSize: "24px", fontWeight: 700 }}>
              Filler Word Frequencies Pie Chart
            </h2>
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
