import { Menu } from "antd";
import React from "react";
import { BsFolder2Open } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { VscRequestChanges } from "react-icons/vsc";
import { useLocation, useNavigate } from "react-router-dom";

const SideNavs = () => {
  const pathname = useLocation().pathname;
  const router = useNavigate();

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

      <Menu.Item
        onClick={() => router("/client/submit-request")}
        className={`mt-3 ${
          pathname === "/client/submit-request"
            ? "sidebar-navs-active"
            : "sidebar-navs"
        }`}
        icon={<VscRequestChanges />}
      >
        Submit Request
      </Menu.Item>

      <Menu.Item
        onClick={() => router("/client/open-request")}
        className={`mt-2 ${
          pathname === "/client/open-request"
            ? "sidebar-navs-active"
            : "sidebar-navs"
        }`}
        icon={<BsFolder2Open />}
      >
        Open Requests
      </Menu.Item>

      <Menu.Item className="sidebar-navs">Managers</Menu.Item>
      <Menu.Item className="sidebar-navs">Agents</Menu.Item>
      <Menu.Item className="sidebar-navs">Clients</Menu.Item>
    </Menu>
  );
};

export default SideNavs;
