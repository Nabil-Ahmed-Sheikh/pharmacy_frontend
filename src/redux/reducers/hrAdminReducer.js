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

const initState = {};

export const addUserTypeReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER_TYPE_REQUEST:
      return { loading: true };
    case ADD_USER_TYPE_SUCCESS:
      return { loading: false, message: action.payload };
    case ADD_USER_TYPE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getUserTypeReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER_TYPE_REQUEST:
      return { loading: true };
    case GET_USER_TYPE_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
        userTypeList: action.payload.userTypeList,
      };
    case GET_USER_TYPE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getUserTypeByIdReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER_TYPE_BY_ID_REQUEST:
      return { loading: true };
    case GET_USER_TYPE_BY_ID_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
        userType: action.payload.userType,
      };
    case GET_USER_TYPE_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteUserTypeReducer = (state = initState, action) => {
  switch (action.type) {
    case DELETE_USER_TYPE_REQUEST:
      return { loading: true };
    case DELETE_USER_TYPE_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
      };
    case DELETE_USER_TYPE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addUserReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER_REQUEST:
      return { loading: true };
    case ADD_USER_SUCCESS:
      return { loading: false, message: action.payload };
    case ADD_USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const editUserReducer = (state = initState, action) => {
  switch (action.type) {
    case EDIT_USER_REQUEST:
      return { loading: true };
    case EDIT_USER_SUCCESS:
      return { loading: false, message: action.payload };
    case EDIT_USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listUserReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { loading: true };
    case GET_USERS_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
        users: action.payload.users,
      };
    case GET_USERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteUserReducer = (state = initState, action) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return { loading: true };
    case DELETE_USER_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
      };
    case DELETE_USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
