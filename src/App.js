import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './styles.css';
import { Button, Layout, Menu, Breadcrumb } from 'antd';
import Controls from 'components/Controls';
import History from 'components/History';

const { Header, Content, Sider, Footer } = Layout;

export default function App() {
  const [showHistory, setShowHistory] = useState(false);
  return (
    <Layout className='app'>
      <Header className='head'>
        <span style={{ color: 'white', fontSize: '36px', fontWeight: 800 }}>
          Speaclarity
        </span>
        <Button onClick={() => setShowHistory(true)}>View History</Button>
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
