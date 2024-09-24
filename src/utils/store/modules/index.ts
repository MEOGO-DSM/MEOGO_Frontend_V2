import { combineReducers } from "redux";
import imageAddRemove from "./imageAddRemove";
import tabReducer from "./tabListSelect";
import questionTagSelect from "./questionTagSelect";

const rootReducer = combineReducers({
  imageAddRemove,
  tabReducer,
  questionTagSelect
}); 

export default rootReducer;