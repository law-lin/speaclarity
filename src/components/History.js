import React, { useEffect, useState } from 'react';
import { Drawer, Collapse, Button } from 'antd';
import Highlighter from 'react-highlight-words';
import fillerWords from 'constants/fillerWords';

const { Panel } = Collapse;
const History = ({ showHistory, onClose }) => {
  const [transcripts, setTranscripts] = useState([]);

  useEffect(() => {
    setTranscripts(JSON.parse(localStorage.getItem('records')));
  }, [showHistory]);

  const handleDelete = (i) => {
    const list = [...transcripts];
    list.splice(i, 1);
    setTranscripts(list);
    localStorage.setItem('records', JSON.stringify(list));
  };

  return (
    <Drawer
      title={
        <h2 style={{ color: '#ffffff', fontWeight: 700 }}>
          Transcript History
        </h2>
      }
      width={640}
      placement='right'
      onClose={onClose}
      visible={showHistory}
      headerStyle={{ backgroundColor: '#430780' }}
      drawerStyle={{ backgroundColor: '#b481c9' }}
    >
      <Collapse>
        {transcripts &&
          transcripts.map((record, i) => {
            let date = new Date(record.createdAt);
            let dd = String(date.getDate()).padStart(2, '0');
            let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = date.getFullYear();
            date = mm + '/' + dd + '/' + yyyy;
            const header = `${date}: Filler Count: ${record.fillerCount}, Unique Filler Count: ${record.uniqueFillerCount}`;
            return (
              <Panel showArrow={false} header={header}>
                <h3>Transcript:</h3>
                <Highlighter
                  searchWords={fillerWords}
                  textToHighlight={record.transcript}
                  highlightStyle={{ backgroundColor: 'yellow' }}
                />
                <h3>Recording:</h3>
                <audio
                  className='audio'
                  controls='controls'
                  src={record.audioUrl ? record.audioUrl : ''}
                />
                <Button
                  type='danger'
                  onClick={() => handleDelete(i)}
                  style={{ display: 'block' }}
                >
                  Delete Transcript
                </Button>
              </Panel>
            );
          })}
      </Collapse>
    </Drawer>
  );
};

export default History;
