import {
  ADD_MEDICINE_FORM_REQUEST,
  ADD_MEDICINE_FORM_SUCCESS,
  ADD_MEDICINE_FORM_FAIL,
  LIST_MEDICINE_FORM_REQUEST,
  LIST_MEDICINE_FORM_SUCCESS,
  LIST_MEDICINE_FORM_FAIL,
  LIST_ACTIVE_MEDICINE_FORM_REQUEST,
  LIST_ACTIVE_MEDICINE_FORM_SUCCESS,
  LIST_ACTIVE_MEDICINE_FORM_FAIL,
  EDIT_MEDICINE_FORM_REQUEST,
  EDIT_MEDICINE_FORM_SUCCESS,
  EDIT_MEDICINE_FORM_FAIL,
  DELETE_MEDICINE_FORM_REQUEST,
  DELETE_MEDICINE_FORM_SUCCESS,
  DELETE_MEDICINE_FORM_FAIL,
} from "../constants/medicineFormConstants";

export const addMedicineFormReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_MEDICINE_FORM_REQUEST:
      return { loading: true };
    case ADD_MEDICINE_FORM_SUCCESS:
      return { loading: false, message: action.payload };
    case ADD_MEDICINE_FORM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listMedicineFormReducer = (
  state = { medicineForms: [], count: 0 },
  action
) => {
  switch (action.type) {
    case LIST_MEDICINE_FORM_REQUEST:
      return { loading: true };
    case LIST_MEDICINE_FORM_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
        medicineForms: action.payload.medicineForms,
        count: action.payload.count,
      };
    case LIST_MEDICINE_FORM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listActiveMedicineFormReducer = (
  state = { medicineForms: [], count: 0 },
  action
) => {
  switch (action.type) {
    case LIST_ACTIVE_MEDICINE_FORM_REQUEST:
      return { loading: true };
    case LIST_ACTIVE_MEDICINE_FORM_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
        medicineForms: action.payload.medicineForms,
        count: action.payload.count,
      };
    case LIST_ACTIVE_MEDICINE_FORM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const editMedicineFormReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_MEDICINE_FORM_REQUEST:
      return { loading: true };
    case EDIT_MEDICINE_FORM_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
      };
    case EDIT_MEDICINE_FORM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteMedicineFormReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_MEDICINE_FORM_REQUEST:
      return { loading: true };
    case DELETE_MEDICINE_FORM_SUCCESS:
      return { loading: false, message: action.payload };
    case DELETE_MEDICINE_FORM_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
