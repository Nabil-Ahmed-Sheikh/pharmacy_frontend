import React, { useState } from "react";
import LoginForm from "../components/Form/LoginForm/LoginForm";

const loginPageStyles = {
  margin: "auto",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const LoginScreen = () => {
  return (
    <div style={loginPageStyles}>
      <LoginForm />
    </div>
  );
};

export default LoginScreen;
