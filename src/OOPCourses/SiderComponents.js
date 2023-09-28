import React from "react";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
// icons code
import { CodeFilled } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

export function SiderComponents() {
    const navigate = useNavigate();
    const {
        token: { colorBgContainer },
      } = theme.useToken();
  return (
    <Sider
      style={{
        background: colorBgContainer,
        minHeight: "100vh",
      }}
      width={200}
    >
      {/* <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{
        height: '100%',
      }}
      items={items2}
    /> */}
      <Menu mode="vertical" theme="dark">
        <Menu.Item
          key="1"
          icon={<CodeFilled />}
          onClick={() => navigate("/courses/oop-python/1")}
        >
            Pengantar OOP
        </Menu.Item>
        <Menu.Item key="2" icon={<CodeFilled />

        }
         onClick={() => navigate("/courses/oop-python/2")}
        >
        Property
        </Menu.Item>
        <Menu.Item key="3" icon={<CodeFilled />

        }
         onClick={() => navigate("/courses/oop-python/3")}
        >
        Method
        </Menu.Item>
        <Menu.Item key="4" icon={<CodeFilled />

        }
         onClick={() => navigate("/courses/oop-python/4")}
        >
            Inheritence
        </Menu.Item>
        <Menu.Item key="5" icon={<CodeFilled />

        }
         onClick={() => navigate("/courses/oop-python/5")}
        >
            Case Study
        </Menu.Item>
        <Menu.Item key="6" icon={<CodeFilled />

        }
         onClick={() => navigate("/courses/oop-python/6")}
        >
            Code Practice
        </Menu.Item>
        {/* create dropdown menu */}
        {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu> */}
      </Menu>
    </Sider>
  );
}
