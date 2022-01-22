import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./Menubar.css";
import { Button, Menu } from "antd";
import {
  FiChevronLeft,
  FiChevronRight,
  FiUsers,
  FiTrendingUp,
  FiGrid,
} from "react-icons/fi";

const MenuItem = Menu.Item;
const { SubMenu } = Menu;

const Menubar = ({ collapsed, toggleCollapsed }) => {
  const history = useHistory();

  const goto = (value) => {
    let prefix = "/user";
    history.push(prefix + value);
  };

  return (
    <div className="menubar">
      <Button onClick={toggleCollapsed}>
        {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
      </Button>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        inlineCollapsed={collapsed}
      >
        <MenuItem key="1" icon={<FiGrid />}>
          Dashboards
        </MenuItem>
        <SubMenu key="2" title="HR Admin" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/user_types")}>User Type</MenuItem>
          <MenuItem onClick={() => goto("/users")}>Users</MenuItem>
        </SubMenu>
        <MenuItem
          onClick={() => goto("/sales")}
          key="3"
          icon={<FiTrendingUp />}
        >
          Sales
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Menubar;
