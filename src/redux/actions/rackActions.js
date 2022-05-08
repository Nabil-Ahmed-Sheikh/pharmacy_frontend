import {
  ADD_RACK_REQUEST,
  ADD_RACK_SUCCESS,
  ADD_RACK_FAIL,
  EDIT_RACK_REQUEST,
  EDIT_RACK_SUCCESS,
  EDIT_RACK_FAIL,
  DELETE_RACK_REQUEST,
  DELETE_RACK_SUCCESS,
  DELETE_RACK_FAIL,
  LIST_RACK_REQUEST,
  LIST_RACK_SUCCESS,
  LIST_RACK_FAIL,
  LIST_ACTIVE_RACK_REQUEST,
  LIST_ACTIVE_RACK_SUCCESS,
  LIST_ACTIVE_RACK_FAIL,
} from "../constants/rackConstants";

import { message } from "antd";
import axios from "axios";

let { REACT_APP_API_DOMAIN } = process.env;
if (process.env.NODE_ENV === "development") {
  REACT_APP_API_DOMAIN = "http://localhost:5000";
}

export const addRack = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_RACK_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/rack/createRack`,
      { ...obj },
      config
    );

    dispatch({
      type: ADD_RACK_SUCCESS,
      payload: {
        message: data.message,
        stores: data.stores,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: ADD_RACK_FAIL,
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

export const editRack = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_RACK_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/rack/updateRack`,
      { ...obj },
      config
    );

    dispatch({
      type: EDIT_RACK_SUCCESS,
      payload: {
        message: data.message,
        stores: data.stores,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: EDIT_RACK_FAIL,
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

export const deleteRack = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_RACK_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/rack/deleteRack`,
      { ...obj },
      config
    );

    dispatch({
      type: DELETE_RACK_SUCCESS,
      payload: {
        message: data.message,
        stores: data.stores,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: DELETE_RACK_FAIL,
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

export const getRacks = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: LIST_RACK_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/rack/getRacks`,
      { ...obj },
      config
    );

    dispatch({
      type: LIST_RACK_SUCCESS,
      payload: {
        message: data.message,
        racks: data.racks,
        count: data.count,
      },
    });
    // message.success(data.message);
  } catch (error) {
    dispatch({
      type: LIST_RACK_FAIL,
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

export const getActiveRacks = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: LIST_ACTIVE_RACK_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/rack/getActiveRacks`,
      { ...obj },
      config
    );

    dispatch({
      type: LIST_ACTIVE_RACK_SUCCESS,
      payload: {
        message: data.message,
        racks: data.racks,
        count: data.count,
      },
    });
    // message.success(data.message);
  } catch (error) {
    dispatch({
      type: LIST_ACTIVE_RACK_FAIL,
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
