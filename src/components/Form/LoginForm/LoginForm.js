import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Spin } from "antd";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import { login } from "../../../redux/actions/authActions";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/user";

  useEffect(() => {
    if (userInfo && Object.keys(userInfo).length > 0) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
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
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginTop: "20px" }}
        />

        <Button type="primary" className="login-button" onClick={submitHandler}>
          Login
        </Button>
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
