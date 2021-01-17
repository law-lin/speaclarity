import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './styles.css';
import { Button, Layout, Menu, Breadcrumb } from 'antd';
import Controls from 'components/Controls';
import History from 'components/History';
import Joyride from 'react-joyride';

const { Header, Content, Sider, Footer } = Layout;

export default function App() {
  const [showHistory, setShowHistory] = useState(false);
  const [steps] = useState([
    {
      target: '.button',
      content: 'Click this to start recording your beautiful voice!',
    },
    {
      target: '.button.stop',
      content: 'Click this to stop recording!',
    },
    {
      target: '.button.reset',
      content: 'Click this to reset the transcript!',
    },
    {
      target: '#view-history',
      content:
        'Once you are done recording, your transcript and recording will be saved! Click here to view your history.',
    },
  ]);

  return (
    <Layout className='app'>
      <Joyride
        continuous={true}
        scrollToFirstStep={true}
        showProgress={true}
        showSkipButton={true}
        steps={steps}
      />
      <Header className='head'>
        <span style={{ color: 'white', fontSize: '36px', fontWeight: 800 }}>
          Speaclarity
        </span>
        <Button id='view-history' onClick={() => setShowHistory(true)}>
          View History
        </Button>
        <History
          showHistory={showHistory}
          onClose={() => setShowHistory(false)}
        />
      </Header>
      <Content className='main'>
        <Controls />
      </Content>
      <Footer style={{ backgroundColor: '#131214', color: '#ffffff' }}>
        Made by{' '}
        <a href='https://www.linkedin.com/in/lawrencelin101/'>Lawrence Lin</a>{' '}
        and Leo Pan
      </Footer>
    </Layout>
  );
}
