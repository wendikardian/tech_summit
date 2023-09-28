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

const OOPPython3 = () => {
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
              Method
            </Title>
            <hr />
            <Paragraph>
              Method adalah fungsi yang terkait dengan objek dalam bahasa
              pemrograman Python. Mereka adalah cara utama untuk
              mengimplementasikan perilaku objek dalam program. Method
              beroperasi pada atribut objek dan dapat melakukan tindakan,
              mengubah keadaan objek, atau mengembalikan hasil yang berkaitan
              dengan objek tersebut.
            </Paragraph>
            <Paragraph>
           <b>≈ Konsep Method: </b ><br />

- Method adalah fungsi yang terasosiasi dengan sebuah objek. <br />
- Mereka digunakan untuk mengimplementasikan perilaku dan operasi yang terkait dengan objek.<br />
- Method didefinisikan dalam class dan berinteraksi dengan atribut objek.<br />
            </Paragraph>
            <Image
              width={500}
              src="https://techvidvan.com/tutorials/wp-content/uploads/sites/2/2020/06/Message-Passing.jpg"
            />
            <br></br>
            <hr />
            <Text>
              <b>Code Example</b>
            </Text>{" "}
            <SyntaxHighlighter language="python" style={vscDarkPlus}>
              {pythonCode}
            </SyntaxHighlighter>
          </Content>
        </Layout>
      </Content>
      <ReusableFooter />
    </Layout>
  );
};
export default OOPPython3;
