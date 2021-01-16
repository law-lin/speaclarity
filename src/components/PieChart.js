import React from "react";
import CanvasJSReact from "canvasjs/canvasjs.react";
import fillerWords from "constants/fillerWords";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChart = ({ transcript }) => {
  let data = [];

  let wordCounts = {};
  transcript.split(" ").forEach((word) => {
    wordCounts[word] = wordCounts[word] ? ++wordCounts[word] : 1;
  });

  for (let key of Object.keys(wordCounts)) {
    if (fillerWords.includes(key)) {
      let dataPoint = {
        y: wordCounts[key],
        label: key
      };
      data.push(dataPoint);
    }
  }

  const options = {
    theme: "dark2",
    data: [
      {
        type: "pie",
        legendText: "{label}",
        indexLabelFontSize: 12,
        showInLegend: "true",
        dataPoints: data
      }
    ]
  };
  return <CanvasJSChart options={options} />;
};

export default PieChart;
