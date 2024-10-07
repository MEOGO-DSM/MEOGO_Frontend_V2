import { combineReducers } from "redux";
import imageAddRemove from "./imageAddRemove";
import tabReducer from "./tabListSelect";
import questionTagSelect from "./questionTagSelect";
import appearImage from "./appearPhoto";

const rootReducer = combineReducers({
  imageAddRemove,
  tabReducer,
  questionTagSelect,
  appearImage
}); 

export default rootReducer;