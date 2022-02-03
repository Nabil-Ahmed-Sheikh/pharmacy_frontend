import { combineReducers } from "redux";
import { userLoginReducer } from "./authReducer";
import {
  addUserTypeReducer,
  getUserTypeReducer,
  deleteUserTypeReducer,
  addUserReducer,
} from "./hrAdminReducer";
const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  addUserType: addUserTypeReducer,
  getUserType: getUserTypeReducer,
  deleteUserType: deleteUserTypeReducer,
  addUser: addUserReducer,
});

export default rootReducer;
