import { SchoolInfo } from "../../../interfaces";

export const SCHOOL_INFO = "SCHOOL_INFO";

export const saveForm = (payload: SchoolInfo) => ({
  type: SCHOOL_INFO,
  payload,
});

interface SaveSchoolInfoAction {
  type: typeof SCHOOL_INFO;
  payload: SchoolInfo;
}

const initialState = {
  form: {
    region: "",
    estType: "",
    schoolGubun: "",
    schoolName: "",
    totalCount: 0,
    adres: "",
    link: "",
    campusName: "",
    seq: 0,
    collegeinfourl: "",
    schoolType: "",
  },
};

const SaveSchoolInfoForm = (
  state = initialState,
  action: SaveSchoolInfoAction
) => {
  switch (action.type) {
    case SCHOOL_INFO:
      return { ...state, form: action.payload };
    default:
      return state;
  }
};

export default SaveSchoolInfoForm