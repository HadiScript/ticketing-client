import { Menu } from "antd";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";

const SideNavs = () => {
  return (
    <Menu
      theme="dark"
      style={{
        backgroundColor: "transparent",
      }}
      defaultSelectedKeys={["1"]}
      mode="inline"
    >
      <Menu.Item className="sidebar-navs" icon={<MdOutlineDashboard />}>
        Dashboard
      </Menu.Item>
      <Menu.Item className="sidebar-navs">Managers</Menu.Item>
      <Menu.Item className="sidebar-navs">Agents</Menu.Item>
      <Menu.Item className="sidebar-navs">Clients</Menu.Item>
    </Menu>
  );
};

export default SideNavs;
