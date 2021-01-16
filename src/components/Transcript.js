import React from "react";
import Highlighter from "react-highlight-words";
import fillerWords from "constants/fillerWords";

const Transcript = ({ transcript }) => {
  return (
    <div className="transcript">
      <Highlighter
        searchWords={fillerWords}
        textToHighlight={transcript}
        highlightStyle={{ backgroundColor: "yellow" }}
      />
    </div>
  );
};

export default Transcript;
