import axios from "axios";
//import { API_KEY } from "../env";

export const getSchoolInformation = async() => {
  try {
    const response = await axios.get(
      `http://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=963235c8e241a84fea61f23ab039ff42&svcType=api&svcCode=SCHOOL&contentType=xml&gubun=elem_list`,
    )
    return response
  } catch(error) {
    console.log("ERROR", error)
  }
}