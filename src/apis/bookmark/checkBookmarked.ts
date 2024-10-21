import axios from "axios";

/**
 * 북마크한 학교인지 조회 (true / false 반환)
 */

export const checkBookmarked = async(school_id: number) => {
  try {
    const response = await axios.get(
      `http://localhost:8081/bookmark/query?school_id=${school_id}`,
      {
       headers: {
        "Authorization" : `Bearer {Access_Token}`
       }
      }
    )
    return response
  } catch(error) {
    console.log("ERROR", error)
  }
}