// components/Layout.tsx
'use client'
import React, { useState } from 'react';
import { Button, Layout as AntLayout, Menu, theme } from 'antd';
import '../app/globals.css'
import AntdRegistry from '@ant-design/nextjs-registry/lib/AntdRegistry';
import { NextUIProvider } from '@nextui-org/system';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <html lang="en">
    <body >
    {/* <NextUIProvider> */}
        <AntdRegistry>{children}</AntdRegistry>
    {/* </NextUIProvider> */}
    </body>
    </html>

  );
};

export default AppLayout;
