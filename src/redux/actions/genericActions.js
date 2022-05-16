import {
  ADD_GENERIC_REQUEST,
  ADD_GENERIC_SUCCESS,
  ADD_GENERIC_FAIL,
  EDIT_GENERIC_REQUEST,
  EDIT_GENERIC_SUCCESS,
  EDIT_GENERIC_FAIL,
  DELETE_GENERIC_REQUEST,
  DELETE_GENERIC_SUCCESS,
  DELETE_GENERIC_FAIL,
  LIST_GENERIC_REQUEST,
  LIST_GENERIC_SUCCESS,
  LIST_GENERIC_FAIL,
  LIST_ACTIVE_GENERIC_REQUEST,
  LIST_ACTIVE_GENERIC_SUCCESS,
  LIST_ACTIVE_GENERIC_FAIL,
} from "../constants/genericConstants";
import { message } from "antd";
import axios from "axios";

let { REACT_APP_API_DOMAIN } = process.env;
if (process.env.NODE_ENV === "development") {
  REACT_APP_API_DOMAIN = "http://localhost:5000";
}

export const addGeneric = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_GENERIC_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/generic/createGeneric`,
      { ...obj },
      config
    );

    dispatch({
      type: ADD_GENERIC_SUCCESS,
      payload: {
        message: data.message,
        stores: data.stores,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: ADD_GENERIC_FAIL,
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

export const editGeneric = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_GENERIC_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/generic/updateGeneric`,
      { ...obj },
      config
    );

    dispatch({
      type: EDIT_GENERIC_SUCCESS,
      payload: {
        message: data.message,
        stores: data.stores,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: EDIT_GENERIC_FAIL,
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

export const deleteGeneric = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_GENERIC_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/generic/deleteGeneric`,
      { ...obj },
      config
    );

    dispatch({
      type: DELETE_GENERIC_SUCCESS,
      payload: {
        message: data.message,
        stores: data.stores,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: DELETE_GENERIC_FAIL,
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

export const getGenerics = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: LIST_GENERIC_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/generic/getGenerics`,
      { ...obj },
      config
    );

    dispatch({
      type: LIST_GENERIC_SUCCESS,
      payload: {
        message: data.message,
        generics: data.generics,
        count: data.count,
      },
    });
    // message.success(data.message);
  } catch (error) {
    dispatch({
      type: LIST_GENERIC_FAIL,
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

export const getActiveGenerics = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: LIST_ACTIVE_GENERIC_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/generic/getActiveGenerics`,
      { ...obj },
      config
    );

    dispatch({
      type: LIST_ACTIVE_GENERIC_SUCCESS,
      payload: {
        message: data.message,
        generics: data.generics,
        count: data.count,
      },
    });
    // message.success(data.message);
  } catch (error) {
    dispatch({
      type: LIST_ACTIVE_GENERIC_FAIL,
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
