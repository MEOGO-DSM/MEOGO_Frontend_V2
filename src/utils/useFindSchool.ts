import { useDispatch, useSelector } from "react-redux";
import { getSchoolInfo } from "../apis/schoolInfo";
import { SchoolInfo } from "../interfaces";
import { saveForm } from "./store/modules/schoolInfo";

interface DataSearch {
  dataSearch: {
    content: SchoolInfo[];
  };
}

const useFindSchool = () => {
  const dispatch = useDispatch();
  const form = useSelector((state: any) => state.SaveSchoolInfoAction.form);

  const { data, isLoading, isError } = getSchoolInfo();

  const preprocessSchoolData = (data: DataSearch | undefined) => {
    const schoolMap: Record<number, SchoolInfo> = {};
    data?.dataSearch.content.forEach((school) => {
      schoolMap[school.seq] = school;
    });
    return schoolMap;
  };

  const schoolMap = preprocessSchoolData(data);

  const findSchoolById = (seq: number) => {
    const school = schoolMap[seq] || null;
    if (school) {
      dispatch(saveForm({ ...school }));
    }
    return school;
  };

  return {
    findSchoolById,
    form,
    isLoading,
    isError
  };
};

export default useFindSchool;
