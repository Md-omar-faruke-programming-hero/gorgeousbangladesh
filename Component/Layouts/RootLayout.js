/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Layout, Menu, Button, theme } from "antd";
import Image from "next/image";
import mamuIcon from "/public/image/manuIcon.png";
import logo from "/public/image/logo.png";
import user from "/public/image/user.png";
import dashboard from "/public/image/dashboard.png";
import users from "/public/image/users.png";
import supplier from "/public/image/supplier.png";
import stock from "/public/image/stock.png";
import purchase from "/public/image/pur.png";
import invoice from "/public/image/inv.png";
import ret from "/public/image/ret.png";
import stoc from "/public/image/stoc.png";
import bank from "/public/image/bank.png";
import acc from "/public/image/acc.png";
import rep from "/public/image/rep.png";
import hum from "/public/image/hum.png";
import tax from "/public/image/tax.png";
import ser from "/public/image/ser.png";
import serc from "/public/image/sarc.png";
import appli from "/public/image/app.png";
import auto from "/public/image/auto.png";
import SearchInput from "./SearchInput";
import Admin from "./Admin";

function getItem(label, key, icon, children) {
  return {
    label,
    key,
    icon,
    children,
  };
}

const { Header, Sider, Content, Footer } = Layout;

const RootLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} width={250} theme="light">
        <div className="demo-logo-vertical" />
        <Image
          style={{
            padding: "10px 20px",
            marginBottom: "20px",
          }}
          width="100%"
          src={logo}
          alt="manuicon"
        />
        <div
          style={{
            padding: "0px 20px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "100%",
              backgroundColor: "#64C8BC",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image width={16} height={16} src={user} alt="manuicon" />
          </div>
          {!collapsed && (
            <div style={{ lineHeight: "10px", marginLeft: "3px" }}>
              <p>admin user</p>
              <small>admin@gmail.com</small>
            </div>
          )}
        </div>
        <div style={{ backgroundColor: "#F5f5f5", height: "2px", marginBottom: "20px" }}></div>

        <Menu
          theme="light"
          mode="vertical"
          defaultSelectedKeys={["2"]}
          items={[
            {
              icon: <Image width={16} height={16} src={dashboard} alt="manuicon" />,
              label: "Dashboard",
              key: "1",
            },

            getItem(
              "Customer",
              "2",
              <Image width={16} height={16} src={users} alt="manuicon" />,
              []
            ),
            getItem(
              "Supplier",
              "3",
              <Image width={16} height={16} src={supplier} alt="manuicon" />,
              []
            ),
            getItem(
              "Stock Medicine",
              "4",
              <Image width={16} height={16} src={stock} alt="manuicon" />,
              []
            ),
            getItem(
              "Purchase",
              "5",
              <Image width={16} height={16} src={purchase} alt="manuicon" />,
              []
            ),
            getItem(
              "Invoice",
              "6",
              <Image width={16} height={16} src={invoice} alt="manuicon" />,
              []
            ),
            getItem("Return", "7", <Image width={16} height={16} src={ret} alt="manuicon" />, []),
            getItem("Stock", "8", <Image width={16} height={16} src={stoc} alt="manuicon" />, []),
            getItem("Bank", "9", <Image width={16} height={16} src={bank} alt="manuicon" />, []),
            getItem(
              "Accounts",
              "10",
              <Image width={16} height={16} src={acc} alt="manuicon" />,
              []
            ),
            getItem("Report", "11", <Image width={16} height={16} src={rep} alt="manuicon" />, []),
            getItem(
              "Human Resource",
              "12",
              <Image width={16} height={16} src={hum} alt="manuicon" />,
              []
            ),
            getItem("Tax", "13", <Image width={16} height={16} src={tax} alt="manuicon" />, []),
            getItem("Service", "14", <Image width={16} height={16} src={ser} alt="manuicon" />, []),
            getItem("Search", "15", <Image width={16} height={16} src={serc} alt="manuicon" />, []),
            getItem(
              "Application Setting",
              "16",
              <Image width={16} height={16} src={appli} alt="manuicon" />,
              []
            ),
            getItem(
              "Autoupdate",
              "17",
              <Image width={16} height={16} src={auto} alt="manuicon" />,
              []
            ),

            getItem("", ""),
            getItem("", ""),
            getItem("", ""),
            {
              label: "Help info",
            },
          ]}
        />
      </Sider>
      <Layout direction="vertical">
        <Header
          style={{
            padding: 0,
            background: "#FFFFFF",
          }}
        >
          <div
            style={{
              margin: "0px 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex" }}>
              <Button
                type="text"
                icon={
                  collapsed ? (
                    <Image width={24} height={24} src={mamuIcon} alt="manuicon" />
                  ) : (
                    <Image width={24} height={24} src={mamuIcon} alt="manuicon" />
                  )
                }
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
              <SearchInput></SearchInput>
            </div>
            <div>
              <div>
                <Admin></Admin>
              </div>
            </div>
          </div>
        </Header>
        <div
          style={{
            margin: "34px 12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    color: "#424E79",
                    fontWeight: 600,
                    fontSize: "18px",
                    marginRight: "60px",
                  }}
                >
                  Stock Medicine
                </p>
                <small style={{ fontSize: "12px" }}>
                  <span
                    style={{
                      color: "#6554C0",
                    }}
                  >
                    Dashboard &gt;
                  </span>{" "}
                  <span>Medicines</span>
                </small>
              </div>
            </div>
            <div>
              <Button style={{ backgroundColor: "#6554C0", color: "white" }}>+Add Medicine</Button>
            </div>
          </div>
        </div>

        <Content
          style={{
            margin: "24px 16px",
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: "30px",
            overflow: "hidden",
          }}
        >
          {children}
        </Content>
        <Footer
          style={{
            margin: "0",

            minHeight: 60,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Copyright@2022 banglatech, Design with by Powell Team</p>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default RootLayout;
