import { combineReducers } from "redux";
import imageAddRemove from "./imageAddRemove";
import tabReducer from "./tabReducer";

const rootReducer = combineReducers({
  imageAddRemove,
  tabReducer
}); 

export default rootReducer;