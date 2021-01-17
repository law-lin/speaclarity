import React from 'react';
import fillerWords from 'constants/fillerWords';
import { Modal, Button } from 'antd';

const Result = ({ transcript, visible, onCancel }) => {
  const handleCancel = () => {
    onCancel();
  };

  let fillerCount = 0;
  let uniqueFillerCount = 0;
  let wordCounts = {};
  transcript.split(' ').forEach((word) => {
    wordCounts[word] = wordCounts[word] ? ++wordCounts[word] : 1;
  });

  for (let key of Object.keys(wordCounts)) {
    if (fillerWords.includes(key)) {
      fillerCount = fillerCount + wordCounts[key];
      uniqueFillerCount++;
    }
  }

  let title = '';
  let message = '';

  if (transcript.length === 0) {
    title = 'Nothing was said';
    message =
      "You didn't say anything! If you did, then check to see if your audio input is working correctly.";
  } else if (fillerCount > 20) {
    title = 'A lot of catching up to do';
    message = `You used a total of ${fillerCount} filler words and ${uniqueFillerCount} different filler words in your speech. Try speaking slower or think about your words in advance.`;
  } else if (fillerCount > 10) {
    title = "You're getting there";
    message = `You used a total of ${fillerCount} filler words and ${uniqueFillerCount} different filler words in your speech. You are an average speaker.`;
  } else if (fillerCount > 0) {
    title = 'Good!';
    message = `You used a total of ${fillerCount} filler words and ${uniqueFillerCount} different filler words in your speech. You're doing great!`;
  } else {
    title = 'Perfect!';
    message =
      'You managed to not use any filler words! You are a great speaker!';
  }

  return (
    <Modal
      title={title}
      visible={visible}
      onCancel={handleCancel}
      footer={[
        <Button key='okButton' type='primary' onClick={handleCancel}>
          OK
        </Button>,
      ]}
    >
      <p>{message}</p>
    </Modal>
  );
};

export default Result;
