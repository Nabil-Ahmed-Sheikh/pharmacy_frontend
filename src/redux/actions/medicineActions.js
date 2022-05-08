import {
  ADD_MEDICINE_REQUEST,
  ADD_MEDICINE_SUCCESS,
  ADD_MEDICINE_FAIL,
  EDIT_MEDICINE_REQUEST,
  EDIT_MEDICINE_SUCCESS,
  EDIT_MEDICINE_FAIL,
  DELETE_MEDICINE_REQUEST,
  DELETE_MEDICINE_SUCCESS,
  DELETE_MEDICINE_FAIL,
  LIST_MEDICINE_REQUEST,
  LIST_MEDICINE_SUCCESS,
  LIST_MEDICINE_FAIL,
  LIST_ACTIVE_MEDICINE_REQUEST,
  LIST_ACTIVE_MEDICINE_SUCCESS,
  LIST_ACTIVE_MEDICINE_FAIL,
} from "../constants/medicineConstants";

import { message } from "antd";
import axios from "axios";

let { REACT_APP_API_DOMAIN } = process.env;
if (process.env.NODE_ENV === "development") {
  REACT_APP_API_DOMAIN = "http://localhost:5000";
}

export const addMedicine = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_MEDICINE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/medicine/createMedicine`,
      { ...obj },
      config
    );

    dispatch({
      type: ADD_MEDICINE_SUCCESS,
      payload: {
        message: data.message,
        success: data.success,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: ADD_MEDICINE_FAIL,
      payload: {
        message:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        success: false,
      },
    });
    message.error(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const editMedicine = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_MEDICINE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/medicine/updateMedicine`,
      { ...obj },
      config
    );

    dispatch({
      type: EDIT_MEDICINE_SUCCESS,
      payload: {
        message: data.message,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: EDIT_MEDICINE_FAIL,
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

export const deleteMedicine = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_MEDICINE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/medicine/deleteMedicine`,
      { ...obj },
      config
    );

    dispatch({
      type: DELETE_MEDICINE_SUCCESS,
      payload: {
        message: data.message,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: DELETE_MEDICINE_FAIL,
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

export const getMedicines = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: LIST_MEDICINE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/medicine/getMedicines`,
      { ...obj },
      config
    );

    dispatch({
      type: LIST_MEDICINE_SUCCESS,
      payload: {
        message: data.message,
        medicines: data.medicines,
        count: data.count,
      },
    });
    // message.success(data.message);
  } catch (error) {
    dispatch({
      type: LIST_MEDICINE_FAIL,
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

export const getActiveMedicines = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: LIST_ACTIVE_MEDICINE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/medicine/getActiveMedicines`,
      { ...obj },
      config
    );

    dispatch({
      type: LIST_ACTIVE_MEDICINE_SUCCESS,
      payload: {
        message: data.message,
        medicines: data.medicines,
        count: data.count,
      },
    });
    // message.success(data.message);
  } catch (error) {
    dispatch({
      type: LIST_ACTIVE_MEDICINE_FAIL,
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
