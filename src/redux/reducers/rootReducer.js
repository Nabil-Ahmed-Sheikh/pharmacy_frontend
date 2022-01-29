import { combineReducers } from "redux";
import { userLoginReducer } from "./authReducer";
import {
  addUserTypeReducer,
  getUserTypeReducer,
  deleteUserTypeReducer,
} from "./hrAdminReducer";
const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  addUserType: addUserTypeReducer,
  getUserType: getUserTypeReducer,
  deleteUserType: deleteUserTypeReducer,
});

export default rootReducer;
