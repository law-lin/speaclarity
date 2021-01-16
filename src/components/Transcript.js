import React from "react";
import Highlighter from "react-highlight-words";
import fillerWords from "constants/fillerWords";

const Transcript = ({ transcript }) => {
  return (
    <Highlighter
      searchWords={fillerWords}
      textToHighlight={transcript}
      highlightStyle={{ backgroundColor: "yellow" }}
    />
  );
};

export default Transcript;
