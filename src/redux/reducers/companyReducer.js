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

export const addCompanyReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_COMPANY_REQUEST:
      return { loading: true };
    case ADD_COMPANY_SUCCESS:
      return { loading: false, message: action.payload };
    case ADD_COMPANY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listCompanyReducer = (
  state = { companies: [], count: 0 },
  action
) => {
  switch (action.type) {
    case LIST_COMPANY_REQUEST:
      return { loading: true };
    case LIST_COMPANY_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
        companies: action.payload.companies,
        count: action.payload.count,
      };
    case LIST_COMPANY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listActiveCompanyReducer = (
  state = { companies: [], count: 0 },
  action
) => {
  switch (action.type) {
    case LIST_ACTIVE_COMPANY_REQUEST:
      return { loading: true };
    case LIST_ACTIVE_COMPANY_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
        companies: action.payload.companies,
        count: action.payload.count,
      };
    case LIST_ACTIVE_COMPANY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const editCompanyReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_COMPANY_REQUEST:
      return { loading: true };
    case EDIT_COMPANY_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
      };
    case EDIT_COMPANY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteCompanyReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_COMPANY_REQUEST:
      return { loading: true };
    case DELETE_COMPANY_SUCCESS:
      return { loading: false, message: action.payload };
    case DELETE_COMPANY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
