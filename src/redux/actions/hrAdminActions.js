import axios from "axios";
import {
  ADD_USER_TYPE_REQUEST,
  ADD_USER_TYPE_SUCCESS,
  ADD_USER_TYPE_FAIL,
  GET_USER_TYPE_REQUEST,
  GET_USER_TYPE_SUCCESS,
  GET_USER_TYPE_FAIL,
  GET_USER_TYPE_BY_ID_REQUEST,
  GET_USER_TYPE_BY_ID_SUCCESS,
  GET_USER_TYPE_BY_ID_FAIL,
  DELETE_USER_TYPE_REQUEST,
  DELETE_USER_TYPE_SUCCESS,
  DELETE_USER_TYPE_FAIL,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
} from "../constants/hrAdminConstants";
import { message } from "antd";

let { REACT_APP_API_DOMAIN } = process.env;
if (process.env.NODE_ENV === "development") {
  REACT_APP_API_DOMAIN = "http://localhost:5000";
}

export const addUserType =
  ({ name, status, permissions }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: ADD_USER_TYPE_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("userInfo"))?.user.token,
        },
      };

      const { data } = await axios.post(
        `${REACT_APP_API_DOMAIN}/user/createUserType`,
        { name, status, permissions },
        config
      );

      dispatch({
        type: ADD_USER_TYPE_SUCCESS,
        payload: data.message,
      });
      message.success(data.message);
    } catch (error) {
      dispatch({
        type: ADD_USER_TYPE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      message.error(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

export const getUserType = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_USER_TYPE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/user/getUserTypes`,
      {},
      config
    );

    dispatch({
      type: GET_USER_TYPE_SUCCESS,
      payload: {
        message: data.message,
        userTypeList: data.userTypeList,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: GET_USER_TYPE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    message.error(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const getUserTypeById =
  ({ id }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_USER_TYPE_BY_ID_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("userInfo"))?.user.token,
        },
      };

      const { data } = await axios.post(
        `${REACT_APP_API_DOMAIN}/user/getUserType`,
        { id },
        config
      );

      dispatch({
        type: GET_USER_TYPE_BY_ID_SUCCESS,
        payload: {
          message: data.message,
          userTypeList: data.userTypeList,
        },
      });
      message.success(data.message);
    } catch (error) {
      dispatch({
        type: GET_USER_TYPE_BY_ID_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      message.error(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

export const deleteUserType =
  ({ id }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: DELETE_USER_TYPE_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("userInfo"))?.user.token,
        },
      };

      const { data } = await axios.post(
        `${REACT_APP_API_DOMAIN}/user/removeUserTypes`,
        { id },
        config
      );

      dispatch({
        type: DELETE_USER_TYPE_SUCCESS,
        payload: data.message,
      });
      message.success(data.message);
    } catch (error) {
      dispatch({
        type: DELETE_USER_TYPE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      message.error(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

export const addUser = (obj) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_USER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/user/createUser`,
      obj,
      config
    );

    dispatch({
      type: ADD_USER_SUCCESS,
      payload: data.message,
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: ADD_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    message.error(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};
