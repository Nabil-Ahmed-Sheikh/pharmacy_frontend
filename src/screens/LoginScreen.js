import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import LoginForm from "../components/Form/LoginForm/LoginForm";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const loginPageStyles = {
  margin: "auto",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const LoginScreen = () => {
  const location = useLocation();
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  const redirectURL = location.search
    ? location.search.split("=")[1]
    : "/user/dashboard";

  useEffect(() => {
    if (userInfo && Object.keys(userInfo).length > 0) {
      history.push(redirectURL);
    }
  }, []);
  return (
    <div style={loginPageStyles}>
      <LoginForm loading={loading} />
    </div>
  );
};

export default LoginScreen;
