import { SET_USER_AUTH } from "../types/userTypes";
let initialState = {
  user: null,
};

export const userLoginReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case SET_USER_AUTH:
      return { user: action.payload };
    default:
      return state;
  }
};
