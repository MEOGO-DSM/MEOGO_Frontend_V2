import axios from "axios";

export const getKeywordRanking = async(school_id: number) => {
  try{
    const response = await axios.get(
      `http://localhost:8989/review/query/result?school_id=${school_id}`,
      {
        headers: {
          "Authorization" : "Bearer {Access_Token}"
        }
      }
    )
    return response.data
  } catch(error) {
    console.log("ERROR", error)
  }
}