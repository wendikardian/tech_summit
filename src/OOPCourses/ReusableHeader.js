import React from 'react'
import { Layout } from 'antd';
const { Header } = Layout;

export function ReusableHeader() {
  return (
    <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <h1
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "2rem",
            margin: "0 auto",
          }}
        >
          Object Oriented Programming With Python
        </h1>
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
      </Header>
  )
}
