import { combineReducers } from "redux";
import imageAddRemove from "./imageAddRemove";
import tabReducer from "./tabListSelect";
import questionTagSelect from "./questionTagSelect";
import appearPhoto from "./appearPhoto";
import SaveSchoolInfoForm from "./schoolInfo";

const rootReducer = combineReducers({
  imageAddRemove,
  tabReducer,
  questionTagSelect,
  appearPhoto,
  SaveSchoolInfoForm
}); 

export default rootReducer;