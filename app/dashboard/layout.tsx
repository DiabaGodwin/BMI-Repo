// components/Layout.tsx
'use client'
import React, { useState } from 'react';
import { Button, Layout as AntLayout, Menu, theme } from 'antd';
import '../globals.css'
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import SideNavBar from "@/components/navItems/SideNavBar";
import { Footer } from 'antd/es/layout/layout';
import FooterContent from '@/components/footer/footer';
import TopNav from '@/components/navItems/TopNav';


const DashBoardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { Header, Sider, Content } = AntLayout;
  const [collapsed, setCollapsed] = useState(false);
  return (

    <AntLayout>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <SideNavBar />
    </Sider>
    <AntLayout>
      <Header style={{ padding: 0, background: colorBgContainer }}>
      <div className='grid grid-cols-12 gap-3 grid-rows-1'>
            
            <div className="col-span-1">
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: "16px",
                        width: 64,
                        height: 64,
                    }}
                />
            </div>
            <div className="col-span-11"><TopNav /></div>
       
        </div>
      </Header>
      <Content
        className="bg-green-400"
        style={{
          margin: "24px 16px",
          padding: 24,
          width: "100%",
          height: "1200px",
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
       {children}
      </Content>
      <Footer>
            <FooterContent />
        </Footer>
    </AntLayout>
  </AntLayout>
                                                                                                                                                   
 );
};

export default DashBoardLayout;
