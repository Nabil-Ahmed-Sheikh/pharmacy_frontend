import { combineReducers } from "redux";
import { userLoginReducer } from "./authReducer";
const rootReducer = combineReducers({
  userLogin: userLoginReducer,
});

export default rootReducer;
