import {
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAIL,
  LIST_CONTACT_REQUEST,
  LIST_CONTACT_SUCCESS,
  LIST_CONTACT_FAIL,
  EDIT_CONTACT_REQUEST,
  EDIT_CONTACT_SUCCESS,
  EDIT_CONTACT_FAIL,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAIL,
} from "../constants/contactConstants";
import { message } from "antd";
import axios from "axios";

let { REACT_APP_API_DOMAIN } = process.env;
if (process.env.NODE_ENV === "development") {
  REACT_APP_API_DOMAIN = "http://localhost:5000";
}

export const getContacts = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: LIST_CONTACT_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/contact/listContact`,
      { ...obj },
      config
    );

    dispatch({
      type: LIST_CONTACT_SUCCESS,
      payload: {
        message: data.message,
        contacts: data.suppliers
          ? data.suppliers
          : data.customers
          ? data.customers
          : [],
        count: data.count,
      },
    });
    // message.success(data.message);
  } catch (error) {
    dispatch({
      type: LIST_CONTACT_FAIL,
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

export const addContact = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_CONTACT_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/contact/createContact`,
      { ...obj },
      config
    );

    dispatch({
      type: ADD_CONTACT_SUCCESS,
      payload: {
        message: data.message,
        stores: data.stores,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: ADD_CONTACT_FAIL,
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

export const editContact = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: EDIT_CONTACT_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/contact/updateContact`,
      { ...obj },
      config
    );

    dispatch({
      type: EDIT_CONTACT_SUCCESS,
      payload: {
        message: data.message,
        stores: data.stores,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: EDIT_CONTACT_FAIL,
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

export const deleteContact = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_CONTACT_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("userInfo"))?.user.token,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_API_DOMAIN}/contact/deleteContact`,
      { ...obj },
      config
    );

    dispatch({
      type: DELETE_CONTACT_SUCCESS,
      payload: {
        message: data.message,
        stores: data.stores,
      },
    });
    message.success(data.message);
  } catch (error) {
    dispatch({
      type: DELETE_CONTACT_FAIL,
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
