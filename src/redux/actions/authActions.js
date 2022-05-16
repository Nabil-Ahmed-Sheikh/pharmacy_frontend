import { message } from "antd";
import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/userConstants";

let { REACT_APP_API_DOMAIN } = process.env;
if (process.env.NODE_ENV === "development") {
  REACT_APP_API_DOMAIN = "http://localhost:5000";
}

export const login = (obj, history) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/auth/login`,
      obj,
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
    history.push("/user/dashboard");
  } catch (error) {
    let errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: USER_LOGIN_FAIL,
      payload: errorMessage,
    });

    message.error(errorMessage);
  }
};

export const logout = (history) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LOGOUT,
    });
    localStorage.removeItem("userInfo");
    message.success("Logged out");
    history.push("/login");
  } catch (error) {
    message.error("Something went wrong");
  }
};
