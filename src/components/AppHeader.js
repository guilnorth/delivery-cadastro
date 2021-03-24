import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

export default function AppHeader() {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu className="menu" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Link 1</Menu.Item>
        <Menu.Item key="2">Link 2</Menu.Item>
        <Menu.Item key="3">Link 3</Menu.Item>
      </Menu>
    </Header>
  );
}
