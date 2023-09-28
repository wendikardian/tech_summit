import React from 'react'
import { Layout } from 'antd';
const { Footer } = Layout;

export  function ReusableFooter() {
  return (
    <Footer
        style={{
          textAlign: "center",
        }}
      >
        Tech Summit ©2023 Created by Wendi Kardian
      </Footer>
  )
}
