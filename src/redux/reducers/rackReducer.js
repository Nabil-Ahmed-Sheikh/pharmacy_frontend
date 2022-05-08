import {
  ADD_RACK_REQUEST,
  ADD_RACK_SUCCESS,
  ADD_RACK_FAIL,
  LIST_RACK_REQUEST,
  LIST_RACK_SUCCESS,
  LIST_RACK_FAIL,
  LIST_ACTIVE_RACK_REQUEST,
  LIST_ACTIVE_RACK_SUCCESS,
  LIST_ACTIVE_RACK_FAIL,
  EDIT_RACK_REQUEST,
  EDIT_RACK_SUCCESS,
  EDIT_RACK_FAIL,
  DELETE_RACK_REQUEST,
  DELETE_RACK_SUCCESS,
  DELETE_RACK_FAIL,
} from "../constants/rackConstants";

export const addRackReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_RACK_REQUEST:
      return { loading: true };
    case ADD_RACK_SUCCESS:
      return { loading: false, message: action.payload };
    case ADD_RACK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listRackReducer = (state = { racks: [], count: 0 }, action) => {
  switch (action.type) {
    case LIST_RACK_REQUEST:
      return { loading: true };
    case LIST_RACK_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
        racks: action.payload.racks,
        count: action.payload.count,
      };
    case LIST_RACK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listActiveRackReducer = (
  state = { racks: [], count: 0 },
  action
) => {
  switch (action.type) {
    case LIST_ACTIVE_RACK_REQUEST:
      return { loading: true };
    case LIST_ACTIVE_RACK_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
        racks: action.payload.racks,
        count: action.payload.count,
      };
    case LIST_ACTIVE_RACK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const editRackReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_RACK_REQUEST:
      return { loading: true };
    case EDIT_RACK_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
      };
    case EDIT_RACK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteRackReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_RACK_REQUEST:
      return { loading: true };
    case DELETE_RACK_SUCCESS:
      return { loading: false, message: action.payload };
    case DELETE_RACK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
