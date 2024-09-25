import { combineReducers } from "redux";
import imageAddRemove from "./imageAddRemove";
import tabReducer from "./tabListSelect";
import questionTagSelect from "./questionTagSelect";
import appearExpandPhoto from "./appearExpandPhoto";

const rootReducer = combineReducers({
  imageAddRemove,
  tabReducer,
  questionTagSelect,
  appearExpandPhoto
}); 

export default rootReducer;