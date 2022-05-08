import {
  ADD_MEDICINE_REQUEST,
  ADD_MEDICINE_SUCCESS,
  ADD_MEDICINE_FAIL,
  LIST_MEDICINE_REQUEST,
  LIST_MEDICINE_SUCCESS,
  LIST_MEDICINE_FAIL,
  LIST_ACTIVE_MEDICINE_REQUEST,
  LIST_ACTIVE_MEDICINE_SUCCESS,
  LIST_ACTIVE_MEDICINE_FAIL,
  EDIT_MEDICINE_REQUEST,
  EDIT_MEDICINE_SUCCESS,
  EDIT_MEDICINE_FAIL,
  DELETE_MEDICINE_REQUEST,
  DELETE_MEDICINE_SUCCESS,
  DELETE_MEDICINE_FAIL,
} from "../constants/medicineConstants";

export const addMedicineReducer = (
  state = { loading: false, message: "", success: false },
  action
) => {
  switch (action.type) {
    case ADD_MEDICINE_REQUEST:
      return { loading: true };
    case ADD_MEDICINE_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
        success: action.payload.success,
      };
    case ADD_MEDICINE_FAIL:
      return {
        loading: false,
        error: action.payload.message,
        success: action.payload.success,
      };
    default:
      return state;
  }
};

export const listMedicineReducer = (
  state = { medicines: [], count: 0 },
  action
) => {
  switch (action.type) {
    case LIST_MEDICINE_REQUEST:
      return { loading: true };
    case LIST_MEDICINE_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
        medicines: action.payload.medicines,
        count: action.payload.count,
      };
    case LIST_MEDICINE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listActiveMedicineReducer = (
  state = { medicines: [], count: 0 },
  action
) => {
  switch (action.type) {
    case LIST_ACTIVE_MEDICINE_REQUEST:
      return { loading: true };
    case LIST_ACTIVE_MEDICINE_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
        medicines: action.payload.medicines,
        count: action.payload.count,
      };
    case LIST_ACTIVE_MEDICINE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const editMedicineReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_MEDICINE_REQUEST:
      return { loading: true };
    case EDIT_MEDICINE_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
      };
    case EDIT_MEDICINE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteMedicineReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_MEDICINE_REQUEST:
      return { loading: true };
    case DELETE_MEDICINE_SUCCESS:
      return { loading: false, message: action.payload };
    case DELETE_MEDICINE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
