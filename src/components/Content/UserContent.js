import React from "react";
import "./Content.css";
import { Route, Switch } from "react-router-dom";
import UserTypes from "../HRAdmin/UserTypes";
import Users from "../HRAdmin/Users";
const UserContent = ({ collapsed }) => {
  return (
    <div className={collapsed ? "content_collapsed" : "content"}>
      <Switch>
        <Route exact path="/user/user_types" component={UserTypes} />
        <Route exact path="/user/users" component={Users} />
      </Switch>
    </div>
  );
};

export default UserContent;
