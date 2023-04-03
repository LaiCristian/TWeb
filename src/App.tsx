import React, { useState } from 'react';

import './App.css';
import Login from './Login';

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className='background'>
    <Layout className="site-layout">
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header className="header_c" />
          <div className="container">
            <div className="card_cont">
              <div className='card'>
                <div className='c1'></div>
                <div className='textShow'>Calculatoare și Rețele</div>
              </div>
              <div className='card'>
                <div className='c2'></div>
                <div className='textShow'>Microelectronică</div>
              </div>
              <div className='card'>
                <div className='c3'></div>
                <div className='textShow'>Ingineria Software</div>
              </div>
              <div className='card'>
                <div className='c4'></div>
                <div className='textShow'>Ingineria Biomedicală</div>
              </div>
            </div>
            <Login/> 
            <div className="card_cont">
            <div className='card'>
                <div className='c5'></div>
                <div className='textShow'>Securitatea Informațională</div>
              </div>
              <div className='card'>
                <div className='c6'></div>
                <div className='textShow'>Tehnologia Informației</div>
              </div>
              <div className='card'>
                <div className='c7'></div>
                <div className='textShow'>Managementul Informației</div>
              </div>
              <div className='card'>
                <div className='c8'></div>
                <div className='textShow'>Robotică și Mecanotronică</div>
              </div>
            </div> 
          </div>
        <Footer className='footer_c'><span className='footer_txt'>Shadow Design ©2023 Created by Lai Cristian</span></Footer>
      </Layout>
    </Layout>
    </div>
  );
};

export default App;