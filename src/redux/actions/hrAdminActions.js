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
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from "../constants/hrAdminConstants";
import { message } from "antd";

let { REACT_APP_API_DOMAIN } = process.env;
if (process.env.NODE_ENV === "development") {
  REACT_APP_API_DOMAIN = "http://localhost:5000";
}

export const addUserType =
  ({ name, status, permissions }) =>
  async (dispatch) => {
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

export const getUserType = () => async (dispatch) => {
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
  async (dispatch) => {
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

export const addUser = (obj) => async (dispatch) => {
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

export const getUsers = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: GET_USERS_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/user/getUsers`,
      obj,
      config
    );

    dispatch({
      type: GET_USERS_SUCCESS,
      payload: {
        success: data.success,
        message: data.message,
        users: data.users,
        count: data.count,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: GET_USERS_FAIL,
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

export const editUser = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_USER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/user/updateUser`,
      obj,
      config
    );

    dispatch({
      type: EDIT_USER_SUCCESS,
      payload: data.message,
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: EDIT_USER_FAIL,
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

export const deleteUser = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_USER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/user/deleteUser`,
      obj,
      config
    );

    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: data.message,
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
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
