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

export const addStoreReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_STORE_REQUEST:
      return { loading: true };
    case ADD_STORE_SUCCESS:
      return { loading: false, message: action.payload };
    case ADD_STORE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listStoreReducer = (state = { stores: [] }, action) => {
  switch (action.type) {
    case LIST_STORE_REQUEST:
      return { loading: true };
    case LIST_STORE_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
        stores: action.payload.stores,
      };
    case LIST_STORE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listActiveStoreReducer = (state = { stores: [] }, action) => {
  switch (action.type) {
    case LIST_ACTIVE_STORE_REQUEST:
      return { loading: true };
    case LIST_ACTIVE_STORE_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
        stores: action.payload.stores,
      };
    case LIST_ACTIVE_STORE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const editStoreReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_STORE_REQUEST:
      return { loading: true };
    case EDIT_STORE_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
        userType: action.payload.userType,
      };
    case EDIT_STORE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteStoreReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_STORE_REQUEST:
      return { loading: true };
    case DELETE_STORE_SUCCESS:
      return { loading: false, message: action.payload };
    case DELETE_STORE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
