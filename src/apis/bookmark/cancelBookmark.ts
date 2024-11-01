import axios from "axios";

export const cancelBookmark = async(school_id: number) => {
  try {
    const response = await axios.delete(
      `http://localhost:8081/bookmark?school_id=${school_id}`,
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