import React, { useState } from "react";
// Recording
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";
import { ReactMic } from "react-mic";
// Icons
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
    SpeechRecognition.startListening();
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
      <div>
        <button onClick={handleStartListening}>
          <FaMicrophone />
        </button>
        <button onClick={handleStopListening}>
          <FaStopCircle />
        </button>
        <button onClick={resetTranscript}>
          <BiReset />
        </button>
        <ReactMic record={listening} onStop={onStop} type="audio/webm" />
      </div>
      <audio
        controls="controls"
        src={recordedBlob ? recordedBlob.blobURL : ""}
      />
      <div>{listening ? <p>Started</p> : <p>Stopped</p>}</div>
      <div>
        <Transcript transcript={transcript} />
      </div>
      <div>
        <PieChart transcript={transcript} />
      </div>
      <div>
        <WordCounts transcript={transcript} />
      </div>
    </>
  );
};

export default Controls;
