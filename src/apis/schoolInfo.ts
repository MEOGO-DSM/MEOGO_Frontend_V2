import { useQuery } from "@tanstack/react-query";
import { instance } from "../apis/axios";
import { SchoolInfo } from "../interfaces";

interface DataSearch {
  dataSearch: {
    content: SchoolInfo[];
  };
}

export const getSchoolInfo = () => {
  return useQuery<DataSearch, Error>({
    queryKey: ["SchoolInfo"],
    queryFn: async () => {
      try {
        const { data } = await instance.get(`https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=963235c8e241a84fea61f23ab039ff42&svcType=api&svcCode=SCHOOL&contentType=json&gubun=high_list`)
        return data
      } catch (error) {
        console.error(error)
        throw new Error("학교 정보를 불러오는데 실패하였습니다.")
      }
    },
  })
}
