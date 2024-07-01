"use client";

import { Button, Layout as AntLayout, Menu, theme } from "antd";
import { useState } from "react";
import Link from "next/link";
import SignIn from "@/components/Login/SignIn";

export default function Home() {
  const { Header, Sider, Content } = AntLayout;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      {/* <div classNameName="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <h1 classNameName="text-2xl font-sans font-bold text-blue-700">Welcome to signup page</h1>
      <Link href="/dashboard" >
        Click to Proced to Dashboard
      </Link>
      </div> */}
      <SignIn/>
      
    </>
  );
}
