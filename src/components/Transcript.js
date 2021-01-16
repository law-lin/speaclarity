import React, { useEffect } from "react";
import Highlighter from "react-highlight-words";
import fillerWords from "constants/fillerWords";

const Transcript = ({ transcript }) => {
  // Scroll transcript automatically
  useEffect(() => {
    document.getElementById("scroll").scrollTop = document.getElementById(
      "transcript"
    ).offsetHeight;
  }, [transcript]);

  return (
    <div id="scroll">
      <div id="transcript">
        <Highlighter
          searchWords={fillerWords}
          textToHighlight={transcript}
          highlightStyle={{ backgroundColor: "yellow" }}
        />
      </div>
    </div>
  );
};

export default Transcript;
