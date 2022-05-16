import {
  ADD_MEDICINE_FORM_REQUEST,
  ADD_MEDICINE_FORM_SUCCESS,
  ADD_MEDICINE_FORM_FAIL,
  EDIT_MEDICINE_FORM_REQUEST,
  EDIT_MEDICINE_FORM_SUCCESS,
  EDIT_MEDICINE_FORM_FAIL,
  DELETE_MEDICINE_FORM_REQUEST,
  DELETE_MEDICINE_FORM_SUCCESS,
  DELETE_MEDICINE_FORM_FAIL,
  LIST_MEDICINE_FORM_REQUEST,
  LIST_MEDICINE_FORM_SUCCESS,
  LIST_MEDICINE_FORM_FAIL,
  LIST_ACTIVE_MEDICINE_FORM_REQUEST,
  LIST_ACTIVE_MEDICINE_FORM_SUCCESS,
  LIST_ACTIVE_MEDICINE_FORM_FAIL,
} from "../constants/medicineFormConstants";

import { message } from "antd";
import axios from "axios";

let { REACT_APP_API_DOMAIN } = process.env;
if (process.env.NODE_ENV === "development") {
  REACT_APP_API_DOMAIN = "http://localhost:5000";
}

export const addMedicineForm = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_MEDICINE_FORM_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/medicineForm/createMedicineForm`,
      { ...obj },
      config
    );

    dispatch({
      type: ADD_MEDICINE_FORM_SUCCESS,
      payload: {
        message: data.message,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: ADD_MEDICINE_FORM_FAIL,
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

export const editMedicineForm = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_MEDICINE_FORM_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/medicineForm/updateMedicineForm`,
      { ...obj },
      config
    );

    dispatch({
      type: EDIT_MEDICINE_FORM_SUCCESS,
      payload: {
        message: data.message,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: EDIT_MEDICINE_FORM_FAIL,
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

export const deleteMedicineForm = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_MEDICINE_FORM_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/medicineForm/deleteMedicineForm`,
      { ...obj },
      config
    );

    dispatch({
      type: DELETE_MEDICINE_FORM_SUCCESS,
      payload: {
        message: data.message,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: DELETE_MEDICINE_FORM_FAIL,
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

export const getMedicineForms = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: LIST_MEDICINE_FORM_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/medicineForm/getMedicineForms`,
      { ...obj },
      config
    );

    dispatch({
      type: LIST_MEDICINE_FORM_SUCCESS,
      payload: {
        message: data.message,
        medicineForms: data.medicineForms,
        count: data.count,
      },
    });
    // message.success(data.message);
  } catch (error) {
    dispatch({
      type: LIST_MEDICINE_FORM_FAIL,
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

export const getActiveMedicineForms = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: LIST_ACTIVE_MEDICINE_FORM_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/medicineForm/getActiveMedicineForms`,
      { ...obj },
      config
    );

    dispatch({
      type: LIST_ACTIVE_MEDICINE_FORM_SUCCESS,
      payload: {
        message: data.message,
        medicineForms: data.medicineForms,
        count: data.count,
      },
    });
    // message.success(data.message);
  } catch (error) {
    dispatch({
      type: LIST_ACTIVE_MEDICINE_FORM_FAIL,
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
