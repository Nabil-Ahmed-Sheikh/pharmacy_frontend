import {
  ADD_GENERIC_REQUEST,
  ADD_GENERIC_SUCCESS,
  ADD_GENERIC_FAIL,
  LIST_GENERIC_REQUEST,
  LIST_GENERIC_SUCCESS,
  LIST_GENERIC_FAIL,
  LIST_ACTIVE_GENERIC_REQUEST,
  LIST_ACTIVE_GENERIC_SUCCESS,
  LIST_ACTIVE_GENERIC_FAIL,
  EDIT_GENERIC_REQUEST,
  EDIT_GENERIC_SUCCESS,
  EDIT_GENERIC_FAIL,
  DELETE_GENERIC_REQUEST,
  DELETE_GENERIC_SUCCESS,
  DELETE_GENERIC_FAIL,
} from "../constants/genericConstants";

export const addGenericReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_GENERIC_REQUEST:
      return { loading: true };
    case ADD_GENERIC_SUCCESS:
      return { loading: false, message: action.payload };
    case ADD_GENERIC_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listGenericReducer = (
  state = { contacts: [], count: 0 },
  action
) => {
  switch (action.type) {
    case LIST_GENERIC_REQUEST:
      return { loading: true };
    case LIST_GENERIC_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
        generics: action.payload.generics,
        count: action.payload.count,
      };
    case LIST_GENERIC_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listActiveGenericReducer = (
  state = { generics: [], count: 0 },
  action
) => {
  switch (action.type) {
    case LIST_ACTIVE_GENERIC_REQUEST:
      return { loading: true };
    case LIST_ACTIVE_GENERIC_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
        generics: action.payload.generics,
        count: action.payload.count,
      };
    case LIST_ACTIVE_GENERIC_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const editGenericReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_GENERIC_REQUEST:
      return { loading: true };
    case EDIT_GENERIC_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
      };
    case EDIT_GENERIC_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteGenericReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_GENERIC_REQUEST:
      return { loading: true };
    case DELETE_GENERIC_SUCCESS:
      return { loading: false, message: action.payload };
    case DELETE_GENERIC_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
