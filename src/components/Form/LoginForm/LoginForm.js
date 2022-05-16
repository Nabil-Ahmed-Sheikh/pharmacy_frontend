import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Spin } from "antd";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import { login } from "../../../redux/actions/authActions";

const LoginForm = ({ loading }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    let obj = {
      username,
      password,
    };

    dispatch(login(obj, history));
  };

  return (
    <div className="loginForm">
      <div className="login-form-auth-div">
        <h2>Login</h2>
        <Input
          placeholder="Username/Email"
          name="username"
          type="email"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginTop: "20px" }}
          value={password}
        />

        {loading ? (
          <Spin className="login-spin" />
        ) : (
          <Button
            type="primary"
            className="login-button"
            onClick={submitHandler}
          >
            Login
          </Button>
        )}

        <Link to="/forgotpassword">Forgot Password?</Link>
      </div>
      <div className="login-form-img-div">
        <h1>Welcome</h1>
        <p>Apps Zones pharmacy management System</p>
      </div>
    </div>
  );
};

export default LoginForm;
