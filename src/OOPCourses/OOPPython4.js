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

const OOPPython4 = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const pythonCode = `
# Definisikan superclass (class induk)
class Hewan:
    def __init__(self, nama):
        self.nama = nama

    def bersuara(self):
        pass

# Definisikan subclass (class anak) yang mewarisi dari Hewan
class Kucing(Hewan):
    def bersuara(self):
        return f"{self.nama} meong-meong!"

# Definisikan subclass (class anak) yang mewarisi dari Hewan
class Anjing(Hewan):
    def bersuara(self):
        return f"{self.nama} gong-gong!"

# Membuat objek dari subclass
kucing = Kucing("Whiskers")
anjing = Anjing("Buddy")

# Memanggil method dari superclass melalui subclass
print(kucing.nama)  # Output: Whiskers
print(kucing.bersuara())  # Output: Whiskers meong-meong!

print(anjing.nama)  # Output: Buddy
print(anjing.bersuara())  # Output: Buddy gong-gong!

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
              Inheritence
            </Title>
            <hr />
            <Paragraph>
            Inheritance (pewarisan) adalah salah satu konsep utama dalam paradigma pemrograman berorientasi objek (OOP). Dalam konsep ini, sebuah class dapat mewarisi atribut dan metode dari class lain yang disebut class induk atau superclass. Class yang mewarisi sifat-sifat ini disebut subclass atau child class. Inheritance memungkinkan penggunaan kembali kode, pengorganisasian hierarki class, dan pemodelan hubungan "is-a."
            </Paragraph>
            <Paragraph>
           <b>≈ Konsep Inheritance: </b ><br />
           - Superclass (Class Induk atau Parent Class): Class yang memiliki atribut dan metode yang akan diwarisi oleh subclass. Ini adalah class yang lebih umum. <br />

- Subclass (Child Class atau Derived Class): Class yang mewarisi atribut dan metode dari superclass. Ini adalah class yang lebih spesifik.<br />

- Subclass dapat menambahkan atribut dan metode tambahan atau menggantikan (override) metode yang diwarisi dari superclass.<br />
            </Paragraph>
            <Image
              width={500}
              src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190501121513/inheritance.png"
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
export default OOPPython4;
