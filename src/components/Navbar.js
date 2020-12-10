import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { createBrowserHistory } from 'history';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export class Navbar extends Component {
    render() {
        return (
            <div>


    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        {/* <Link to=""><Menu.Item key="1">Home</Menu.Item></Link>
        <Link to="/About"><Menu.Item key="1">About</Menu.Item></Link>
        <Link to="/Contact"><Menu.Item key="1">Contact</Menu.Item></Link> */}
      </Menu>
    </Header>

    
            </div>
        )
    }
}

export default Navbar;
