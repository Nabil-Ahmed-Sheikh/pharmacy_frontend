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
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} inlineCollapsed={collapsed}>
        <MenuItem key="1" icon={<FiGrid />}>
          Dashboards
        </MenuItem>


        <SubMenu key="2" title="HR Admin" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/user_types")}>User Type</MenuItem>
          <MenuItem onClick={() => goto("/users")}>Users</MenuItem>
        </SubMenu>


        <SubMenu key="3" title="Content" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/customer_list")}>Customer List</MenuItem>
          <MenuItem onClick={() => goto("/supplier_list")}>Supplier List</MenuItem>
        </SubMenu>

        
        <SubMenu key="4" title="Medicine" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/add_medicine")}>Add Medicine</MenuItem>
          <MenuItem onClick={() => goto("/medicine_list")}>Medicine List</MenuItem>
        </SubMenu>

                
        <SubMenu key="5" title="Purchases" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/add_purchases")}>Add Purchases</MenuItem>
          <MenuItem onClick={() => goto("/purchases_list")}>Purchases List</MenuItem>
        </SubMenu>
                
        <SubMenu key="6" title="Sales" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/add_sale")}>Add Sale</MenuItem>
          <MenuItem onClick={() => goto("/sales_list")}>Sales List</MenuItem>
        </SubMenu>
                
        <SubMenu key="7" title="Collection" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/add_purchases")}>Add Purchases</MenuItem>
        </SubMenu>
                
        <SubMenu key="8" title="Payment" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/add_purchases")}>Add Purchases</MenuItem>
        </SubMenu>
                
        <SubMenu key="9" title="SalesReturn" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/add_purchases")}>Add Purchases</MenuItem>
        </SubMenu>
                
        <SubMenu key="10" title="StockMatching" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/add_purchases")}>Add Purchases</MenuItem>
        </SubMenu>
                
        <SubMenu key="11" title="HRManagement" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/add_purchases")}>Add Purchases</MenuItem>
        </SubMenu>
                
        <SubMenu key="12" title="Account" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/add_purchases")}>Add Purchases</MenuItem>
        </SubMenu>
                
        <SubMenu key="13" title="Report" icon={<FiUsers />}>
          <MenuItem onClick={() => goto("/add_purchases")}>Add Purchases</MenuItem>
        </SubMenu>


        <MenuItem
          onClick={() => goto("/sales")}
          key="6"
          icon={<FiTrendingUp />}
        >
          Sales
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Menubar;
