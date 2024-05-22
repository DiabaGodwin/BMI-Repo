import React from 'react'
import {
    DashboardOutlined,
    UserOutlined,
    VideoCameraOutlined,
    LogoutOutlined,
    MoneyCollectOutlined ,
  } from '@ant-design/icons';
  import { Button, Layout as AntLayout, Menu, theme } from 'antd';
import { Link } from '@nextui-org/react';
import { Key } from 'lucide-react';
const SideNavBar = () => {

  return (
    <>
        <div  >
            <h1 className="text-slate-50 inline-block align-middle text-xs p-3">BM-INVESTMENT</h1>
        </div>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" 
        // defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link href="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link href="/customers">Acounts</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<DashboardOutlined />}>
            <Link href="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<MoneyCollectOutlined />}>
            <Link href="/loans">Loans</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<MoneyCollectOutlined />}>
            <Link href="/withdrawals">Withdrawals</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<MoneyCollectOutlined />}>
            <Link href="/deposites">Deposites</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<LogoutOutlined />}>
            <Link href="">Logout</Link>
          </Menu.Item>
        </Menu>
    </>
  )
}

export default SideNavBar
