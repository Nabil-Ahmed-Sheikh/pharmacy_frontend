import React from "react";
import "./Header.css";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authActions";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const { userInfo } = useSelector((state) => state.userLogin);

  const goToLogin = () => {
    history.push("/login");
  };

  const goToDashBoard = () => {
    history.push("/user/dashboard");
  };

  const handleLogout = () => {
    dispatch(logout(history));
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">
          <img
            src={require("../../assets/images/logo.png")}
            alt="logo"
            onClick={() => history.push("/")}
          />
        </div>
      </div>
      {userInfo?.success && userInfo?.user ? (
        <>
          <button className="header-button" onClick={goToDashBoard}>
            Dashboard
          </button>
          <button className="header-button" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <button className="header-button" onClick={goToLogin}>
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
