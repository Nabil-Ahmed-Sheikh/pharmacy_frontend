import { combineReducers } from "redux";
import { userLoginReducer } from "./authReducer";
import { addUserTypeReducer, getUserTypeReducer } from "./hrAdminReducer";
const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  addUserType: addUserTypeReducer,
  getUserType: getUserTypeReducer,
});

export default rootReducer;
