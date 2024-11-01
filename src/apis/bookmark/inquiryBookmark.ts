import axios from "axios";

export const inquiryBookmark = async() => {
  try {
    const response = await axios.get(
      `http://localhost:8081/bookmark/query/my`,
      {
        headers: {
            "Authorization" : "Bearer {Access_Token}"
          }
      }
    )
    return response
  } catch(error) {
    console.log("ERROR", error)
  }
}