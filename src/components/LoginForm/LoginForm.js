import React from "react";
import { Button, Input } from "antd";
import "./LoginForm";
const LoginForm = () => {
  return (
    <div className="loginForm">
      <Input name="username" type="email" />
      <Input name="username" type="password" />
      <Button>Submit</Button>
    </div>
  );
};

export default LoginForm;
