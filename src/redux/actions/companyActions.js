import {
  ADD_COMPANY_REQUEST,
  ADD_COMPANY_SUCCESS,
  ADD_COMPANY_FAIL,
  LIST_COMPANY_REQUEST,
  LIST_COMPANY_SUCCESS,
  LIST_COMPANY_FAIL,
  LIST_ACTIVE_COMPANY_REQUEST,
  LIST_ACTIVE_COMPANY_SUCCESS,
  LIST_ACTIVE_COMPANY_FAIL,
  EDIT_COMPANY_REQUEST,
  EDIT_COMPANY_SUCCESS,
  EDIT_COMPANY_FAIL,
  DELETE_COMPANY_REQUEST,
  DELETE_COMPANY_SUCCESS,
  DELETE_COMPANY_FAIL,
} from "../constants/companyConstants";
import { message } from "antd";
import axios from "axios";

let { REACT_APP_API_DOMAIN } = process.env;
if (process.env.NODE_ENV === "development") {
  REACT_APP_API_DOMAIN = "http://localhost:5000";
}

export const addCompany = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_COMPANY_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/company/createCompany`,
      { ...obj },
      config
    );

    dispatch({
      type: ADD_COMPANY_SUCCESS,
      payload: {
        message: data.message,
        stores: data.stores,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: ADD_COMPANY_FAIL,
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

export const editCompany = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_COMPANY_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/company/updateCompany`,
      { ...obj },
      config
    );

    dispatch({
      type: EDIT_COMPANY_SUCCESS,
      payload: {
        message: data.message,
        stores: data.stores,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: EDIT_COMPANY_FAIL,
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

export const deleteCompany = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_COMPANY_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/company/deleteCompany`,
      { ...obj },
      config
    );

    dispatch({
      type: DELETE_COMPANY_SUCCESS,
      payload: {
        message: data.message,
        stores: data.stores,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: DELETE_COMPANY_FAIL,
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

export const getCompanies = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: LIST_COMPANY_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/company/getCompanies`,
      { ...obj },
      config
    );

    dispatch({
      type: LIST_COMPANY_SUCCESS,
      payload: {
        message: data.message,
        companies: data.companies,
        count: data.count,
      },
    });
    // message.success(data.message);
  } catch (error) {
    dispatch({
      type: LIST_COMPANY_FAIL,
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

export const getActiveCompanies = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: LIST_ACTIVE_COMPANY_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/company/getActiveCompanies`,
      { ...obj },
      config
    );

    dispatch({
      type: LIST_ACTIVE_COMPANY_SUCCESS,
      payload: {
        message: data.message,
        companies: data.companies,
        count: data.count,
      },
    });
    // message.success(data.message);
  } catch (error) {
    dispatch({
      type: LIST_ACTIVE_COMPANY_FAIL,
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
