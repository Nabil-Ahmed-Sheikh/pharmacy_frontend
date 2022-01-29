import {
  ADD_USER_TYPE_REQUEST,
  ADD_USER_TYPE_SUCCESS,
  ADD_USER_TYPE_FAIL,
  GET_USER_TYPE_REQUEST,
  GET_USER_TYPE_SUCCESS,
  GET_USER_TYPE_FAIL,
  DELETE_USER_TYPE_REQUEST,
  DELETE_USER_TYPE_SUCCESS,
  DELETE_USER_TYPE_FAIL,
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
