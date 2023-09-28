import React from "react";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import { Image } from "antd";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { SiderComponents } from "./SiderComponents";
import { ReusableFooter } from "./ReusableFooter";
import { ReusableHeader } from "./ReusableHeader";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import pboImg from '../images/PBO Modules.png';
const { Header, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const OOPPython5 = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
 
  return (
    <Layout>
      <ReusableHeader />
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
          }}
        >
          <SiderComponents />
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            <Title
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "2rem",
                margin: "0 auto",
                color: "black",
              }}
            >
              Challenge ! 
            </Title>
            <hr />
            <Image
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                }}

              width={1000}
              src={pboImg}
            />
          </Content>
        </Layout>
      </Content>
      <ReusableFooter />
    </Layout>
  );
};
export default OOPPython5;
