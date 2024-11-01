import axios from "axios"

export const getReview = async(
  school_id: number
) => {
  try {
    const response = await axios.get(
      `http://localhost:8989/review/pic?school_id=${school_id}`,
      {
        headers: {
          "Authorization" : "Bearer {Access_Token}"
        }
      }
    )
    return response
  } catch (error: any) {
    console.log("ERROR", error)
    }
  }