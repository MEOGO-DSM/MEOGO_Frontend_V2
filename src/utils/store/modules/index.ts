import { combineReducers } from "redux";
import imageAddRemove from "./imageAddRemove";
import tabReducer from "./tabListSelect";
import questionTagSelect from "./questionTagSelect";
import appearPhoto from "./appearPhoto";

const rootReducer = combineReducers({
  imageAddRemove,
  tabReducer,
  questionTagSelect,
  appearPhoto
}); 

export default rootReducer;