import React, { useState } from "react";
import Menubar from "../Menubar/Menubar";
import Content from "../Content/UserContent";

const UserDashBoard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="dashboard-container">
      <Menubar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      <Content collapsed={collapsed} />
    </div>
  );
};

export default UserDashBoard;
