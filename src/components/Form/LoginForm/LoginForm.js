import React, { useState } from "react";
import { Button, Input } from "antd";
import "./LoginForm.css";
import * as authActions from "../../../redux/actions/authActions";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitLoginForm = () => {
    authActions.userLogin(formData);
  };

  return (
    <div className="loginForm">
      <Input name="username" type="email" onChange={handleChange} />
      <Input name="password" type="password" onChange={handleChange} />
      <Button onClick={submitLoginForm}>Submit</Button>
    </div>
  );
};

export default LoginForm;
