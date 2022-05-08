import axios from "axios";
import {
  ADD_STORE_REQUEST,
  ADD_STORE_SUCCESS,
  ADD_STORE_FAIL,
  LIST_STORE_REQUEST,
  LIST_STORE_SUCCESS,
  LIST_STORE_FAIL,
  LIST_ACTIVE_STORE_REQUEST,
  LIST_ACTIVE_STORE_SUCCESS,
  LIST_ACTIVE_STORE_FAIL,
  EDIT_STORE_REQUEST,
  EDIT_STORE_SUCCESS,
  EDIT_STORE_FAIL,
  DELETE_STORE_REQUEST,
  DELETE_STORE_SUCCESS,
  DELETE_STORE_FAIL,
} from "../constants/storeManagementConstants";
import { message } from "antd";

let { REACT_APP_API_DOMAIN } = process.env;
if (process.env.NODE_ENV === "development") {
  REACT_APP_API_DOMAIN = "http://localhost:5000";
}

export const getStores = () => async (dispatch) => {
  try {
    dispatch({
      type: LIST_STORE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/store/getStores`,
      {},
      config
    );

    dispatch({
      type: LIST_STORE_SUCCESS,
      payload: {
        message: data.message,
        stores: data.stores,
      },
    });
    // message.success(data.message);
  } catch (error) {
    dispatch({
      type: LIST_STORE_FAIL,
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

export const getActiveStores = () => async (dispatch) => {
  try {
    dispatch({
      type: LIST_ACTIVE_STORE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/store/getActiveStores`,
      {},
      config
    );

    dispatch({
      type: LIST_ACTIVE_STORE_SUCCESS,
      payload: {
        message: data.message,
        stores: data.stores,
      },
    });
    // message.success(data.message);
  } catch (error) {
    dispatch({
      type: LIST_ACTIVE_STORE_FAIL,
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

export const addStore = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_STORE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/store/createStore`,
      { ...obj },
      config
    );

    dispatch({
      type: ADD_STORE_SUCCESS,
      payload: {
        message: data.message,
        stores: data.stores,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: ADD_STORE_FAIL,
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

export const editStore = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_STORE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/store/updateStore`,
      { ...obj },
      config
    );

    dispatch({
      type: EDIT_STORE_SUCCESS,
      payload: {
        message: data.message,
        stores: data.stores,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: EDIT_STORE_FAIL,
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

export const deleteStore = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_STORE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/store/deleteStore`,
      { ...obj },
      config
    );

    dispatch({
      type: DELETE_STORE_SUCCESS,
      payload: {
        message: data.message,
        stores: data.stores,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: DELETE_STORE_FAIL,
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
