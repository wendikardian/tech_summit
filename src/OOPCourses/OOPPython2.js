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

const OppPython2 = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const pythonCode = `
class Mahasiswa:
  def __init__(self, nama, usia):
      self._nama = nama  # Atribut dengan underscore (_) adalah konvensi bahwa ini adalah atribut privat.
      self._usia = usia

  # Metode getter untuk nama
  @property
  def nama(self):
      return self._nama

  # Metode setter untuk nama
  @nama.setter
  def nama(self, new_nama):
      if len(new_nama) >= 3:
          self._nama = new_nama
      else:
          print("Nama harus memiliki setidaknya 3 karakter.")

  # Metode getter untuk usia
  @property
  def usia(self):
      return self._usia

  # Metode setter untuk usia
  @usia.setter
  def usia(self, new_usia):
      if new_usia >= 0:
          self._usia = new_usia
      else:
          print("Usia tidak boleh negatif.")

`;
const code2 = `
# Membuat objek Mahasiswa
mahasiswa1 = Mahasiswa("John", 20)

# Mengakses atribut dengan property
print(mahasiswa1.nama)  # Output: John
print(mahasiswa1.usia)  # Output: 20

# Mengubah nama dengan property
mahasiswa1.nama = "Doe"  # Nama tidak akan diubah karena kurang dari 3 karakter

# Mengubah usia dengan property
mahasiswa1.usia = -1  # Usia tidak akan diubah karena negatif

`
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
              Property
            </Title>
            <hr />
            <Paragraph>
              Property adalah salah satu fitur yang kuat dalam bahasa
              pemrograman Python yang memungkinkan Anda untuk mengontrol akses
              ke atribut objek. Property memungkinkan Anda untuk mendefinisikan
              metode khusus yang akan dipanggil saat atribut objek dibaca (get)
              atau diubah (set). Ini memberi Anda kemampuan untuk
              mengimplementasikan logika tambahan saat mengakses atau mengubah
              nilai atribut, seolah-olah Anda mengakses atau mengubah atribut
              langsung, tetapi dengan kontrol tambahan.
            </Paragraph>
            <Paragraph>
             <b> Konsep Property: </b>
             <br />
            - Property digunakan untuk menghindari akses
              langsung ke atribut objek dalam kasus di mana Anda ingin
              menerapkan logika atau validasi tambahan. 
              <br />- Property memungkinkan
              Anda untuk mendefinisikan metode getter dan setter untuk atribut
              objek. 
              <br /> - Getter digunakan saat Anda membaca (mengakses) nilai
              atribut, sedangkan setter digunakan saat Anda mengubah nilai
              atribut.
            </Paragraph>
            <Image
              width={500}
              src="https://miro.medium.com/v2/1*Vqdv2XFX93k9P3tYIZ57fg.gif"
            />
            <br></br>
            <hr />
            <Text>
              <b>Code Example</b>
            </Text>{" "}
            <SyntaxHighlighter language="python" style={vscDarkPlus}>
              {pythonCode}
            </SyntaxHighlighter>
            <hr />
            <Text>
              <b>Code Example to access Property</b>
            </Text>{" "}
            <SyntaxHighlighter language="python" style={vscDarkPlus}>
              {code2}
            </SyntaxHighlighter>
          </Content>
        </Layout>
      </Content>
      <ReusableFooter />
    </Layout>
  );
};
export default OppPython2;
