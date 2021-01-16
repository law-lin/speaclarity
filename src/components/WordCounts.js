import React from "react";
import { Table } from "antd";
import fillerWords from "constants/fillerWords";

const columns = [
  {
    title: "Word",
    dataIndex: "word"
  },
  {
    title: "Frequency",
    dataIndex: "frequency",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.frequency - b.frequency
  }
];
const WordCounts = ({ transcript }) => {
  let data = [];
  let wordCounts = {};
  transcript.split(" ").forEach((word) => {
    wordCounts[word] = wordCounts[word] ? ++wordCounts[word] : 1;
  });
  for (let key of Object.keys(wordCounts)) {
    if (key !== "") {
      let dataPoint = {
        key,
        word: key,
        frequency: wordCounts[key]
      };
      data.push(dataPoint);
    }
  }

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      className="table"
      rowClassName={(word, index) =>
        fillerWords.includes(word.word) ? "isFiller" : ""
      }
      scroll={{ y: 445 }}
    />
  );
};

export default WordCounts;
