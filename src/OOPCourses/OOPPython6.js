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

const { Header, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const OOPPython6 = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const pythonCode = `
class Kucing:
  def __init__(self, nama, umur):
      self.nama = nama
      self.umur = umur

  # Method untuk menggonggong
  def miauw(self):
      print(f"{self.nama} meong-meong!")

  # Method untuk mengubah umur
  def set_umur(self, umur_baru):
      if umur_baru >= 0:
          self.umur = umur_baru
      else:
          print("Umur tidak boleh negatif.")

  # Method untuk menampilkan informasi
  def info(self):
      print(f"Nama: {self.nama}, Umur: {self.umur} tahun")

# Membuat objek Kucing
kucing1 = Kucing("Whiskers", 3)

# Memanggil method untuk menggonggong
kucing1.miauw()  # Output: Whiskers meong-meong!

# Memanggil method untuk mengubah umur
kucing1.set_umur(4)

# Memanggil method untuk menampilkan informasi
kucing1.info()  # Output: Nama: Whiskers, Umur: 4 tahun

`;
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
              Code Practice (Playground )
            </Title>
            <hr />
            <iframe src="https://www.programiz.com/python-programming/online-compiler/" width="100%" height="700" />
          </Content>
        </Layout>
      </Content>
      <ReusableFooter />
    </Layout>
  );
};
export default OOPPython6;
