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

const OppPython = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const pythonCode = `
class Mobil:
  def __init__(self, merk, warna):
      self.merk = merk
      self.warna = warna

# Membuat objek dari class Mobil
mobil1 = Mobil("Toyota", "Merah")
mobil2 = Mobil("Honda", "Biru")
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
              Pengantar OOP
            </Title>
            <hr />
            <Paragraph>
              Objek adalah salah satu konsep dasar dalam OOP yang mewakili
              entitas konkret atau abstrak dalam program komputer. Objek
              merupakan instance dari sebuah class, yang merupakan blueprint
              atau cetak biru untuk menciptakan objek. Objek memiliki atribut
              (data) dan metode (fungsi) yang mendefinisikan karakteristik dan
              perilaku objek tersebut.
            </Paragraph>
            <Paragraph>
              Objek adalah salah satu konsep utama dalam paradigma pemrograman
              berorientasi objek (OOP). Ini adalah wujud konkret atau abstrak
              dari entitas dalam dunia nyata yang diwakili dalam program
              komputer. Objek memiliki dua komponen utama: state (keadaan) dan
              behavior (perilaku).
            </Paragraph>
            <Image
              width={500}
              src="https://debug.to/?qa=blob&qa_blobid=16290859093178933120"
            />
            <br></br>
            <hr />
            <Text>
              <b>State (Keadaan)</b>
            </Text>{" "}
            <Paragraph>
              State menggambarkan atribut atau properti dari objek yang
              mempengaruhi karakteristik atau keadaan objek tersebut.
              Atribut-atribut ini dapat berupa data atau informasi yang terkait
              dengan objek. Sebagai contoh: Jika kita memiliki objek "Mobil,"
              atribut-atributnya bisa mencakup warna, merk, model, nomor plat,
              kecepatan saat ini, jumlah penumpang, dll. Untuk objek "Pegawai,"
              atribut-atributnya bisa mencakup nama, alamat, tanggal lahir,
              jabatan, gaji, dll. Atribut-atribut ini memungkinkan objek untuk
              mempertahankan informasi tentang dirinya sendiri dan berinteraksi
              dengan objek lain dalam program.
            </Paragraph>
            <br></br>
            <hr />
            <Text>
              <b>Behavior (Perilaku):</b>
            </Text>{" "}
            <Paragraph>
              Behavior adalah kumpulan metode atau fungsi yang terkait dengan
              objek. Metode-metode ini mendefinisikan tindakan atau operasi yang
              dapat dilakukan oleh objek tersebut. Perilaku objek mencerminkan
              apa yang objek dapat lakukan dalam konteks aplikasi. Contoh-contoh
              perilaku objek termasuk: Untuk objek "Mobil," perilaku bisa
              mencakup metode "Maju," "Mundur," "Berhenti," "Ganti Gigi," dan
              lain-lain. Untuk objek "Pegawai," perilaku bisa mencakup metode
              "Bekerja," "Cuti," "Perbarui Informasi Pribadi," dan sebagainya.
              Perilaku objek didefinisikan dalam class, dan objek dari class
              dapat menggunakan metode-metode tersebut untuk berinteraksi dengan
              objek lain atau mengubah keadaannya sendiri.
            </Paragraph>
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
export default OppPython;
