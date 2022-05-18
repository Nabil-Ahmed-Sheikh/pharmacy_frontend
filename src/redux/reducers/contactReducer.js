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
  LIST_ACTIVE_CONTACT_REQUEST,
  LIST_ACTIVE_CONTACT_SUCCESS,
  LIST_ACTIVE_CONTACT_FAIL,
} from "../constants/contactConstants";

export const addContactReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CONTACT_REQUEST:
      return { loading: true };
    case ADD_CONTACT_SUCCESS:
      return { loading: false, message: action.payload };
    case ADD_CONTACT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listContactReducer = (
  state = { contacts: [], count: 0 },
  action
) => {
  switch (action.type) {
    case LIST_CONTACT_REQUEST:
      return { loading: true };
    case LIST_CONTACT_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
        contacts: action.payload.contacts,
        count: action.payload.count,
      };
    case LIST_CONTACT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listActiveContactReducer = (
  state = { contacts: [], count: 0 },
  action
) => {
  switch (action.type) {
    case LIST_ACTIVE_CONTACT_REQUEST:
      return { loading: true };
    case LIST_ACTIVE_CONTACT_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
        contacts: action.payload.contacts,
        count: action.payload.count,
      };
    case LIST_ACTIVE_CONTACT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const editContactReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_CONTACT_REQUEST:
      return { loading: true };
    case EDIT_CONTACT_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
      };
    case EDIT_CONTACT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteContactReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CONTACT_REQUEST:
      return { loading: true };
    case DELETE_CONTACT_SUCCESS:
      return { loading: false, message: action.payload };
    case DELETE_CONTACT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
