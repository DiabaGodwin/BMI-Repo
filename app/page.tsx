"use client";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout as AntLayout, Menu, theme } from "antd";
import SideNavBar from "@/components/navItems/SideNavBar";
import { useState } from "react";

export default function Home() {
  const { Header, Sider, Content } = AntLayout;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div>
      <AntLayout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <SideNavBar />
        </Sider>
        <AntLayout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
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
          </Header>
          <Content
            className="bg-green-400"
            style={{
              margin: "24px 16px",
              padding: 24,
              width: "100%",
              height: "100vh",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div className="bg-blue-400">
              <h1>Dashboard</h1>
              <ul>
                <li>welcome</li>
                <li>about</li>
                <li>contact</li>
                <li>login</li>
                <li>footer</li>
              </ul>
            </div>
          </Content>
        </AntLayout>
      </AntLayout>
    </div>
  );
}
