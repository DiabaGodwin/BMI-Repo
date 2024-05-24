"use client";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout as AntLayout, Menu, theme } from "antd";
import SideNavBar from "@/components/navItems/SideNavBar";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const { Header, Sider, Content } = AntLayout;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>

      <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <h1 className="text-2xl font-sans font-bold text-blue-700">Welcome to signup page</h1>
      <Link href="/dashboard" >
        Click to Proced to Dashboard
      </Link>
          {/* <div className="bg-slate-500 w-1/3 h-1/2">

          </div> */}
      </div>
      
    </>
  );
}
